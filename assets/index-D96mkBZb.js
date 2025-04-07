(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Du(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},xs=[],In=()=>{},hE=()=>!1,cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vu=t=>t.startsWith("onUpdate:"),Ct=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dE=Object.prototype.hasOwnProperty,De=(t,e)=>dE.call(t,e),le=Array.isArray,Os=t=>vo(t)==="[object Map]",ul=t=>vo(t)==="[object Set]",rf=t=>vo(t)==="[object Date]",_e=t=>typeof t=="function",tt=t=>typeof t=="string",Pn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Bm=t=>(Be(t)||_e(t))&&_e(t.then)&&_e(t.catch),$m=Object.prototype.toString,vo=t=>$m.call(t),fE=t=>vo(t).slice(8,-1),jm=t=>vo(t)==="[object Object]",Lu=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ui=Du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pE=/-(\w)/g,on=hl(t=>t.replace(pE,(e,n)=>n?n.toUpperCase():"")),mE=/\B([A-Z])/g,cs=hl(t=>t.replace(mE,"-$1").toLowerCase()),dl=hl(t=>t.charAt(0).toUpperCase()+t.slice(1)),gc=hl(t=>t?`on${dl(t)}`:""),wr=(t,e)=>!Object.is(t,e),fa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sf;const fl=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?wE(r):Mu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||Be(t))return t}const gE=/;(?![^(]*\))/g,_E=/:([^]+)/,yE=/\/\*[^]*?\*\//g;function wE(t){const e={};return t.replace(yE,"").split(gE).forEach(n=>{if(n){const r=n.split(_E);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wt(t){let e="";if(tt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Wt(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",EE=Du(vE);function qm(t){return!!t||t===""}function bE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=pl(t[r],e[r]);return n}function pl(t,e){if(t===e)return!0;let n=rf(t),r=rf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pn(t),r=Pn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?bE(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!pl(t[o],e[o]))return!1}}return String(t)===String(e)}function zm(t,e){return t.findIndex(n=>pl(n,e))}const Wm=t=>!!(t&&t.__v_isRef===!0),Ue=t=>tt(t)?t:t==null?"":le(t)||Be(t)&&(t.toString===$m||!_e(t.toString))?Wm(t)?Ue(t.value):JSON.stringify(t,Km,2):String(t),Km=(t,e)=>Wm(e)?Km(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_c(r,i)+" =>"]=s,n),{})}:ul(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_c(n))}:Pn(e)?_c(e):Be(e)&&!le(e)&&!jm(e)?String(e):e,_c=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qm(t){return new Gm(t)}function Ym(){return xt}function TE(t,e=!1){xt&&xt.cleanups.push(t)}let Fe;const yc=new WeakSet;class Jm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yc.has(this)&&(yc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),eg(this);const e=Fe,n=fn;Fe=this,fn=!0;try{return this.fn()}finally{tg(this),Fe=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let Xm=0,Bi,$i;function Zm(t,e=!1){if(t.flags|=8,e){t.next=$i,$i=t;return}t.next=Bi,Bi=t}function Fu(){Xm++}function Uu(){if(--Xm>0)return;if($i){let e=$i;for($i=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Bi;){let e=Bi;for(Bi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function eg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bu(r),IE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ng(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zi))return;t.globalVersion=Zi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!qc(t)){t.flags&=-3;return}const n=Fe,r=fn;Fe=t,fn=!0;try{eg(t);const s=t.fn(t._value);(e.version===0||wr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,fn=r,tg(t),t.flags&=-3}}function Bu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function IE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const rg=[];function Dr(){rg.push(fn),fn=!1}function Vr(){const t=rg.pop();fn=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Zi=0;class AE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $u{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!fn||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new AE(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Zi++,this.notify(e)}notify(e){Fu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uu()}}}function sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Sa=new WeakMap,Yr=Symbol(""),zc=Symbol(""),eo=Symbol("");function bt(t,e,n){if(fn&&Fe){let r=Sa.get(t);r||Sa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $u),s.map=r,s.key=n),s.track()}}function Un(t,e,n,r,s,i){const o=Sa.get(t);if(!o){Zi++;return}const l=c=>{c&&c.trigger()};if(Fu(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&Lu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===eo||!Pn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(eo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Yr)),Os(t)&&l(o.get(zc)));break;case"delete":c||(l(o.get(Yr)),Os(t)&&l(o.get(zc)));break;case"set":Os(t)&&l(o.get(Yr));break}}Uu()}function CE(t,e){const n=Sa.get(t);return n&&n.get(e)}function Es(t){const e=ke(t);return e===t?e:(bt(e,"iterate",eo),nn(t)?e:e.map(Tt))}function ml(t){return bt(t=ke(t),"iterate",eo),t}const SE={__proto__:null,[Symbol.iterator](){return wc(this,Symbol.iterator,Tt)},concat(...t){return Es(this).concat(...t.map(e=>le(e)?Es(e):e))},entries(){return wc(this,"entries",t=>(t[1]=Tt(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(Tt),arguments)},find(t,e){return Ln(this,"find",t,e,Tt,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,Tt,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return vc(this,"includes",t)},indexOf(...t){return vc(this,"indexOf",t)},join(t){return Es(this).join(t)},lastIndexOf(...t){return vc(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return Pi(this,"pop")},push(...t){return Pi(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return Pi(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return Pi(this,"splice",t)},toReversed(){return Es(this).toReversed()},toSorted(t){return Es(this).toSorted(t)},toSpliced(...t){return Es(this).toSpliced(...t)},unshift(...t){return Pi(this,"unshift",t)},values(){return wc(this,"values",Tt)}};function wc(t,e,n){const r=ml(t),s=r[e]();return r!==t&&!nn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const RE=Array.prototype;function Ln(t,e,n,r,s,i){const o=ml(t),l=o!==t&&!nn(t),c=o[e];if(c!==RE[e]){const p=c.apply(t,i);return l?Tt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Tt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function af(t,e,n,r){const s=ml(t);let i=n;return s!==t&&(nn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Tt(l),c,t)}),s[e](i,...r)}function vc(t,e,n){const r=ke(t);bt(r,"iterate",eo);const s=r[e](...n);return(s===-1||s===!1)&&qu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function Pi(t,e,n=[]){Dr(),Fu();const r=ke(t)[e].apply(t,n);return Uu(),Vr(),r}const PE=Du("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn));function kE(t){Pn(t)||(t=String(t));const e=ke(this);return bt(e,"has",t),e.hasOwnProperty(t)}class og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?BE:ug:i?cg:lg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=SE[n]))return c;if(n==="hasOwnProperty")return kE}const l=Reflect.get(e,n,Je(e)?e:r);return(Pn(n)?ig.has(n):PE(n))||(s||bt(e,"get",n),i)?l:Je(l)?o&&Lu(n)?l:l.value:Be(l)?s?dg(l):Eo(l):l}}class ag extends og{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=es(i);if(!nn(r)&&!es(r)&&(i=ke(i),r=ke(r)),!le(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Lu(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Je(e)?e:s);return e===ke(s)&&(o?wr(r,i)&&Un(e,"set",n,r):Un(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!ig.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",le(e)?"length":Yr),Reflect.ownKeys(e)}}class xE extends og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OE=new ag,DE=new xE,VE=new ag(!0);const Wc=t=>t,ra=t=>Reflect.getPrototypeOf(t);function NE(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=Os(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Wc:e?Kc:Tt;return!e&&bt(i,"iterate",c?zc:Yr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function LE(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(wr(s,l)&&bt(o,"get",s),bt(o,"get",l));const{has:c}=ra(o),u=e?Wc:t?Kc:Tt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(ke(s),"iterate",Yr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(wr(s,l)&&bt(o,"has",s),bt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Wc:t?Kc:Tt;return!t&&bt(c,"iterate",Yr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ct(n,t?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(s){!e&&!nn(s)&&!es(s)&&(s=ke(s));const i=ke(this);return ra(i).has.call(i,s)||(i.add(s),Un(i,"add",s,s)),this},set(s,i){!e&&!nn(i)&&!es(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=ra(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?wr(i,d)&&Un(o,"set",s,i):Un(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=ra(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Un(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=NE(s,t,e)}),n}function ju(t,e){const n=LE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const ME={get:ju(!1,!1)},FE={get:ju(!1,!0)},UE={get:ju(!0,!1)};const lg=new WeakMap,cg=new WeakMap,ug=new WeakMap,BE=new WeakMap;function $E(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jE(t){return t.__v_skip||!Object.isExtensible(t)?0:$E(fE(t))}function Eo(t){return es(t)?t:Hu(t,!1,OE,ME,lg)}function hg(t){return Hu(t,!1,VE,FE,cg)}function dg(t){return Hu(t,!0,DE,UE,ug)}function Hu(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function vr(t){return es(t)?vr(t.__v_raw):!!(t&&t.__v_isReactive)}function es(t){return!!(t&&t.__v_isReadonly)}function nn(t){return!!(t&&t.__v_isShallow)}function qu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function zu(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Hm(t,"__v_skip",!0),t}const Tt=t=>Be(t)?Eo(t):t,Kc=t=>Be(t)?dg(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Se(t){return fg(t,!1)}function HE(t){return fg(t,!0)}function fg(t,e){return Je(t)?t:new qE(t,e)}class qE{constructor(e,n){this.dep=new $u,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||nn(e)||es(e);e=r?e:ke(e),wr(e,n)&&(this._rawValue=e,this._value=r?e:Tt(e),this.dep.trigger())}}function Ds(t){return Je(t)?t.value:t}const zE={get:(t,e,n)=>e==="__v_raw"?t:Ds(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pg(t){return vr(t)?t:new Proxy(t,zE)}function WE(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=GE(t,n);return e}class KE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return CE(ke(this._object),this._key)}}function GE(t,e,n){const r=t[e];return Je(r)?r:new KE(t,e,n)}class QE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $u(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Zm(this,!0),!0}get value(){const e=this.dep.track();return ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function YE(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new QE(r,s,n)}const ia={},Ra=new WeakMap;let Wr;function JE(t,e=!1,n=Wr){if(n){let r=Ra.get(n);r||Ra.set(n,r=[]),r.push(t)}}function XE(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:nn(q)||s===!1||s===0?Bn(q,1):Bn(q);let d,p,m,y,P=!1,O=!1;if(Je(t)?(p=()=>t.value,P=nn(t)):vr(t)?(p=()=>u(t),P=!0):le(t)?(O=!0,P=t.some(q=>vr(q)||nn(q)),p=()=>t.map(q=>{if(Je(q))return q.value;if(vr(q))return u(q);if(_e(q))return c?c(q,2):q()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Dr();try{m()}finally{Vr()}}const q=Wr;Wr=d;try{return c?c(t,3,[y]):t(y)}finally{Wr=q}}:p=In,e&&s){const q=p,ie=s===!0?1/0:s;p=()=>Bn(q(),ie)}const D=Ym(),j=()=>{d.stop(),D&&D.active&&Nu(D.effects,d)};if(i&&e){const q=e;e=(...ie)=>{q(...ie),j()}}let L=O?new Array(t.length).fill(ia):ia;const $=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ie=d.run();if(s||P||(O?ie.some((we,I)=>wr(we,L[I])):wr(ie,L))){m&&m();const we=Wr;Wr=d;try{const I=[ie,L===ia?void 0:O&&L[0]===ia?[]:L,y];c?c(e,3,I):e(...I),L=ie}finally{Wr=we}}}else d.run()};return l&&l($),d=new Jm(p),d.scheduler=o?()=>o($,!1):$,y=q=>JE(q,!1,d),m=d.onStop=()=>{const q=Ra.get(d);if(q){if(c)c(q,4);else for(const ie of q)ie();Ra.delete(d)}},e?r?$(!0):L=d.run():o?o($.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function Bn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Bn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(ul(t)||Os(t))t.forEach(r=>{Bn(r,e,n)});else if(jm(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,r){try{return r?t(...r):t()}catch(s){gl(s,e,n)}}function kn(t,e,n,r){if(_e(t)){const s=bo(t,e,n,r);return s&&Bm(s)&&s.catch(i=>{gl(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(kn(t[i],e,n,r));return s}}function gl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Dr(),bo(i,null,10,[t,c,u]),Vr();return}}ZE(t,n,s,r,o)}function ZE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let vn=-1;const Vs=[];let cr=null,Ts=0;const mg=Promise.resolve();let Pa=null;function Wu(t){const e=Pa||mg;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=vn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=to(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ku(t){if(!(t.flags&1)){const e=to(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=to(n)?Ot.push(t):Ot.splice(eb(e),0,t),t.flags|=1,gg()}}function gg(){Pa||(Pa=mg.then(yg))}function tb(t){le(t)?Vs.push(...t):cr&&t.id===-1?cr.splice(Ts+1,0,t):t.flags&1||(Vs.push(t),t.flags|=1),gg()}function lf(t,e,n=vn+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _g(t){if(Vs.length){const e=[...new Set(Vs)].sort((n,r)=>to(n)-to(r));if(Vs.length=0,cr){cr.push(...e);return}for(cr=e,Ts=0;Ts<cr.length;Ts++){const n=cr[Ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}cr=null,Ts=0}}const to=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yg(t){try{for(vn=0;vn<Ot.length;vn++){const e=Ot[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Ot.length;vn++){const e=Ot[vn];e&&(e.flags&=-2)}vn=-1,Ot.length=0,_g(),Pa=null,(Ot.length||Vs.length)&&yg()}}let $t=null,wg=null;function ka(t){const e=$t;return $t=t,wg=t&&t.type.__scopeId||null,e}function no(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yf(-1);const i=ka(e);let o;try{o=t(...s)}finally{ka(i),r._d&&yf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zn(t,e){if($t===null)return t;const n=vl($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Dr(),kn(c,n,8,[t.el,l,t,e]),Vr())}}const nb=Symbol("_vte"),rb=t=>t.__isTeleport;function Gu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function vg(t,e){return _e(t)?Ct({name:t.name},e,{setup:t}):t}function Eg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xa(t,e,n,r,s=!1){if(le(t)){t.forEach((P,O)=>xa(P,e&&(le(e)?e[O]:e),n,r,s));return}if(ji(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?vl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,p=l.setupState,m=ke(p),y=p===Le?()=>!1:P=>De(m,P);if(u!=null&&u!==c&&(tt(u)?(d[u]=null,y(u)&&(p[u]=null)):Je(u)&&(u.value=null)),_e(c))bo(c,l,12,[o,d]);else{const P=tt(c),O=Je(c);if(P||O){const D=()=>{if(t.f){const j=P?y(c)?p[c]:d[c]:c.value;s?le(j)&&Nu(j,i):le(j)?j.includes(i)||j.push(i):P?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,y(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,zt(D,n)):D()}}}fl().requestIdleCallback;fl().cancelIdleCallback;const ji=t=>!!t.type.__asyncLoader,bg=t=>t.type.__isKeepAlive;function sb(t,e){Tg(t,"a",e)}function ib(t,e){Tg(t,"da",e)}function Tg(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_l(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bg(s.parent.vnode)&&ob(r,e,n,s),s=s.parent}}function ob(t,e,n,r){const s=_l(e,t,r,!0);Ig(()=>{Nu(r[e],s)},n)}function _l(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dr();const l=To(n),c=kn(e,n,t,o);return l(),Vr(),c});return r?s.unshift(i):s.push(i),i}}const Zn=t=>(e,n=ft)=>{(!io||t==="sp")&&_l(t,(...r)=>e(...r),n)},ab=Zn("bm"),us=Zn("m"),lb=Zn("bu"),cb=Zn("u"),ub=Zn("bum"),Ig=Zn("um"),hb=Zn("sp"),db=Zn("rtg"),fb=Zn("rtc");function pb(t,e=ft){_l("ec",t,e)}const mb="components";function Qu(t,e){return _b(mb,t,!0,e)||t}const gb=Symbol.for("v-ndc");function _b(t,e,n=!0,r=!1){const s=$t||ft;if(s){const i=s.type;{const l=iT(i,!1);if(l&&(l===e||l===on(e)||l===dl(on(e))))return i}const o=cf(s[t]||i[t],e)||cf(s.appContext[t],e);return!o&&r?i:o}}function cf(t,e){return t&&(t[e]||t[on(e)]||t[dl(on(e))])}function ro(t,e,n,r){let s;const i=n,o=le(t);if(o||tt(t)){const l=o&&vr(t);let c=!1;l&&(c=!nn(t),t=ml(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?Tt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Gc=t=>t?qg(t)?vl(t):Gc(t.parent):null,Hi=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gc(t.parent),$root:t=>Gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ku(t.update)}),$nextTick:t=>t.n||(t.n=Wu.bind(t.proxy)),$watch:t=>Bb.bind(t)}),Ec=(t,e)=>t!==Le&&!t.__isScriptSetup&&De(t,e),yb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(r,e))return o[e]=1,r[e];if(s!==Le&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Le&&De(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const d=Hi[e];let p,m;if(d)return e==="$attrs"&&bt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ec(s,e)?(s[e]=n,!0):r!==Le&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&De(t,o)||Ec(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(Hi,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function wb(t){const e=Cg(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:O,deactivated:D,beforeDestroy:j,beforeUnmount:L,destroyed:$,unmounted:q,render:ie,renderTracked:we,renderTriggered:I,errorCaptured:_,serverPrefetch:w,expose:T,inheritAttrs:A,components:C,directives:E,filters:lt}=e;if(u&&vb(u,r,null),o)for(const de in o){const ve=o[de];_e(ve)&&(r[de]=ve.bind(n))}if(s){const de=s.call(n,n);Be(de)&&(t.data=Eo(de))}if(Qc=!0,i)for(const de in i){const ve=i[de],Ht=_e(ve)?ve.bind(n,n):_e(ve.get)?ve.get.bind(n,n):In,un=!_e(ve)&&_e(ve.set)?ve.set.bind(n):In,Xt=it({get:Ht,set:un});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:ze=>Xt.value=ze})}if(l)for(const de in l)Ag(l[de],r,n,de);if(c){const de=_e(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ve=>{pa(ve,de[ve])})}d&&hf(d,t,"c");function Me(de,ve){le(ve)?ve.forEach(Ht=>de(Ht.bind(n))):ve&&de(ve.bind(n))}if(Me(ab,p),Me(us,m),Me(lb,y),Me(cb,P),Me(sb,O),Me(ib,D),Me(pb,_),Me(fb,we),Me(db,I),Me(ub,L),Me(Ig,q),Me(hb,w),le(T))if(T.length){const de=t.exposed||(t.exposed={});T.forEach(ve=>{Object.defineProperty(de,ve,{get:()=>n[ve],set:Ht=>n[ve]=Ht})})}else t.exposed||(t.exposed={});ie&&t.render===In&&(t.render=ie),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),E&&(t.directives=E),w&&Eg(t)}function vb(t,e,n=In){le(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hf(t,e,n){kn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ag(t,e,n,r){let s=r.includes(".")?Ug(n,r):()=>n[r];if(tt(t)){const i=e[t];_e(i)&&Xr(s,i)}else if(_e(t))Xr(s,t.bind(n));else if(Be(t))if(le(t))t.forEach(i=>Ag(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Xr(s,i,t)}}function Cg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Oa(c,u,o,!0)),Oa(c,e,o)),Be(e)&&i.set(e,c),c}function Oa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oa(t,i,n,!0),s&&s.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Eb[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Eb={data:df,props:ff,emits:ff,methods:Oi,computed:Oi,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Oi,directives:Oi,watch:Tb,provide:df,inject:bb};function df(t,e){return e?t?function(){return Ct(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function bb(t,e){return Oi(Yc(t),Yc(e))}function Yc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?Ct(Object.create(null),t,e):e}function ff(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Ct(Object.create(null),uf(t),uf(e??{})):e}function Tb(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Sg(){return{app:null,config:{isNativeTag:hE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ib=0;function Ab(t,e){return function(r,s=null){_e(r)||(r=Ct({},r)),s!=null&&!Be(s)&&(s=null);const i=Sg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Ib++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...p)):_e(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const y=u._ceVNode||qe(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,d,m),c=!0,u._container=d,d.__vue_app__=u,vl(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(kn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Jr;Jr=u;try{return d()}finally{Jr=p}}};return u}}let Jr=null;function pa(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=ft||$t;if(r||Jr){const s=Jr?Jr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function Cb(){return!!(ft||$t||Jr)}const Rg={},Pg=()=>Object.create(Rg),kg=t=>Object.getPrototypeOf(t)===Rg;function Sb(t,e,n,r=!1){const s={},i=Pg();t.propsDefaults=Object.create(null),xg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Rb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(yl(t.emitsOptions,m))continue;const y=e[m];if(c)if(De(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const P=on(m);s[P]=Jc(c,l,P,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{xg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=cs(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Jc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Un(t.attrs,"set","")}function xg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ui(c))continue;const u=e[c];let d;s&&De(s,d=on(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:yl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Jc(s,c,p,u[p],t,!De(u,p))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=To(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const Pb=new WeakMap;function Og(t,e,n=!1){const r=n?Pb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=p=>{c=!0;const[m,y]=Og(p,e,!0);Ct(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Be(t)&&r.set(t,xs),xs;if(le(i))for(let d=0;d<i.length;d++){const p=on(i[d]);pf(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=on(d);if(pf(p)){const m=i[d],y=o[p]=le(m)||_e(m)?{type:m}:Ct({},m),P=y.type;let O=!1,D=!0;if(le(P))for(let j=0;j<P.length;++j){const L=P[j],$=_e(L)&&L.name;if($==="Boolean"){O=!0;break}else $==="String"&&(D=!1)}else O=_e(P)&&P.name==="Boolean";y[0]=O,y[1]=D,(O||De(y,"default"))&&l.push(p)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function pf(t){return t[0]!=="$"&&!Ui(t)}const Dg=t=>t[0]==="_"||t==="$stable",Yu=t=>le(t)?t.map(Tn):[Tn(t)],kb=(t,e,n)=>{if(e._n)return e;const r=no((...s)=>Yu(e(...s)),n);return r._c=!1,r},Vg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dg(s))continue;const i=t[s];if(_e(i))e[s]=kb(s,i,r);else if(i!=null){const o=Yu(i);e[s]=()=>o}}},Ng=(t,e)=>{const n=Yu(e);t.slots.default=()=>n},Lg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xb=(t,e,n)=>{const r=t.slots=Pg();if(t.vnode.shapeFlag&32){const s=e._;s?(Lg(r,e,n),n&&Hm(r,"_",s,!0)):Vg(e,r)}else e&&Ng(t,e)},Ob=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lg(s,e,n):(i=!e.$stable,Vg(e,s)),o=e}else e&&(Ng(t,e),o={default:1});if(i)for(const l in s)!Dg(l)&&o[l]==null&&delete s[l]},zt=Kb;function Db(t){return Vb(t)}function Vb(t,e){const n=fl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=In,insertStaticContent:P}=t,O=(v,b,S,N=null,B=null,F=null,G=void 0,W=null,z=!!b.dynamicChildren)=>{if(v===b)return;v&&!ki(v,b)&&(N=V(v),ze(v,B,F,!0),v=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:Y}=b;switch(H){case wl:D(v,b,S,N);break;case ts:j(v,b,S,N);break;case Tc:v==null&&L(b,S,N,G);break;case It:C(v,b,S,N,B,F,G,W,z);break;default:Y&1?ie(v,b,S,N,B,F,G,W,z):Y&6?E(v,b,S,N,B,F,G,W,z):(Y&64||Y&128)&&H.process(v,b,S,N,B,F,G,W,z,te)}oe!=null&&B&&xa(oe,v&&v.ref,F,b||v,!b)},D=(v,b,S,N)=>{if(v==null)r(b.el=l(b.children),S,N);else{const B=b.el=v.el;b.children!==v.children&&u(B,b.children)}},j=(v,b,S,N)=>{v==null?r(b.el=c(b.children||""),S,N):b.el=v.el},L=(v,b,S,N)=>{[v.el,v.anchor]=P(v.children,b,S,N,v.el,v.anchor)},$=({el:v,anchor:b},S,N)=>{let B;for(;v&&v!==b;)B=m(v),r(v,S,N),v=B;r(b,S,N)},q=({el:v,anchor:b})=>{let S;for(;v&&v!==b;)S=m(v),s(v),v=S;s(b)},ie=(v,b,S,N,B,F,G,W,z)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),v==null?we(b,S,N,B,F,G,W,z):w(v,b,B,F,G,W,z)},we=(v,b,S,N,B,F,G,W)=>{let z,H;const{props:oe,shapeFlag:Y,transition:ne,dirs:ue}=v;if(z=v.el=o(v.type,F,oe&&oe.is,oe),Y&8?d(z,v.children):Y&16&&_(v.children,z,null,N,B,bc(v,F),G,W),ue&&Hr(v,null,N,"created"),I(z,v,v.scopeId,G,N),oe){for(const ye in oe)ye!=="value"&&!Ui(ye)&&i(z,ye,null,oe[ye],F,N);"value"in oe&&i(z,"value",null,oe.value,F),(H=oe.onVnodeBeforeMount)&&wn(H,N,v)}ue&&Hr(v,null,N,"beforeMount");const ae=Nb(B,ne);ae&&ne.beforeEnter(z),r(z,b,S),((H=oe&&oe.onVnodeMounted)||ae||ue)&&zt(()=>{H&&wn(H,N,v),ae&&ne.enter(z),ue&&Hr(v,null,N,"mounted")},B)},I=(v,b,S,N,B)=>{if(S&&y(v,S),N)for(let F=0;F<N.length;F++)y(v,N[F]);if(B){let F=B.subTree;if(b===F||$g(F.type)&&(F.ssContent===b||F.ssFallback===b)){const G=B.vnode;I(v,G,G.scopeId,G.slotScopeIds,B.parent)}}},_=(v,b,S,N,B,F,G,W,z=0)=>{for(let H=z;H<v.length;H++){const oe=v[H]=W?ur(v[H]):Tn(v[H]);O(null,oe,b,S,N,B,F,G,W)}},w=(v,b,S,N,B,F,G)=>{const W=b.el=v.el;let{patchFlag:z,dynamicChildren:H,dirs:oe}=b;z|=v.patchFlag&16;const Y=v.props||Le,ne=b.props||Le;let ue;if(S&&qr(S,!1),(ue=ne.onVnodeBeforeUpdate)&&wn(ue,S,b,v),oe&&Hr(b,v,S,"beforeUpdate"),S&&qr(S,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(W,""),H?T(v.dynamicChildren,H,W,S,N,bc(b,B),F):G||ve(v,b,W,null,S,N,bc(b,B),F,!1),z>0){if(z&16)A(W,Y,ne,S,B);else if(z&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,B),z&4&&i(W,"style",Y.style,ne.style,B),z&8){const ae=b.dynamicProps;for(let ye=0;ye<ae.length;ye++){const Ie=ae[ye],gt=Y[Ie],ct=ne[Ie];(ct!==gt||Ie==="value")&&i(W,Ie,gt,ct,B,S)}}z&1&&v.children!==b.children&&d(W,b.children)}else!G&&H==null&&A(W,Y,ne,S,B);((ue=ne.onVnodeUpdated)||oe)&&zt(()=>{ue&&wn(ue,S,b,v),oe&&Hr(b,v,S,"updated")},N)},T=(v,b,S,N,B,F,G)=>{for(let W=0;W<b.length;W++){const z=v[W],H=b[W],oe=z.el&&(z.type===It||!ki(z,H)||z.shapeFlag&70)?p(z.el):S;O(z,H,oe,null,N,B,F,G,!0)}},A=(v,b,S,N,B)=>{if(b!==S){if(b!==Le)for(const F in b)!Ui(F)&&!(F in S)&&i(v,F,b[F],null,B,N);for(const F in S){if(Ui(F))continue;const G=S[F],W=b[F];G!==W&&F!=="value"&&i(v,F,W,G,B,N)}"value"in S&&i(v,"value",b.value,S.value,B)}},C=(v,b,S,N,B,F,G,W,z)=>{const H=b.el=v?v.el:l(""),oe=b.anchor=v?v.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ue}=b;ue&&(W=W?W.concat(ue):ue),v==null?(r(H,S,N),r(oe,S,N),_(b.children||[],S,oe,B,F,G,W,z)):Y>0&&Y&64&&ne&&v.dynamicChildren?(T(v.dynamicChildren,ne,S,B,F,G,W),(b.key!=null||B&&b===B.subTree)&&Mg(v,b,!0)):ve(v,b,S,oe,B,F,G,W,z)},E=(v,b,S,N,B,F,G,W,z)=>{b.slotScopeIds=W,v==null?b.shapeFlag&512?B.ctx.activate(b,S,N,G,z):lt(b,S,N,B,F,G,z):Mt(v,b,z)},lt=(v,b,S,N,B,F,G)=>{const W=v.component=eT(v,N,B);if(bg(v)&&(W.ctx.renderer=te),tT(W,!1,G),W.asyncDep){if(B&&B.registerDep(W,Me,G),!v.el){const z=W.subTree=qe(ts);j(null,z,b,S)}}else Me(W,v,b,S,B,F,G)},Mt=(v,b,S)=>{const N=b.component=v.component;if(zb(v,b,S))if(N.asyncDep&&!N.asyncResolved){de(N,b,S);return}else N.next=b,N.update();else b.el=v.el,N.vnode=b},Me=(v,b,S,N,B,F,G)=>{const W=()=>{if(v.isMounted){let{next:Y,bu:ne,u:ue,parent:ae,vnode:ye}=v;{const _t=Fg(v);if(_t){Y&&(Y.el=ye.el,de(v,Y,G)),_t.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Ie=Y,gt;qr(v,!1),Y?(Y.el=ye.el,de(v,Y,G)):Y=ye,ne&&fa(ne),(gt=Y.props&&Y.props.onVnodeBeforeUpdate)&&wn(gt,ae,Y,ye),qr(v,!0);const ct=gf(v),Zt=v.subTree;v.subTree=ct,O(Zt,ct,p(Zt.el),V(Zt),v,B,F),Y.el=ct.el,Ie===null&&Wb(v,ct.el),ue&&zt(ue,B),(gt=Y.props&&Y.props.onVnodeUpdated)&&zt(()=>wn(gt,ae,Y,ye),B)}else{let Y;const{el:ne,props:ue}=b,{bm:ae,m:ye,parent:Ie,root:gt,type:ct}=v,Zt=ji(b);qr(v,!1),ae&&fa(ae),!Zt&&(Y=ue&&ue.onVnodeBeforeMount)&&wn(Y,Ie,b),qr(v,!0);{gt.ce&&gt.ce._injectChildStyle(ct);const _t=v.subTree=gf(v);O(null,_t,S,N,v,B,F),b.el=_t.el}if(ye&&zt(ye,B),!Zt&&(Y=ue&&ue.onVnodeMounted)){const _t=b;zt(()=>wn(Y,Ie,_t),B)}(b.shapeFlag&256||Ie&&ji(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&zt(v.a,B),v.isMounted=!0,b=S=N=null}};v.scope.on();const z=v.effect=new Jm(W);v.scope.off();const H=v.update=z.run.bind(z),oe=v.job=z.runIfDirty.bind(z);oe.i=v,oe.id=v.uid,z.scheduler=()=>Ku(oe),qr(v,!0),H()},de=(v,b,S)=>{b.component=v;const N=v.vnode.props;v.vnode=b,v.next=null,Rb(v,b.props,N,S),Ob(v,b.children,S),Dr(),lf(v),Vr()},ve=(v,b,S,N,B,F,G,W,z=!1)=>{const H=v&&v.children,oe=v?v.shapeFlag:0,Y=b.children,{patchFlag:ne,shapeFlag:ue}=b;if(ne>0){if(ne&128){un(H,Y,S,N,B,F,G,W,z);return}else if(ne&256){Ht(H,Y,S,N,B,F,G,W,z);return}}ue&8?(oe&16&&Ft(H,B,F),Y!==H&&d(S,Y)):oe&16?ue&16?un(H,Y,S,N,B,F,G,W,z):Ft(H,B,F,!0):(oe&8&&d(S,""),ue&16&&_(Y,S,N,B,F,G,W,z))},Ht=(v,b,S,N,B,F,G,W,z)=>{v=v||xs,b=b||xs;const H=v.length,oe=b.length,Y=Math.min(H,oe);let ne;for(ne=0;ne<Y;ne++){const ue=b[ne]=z?ur(b[ne]):Tn(b[ne]);O(v[ne],ue,S,null,B,F,G,W,z)}H>oe?Ft(v,B,F,!0,!1,Y):_(b,S,N,B,F,G,W,z,Y)},un=(v,b,S,N,B,F,G,W,z)=>{let H=0;const oe=b.length;let Y=v.length-1,ne=oe-1;for(;H<=Y&&H<=ne;){const ue=v[H],ae=b[H]=z?ur(b[H]):Tn(b[H]);if(ki(ue,ae))O(ue,ae,S,null,B,F,G,W,z);else break;H++}for(;H<=Y&&H<=ne;){const ue=v[Y],ae=b[ne]=z?ur(b[ne]):Tn(b[ne]);if(ki(ue,ae))O(ue,ae,S,null,B,F,G,W,z);else break;Y--,ne--}if(H>Y){if(H<=ne){const ue=ne+1,ae=ue<oe?b[ue].el:N;for(;H<=ne;)O(null,b[H]=z?ur(b[H]):Tn(b[H]),S,ae,B,F,G,W,z),H++}}else if(H>ne)for(;H<=Y;)ze(v[H],B,F,!0),H++;else{const ue=H,ae=H,ye=new Map;for(H=ae;H<=ne;H++){const ut=b[H]=z?ur(b[H]):Tn(b[H]);ut.key!=null&&ye.set(ut.key,H)}let Ie,gt=0;const ct=ne-ae+1;let Zt=!1,_t=0;const nr=new Array(ct);for(H=0;H<ct;H++)nr[H]=0;for(H=ue;H<=Y;H++){const ut=v[H];if(gt>=ct){ze(ut,B,F,!0);continue}let en;if(ut.key!=null)en=ye.get(ut.key);else for(Ie=ae;Ie<=ne;Ie++)if(nr[Ie-ae]===0&&ki(ut,b[Ie])){en=Ie;break}en===void 0?ze(ut,B,F,!0):(nr[en-ae]=H+1,en>=_t?_t=en:Zt=!0,O(ut,b[en],S,null,B,F,G,W,z),gt++)}const gi=Zt?Lb(nr):xs;for(Ie=gi.length-1,H=ct-1;H>=0;H--){const ut=ae+H,en=b[ut],$o=ut+1<oe?b[ut+1].el:N;nr[H]===0?O(null,en,S,$o,B,F,G,W,z):Zt&&(Ie<0||H!==gi[Ie]?Xt(en,S,$o,2):Ie--)}}},Xt=(v,b,S,N,B=null)=>{const{el:F,type:G,transition:W,children:z,shapeFlag:H}=v;if(H&6){Xt(v.component.subTree,b,S,N);return}if(H&128){v.suspense.move(b,S,N);return}if(H&64){G.move(v,b,S,te);return}if(G===It){r(F,b,S);for(let Y=0;Y<z.length;Y++)Xt(z[Y],b,S,N);r(v.anchor,b,S);return}if(G===Tc){$(v,b,S);return}if(N!==2&&H&1&&W)if(N===0)W.beforeEnter(F),r(F,b,S),zt(()=>W.enter(F),B);else{const{leave:Y,delayLeave:ne,afterLeave:ue}=W,ae=()=>r(F,b,S),ye=()=>{Y(F,()=>{ae(),ue&&ue()})};ne?ne(F,ae,ye):ye()}else r(F,b,S)},ze=(v,b,S,N=!1,B=!1)=>{const{type:F,props:G,ref:W,children:z,dynamicChildren:H,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:ue}=v;if(Y===-2&&(B=!1),W!=null&&xa(W,null,S,v,!0),ue!=null&&(b.renderCache[ue]=void 0),oe&256){b.ctx.deactivate(v);return}const ae=oe&1&&ne,ye=!ji(v);let Ie;if(ye&&(Ie=G&&G.onVnodeBeforeUnmount)&&wn(Ie,b,v),oe&6)yn(v.component,S,N);else{if(oe&128){v.suspense.unmount(S,N);return}ae&&Hr(v,null,b,"beforeUnmount"),oe&64?v.type.remove(v,b,S,te,N):H&&!H.hasOnce&&(F!==It||Y>0&&Y&64)?Ft(H,b,S,!1,!0):(F===It&&Y&384||!B&&oe&16)&&Ft(z,b,S),N&&We(v)}(ye&&(Ie=G&&G.onVnodeUnmounted)||ae)&&zt(()=>{Ie&&wn(Ie,b,v),ae&&Hr(v,null,b,"unmounted")},S)},We=v=>{const{type:b,el:S,anchor:N,transition:B}=v;if(b===It){tr(S,N);return}if(b===Tc){q(v);return}const F=()=>{s(S),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(v.shapeFlag&1&&B&&!B.persisted){const{leave:G,delayLeave:W}=B,z=()=>G(S,F);W?W(v.el,F,z):z()}else F()},tr=(v,b)=>{let S;for(;v!==b;)S=m(v),s(v),v=S;s(b)},yn=(v,b,S)=>{const{bum:N,scope:B,job:F,subTree:G,um:W,m:z,a:H}=v;mf(z),mf(H),N&&fa(N),B.stop(),F&&(F.flags|=8,ze(G,v,b,S)),W&&zt(W,b),zt(()=>{v.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ft=(v,b,S,N=!1,B=!1,F=0)=>{for(let G=F;G<v.length;G++)ze(v[G],b,S,N,B)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=m(v.anchor||v.el),S=b&&b[nb];return S?m(S):b};let J=!1;const Q=(v,b,S)=>{v==null?b._vnode&&ze(b._vnode,null,null,!0):O(b._vnode||null,v,b,null,null,null,S),b._vnode=v,J||(J=!0,lf(),_g(),J=!1)},te={p:O,um:ze,m:Xt,r:We,mt:lt,mc:_,pc:ve,pbc:T,n:V,o:t};return{render:Q,hydrate:void 0,createApp:Ab(Q)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Nb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Mg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ur(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Mg(o,l)),l.type===wl&&(l.el=o.el)}}function Lb(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fg(e)}function mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mb=Symbol.for("v-scx"),Fb=()=>rn(Mb);function Ub(t,e){return Ju(t,null,e)}function Xr(t,e,n){return Ju(t,e,n)}function Ju(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=Ct({},n),c=e&&r||!e&&i!=="post";let u;if(io){if(i==="sync"){const y=Fb();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=In,y.resume=In,y.pause=In,y}}const d=ft;l.call=(y,P,O)=>kn(y,d,P,O);let p=!1;i==="post"?l.scheduler=y=>{zt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():Ku(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=XE(t,e,l);return io&&(u?u.push(m):c&&m()),m}function Bb(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Ug(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=To(this),l=Ju(s,i.bind(r),n);return o(),l}function Ug(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $b=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function jb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&$b(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>tt(d)?d.trim():d)),o.number&&(s=n.map(Hc)));let l,c=r[l=gc(e)]||r[l=gc(on(e))];!c&&i&&(c=r[l=gc(cs(e))]),c&&kn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,kn(u,t,6,s)}}function Bg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=Bg(u,e,!0);d&&(l=!0,Ct(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):Ct(o,i),Be(t)&&r.set(t,o),o)}function yl(t,e){return!t||!cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,cs(e))||De(t,e))}function gf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:y,ctx:P,inheritAttrs:O}=t,D=ka(t);let j,L;try{if(n.shapeFlag&4){const q=s||r,ie=q;j=Tn(u.call(ie,q,d,p,y,m,P)),L=l}else{const q=e;j=Tn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),L=e.props?l:Hb(l)}}catch(q){qi.length=0,gl(q,t,1),j=qe(ts)}let $=j;if(L&&O!==!1){const q=Object.keys(L),{shapeFlag:ie}=$;q.length&&ie&7&&(i&&q.some(Vu)&&(L=qb(L,i)),$=Hs($,L,!1,!0))}return n.dirs&&($=Hs($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Gu($,n.transition),j=$,ka(D),j}const Hb=t=>{let e;for(const n in t)(n==="class"||n==="style"||cl(n))&&((e||(e={}))[n]=t[n]);return e},qb=(t,e)=>{const n={};for(const r in t)(!Vu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_f(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!yl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?_f(r,o,u):!0:!!o;return!1}function _f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yl(n,i))return!0}return!1}function Wb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $g=t=>t.__isSuspense;function Kb(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):tb(t)}const It=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),Tc=Symbol.for("v-stc"),qi=[];let Kt=null;function fe(t=!1){qi.push(Kt=t?null:[])}function Gb(){qi.pop(),Kt=qi[qi.length-1]||null}let so=1;function yf(t,e=!1){so+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function jg(t){return t.dynamicChildren=so>0?Kt||xs:null,Gb(),so>0&&Kt&&Kt.push(t),t}function ge(t,e,n,r,s,i){return jg(ee(t,e,n,r,s,i,!0))}function Da(t,e,n,r,s){return jg(qe(t,e,n,r,s,!0))}function Va(t){return t?t.__v_isVNode===!0:!1}function ki(t,e){return t.type===e.type&&t.key===e.key}const Hg=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Je(t)||_e(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hg(e),ref:e&&ma(e),scopeId:wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Xu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),so>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const qe=Qb;function Qb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gb)&&(t=ts),Va(t)){const l=Hs(t,e,!0);return n&&Xu(l,n),so>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(oT(t)&&(t=t.__vccOpts),e){e=Yb(e);let{class:l,style:c}=e;l&&!tt(l)&&(e.class=Wt(l)),Be(c)&&(qu(c)&&!le(c)&&(c=Ct({},c)),e.style=Mu(c))}const o=tt(t)?1:$g(t)?128:rb(t)?64:Be(t)?4:_e(t)?2:0;return ee(t,e,n,r,s,o,i,!0)}function Yb(t){return t?qu(t)||kg(t)?Ct({},t):t:null}function Hs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Jb(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Hg(u),ref:e&&e.ref?n&&i?le(i)?i.concat(ma(e)):[i,ma(e)]:ma(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hs(t.ssContent),ssFallback:t.ssFallback&&Hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gu(d,c.clone(d)),d}function qs(t=" ",e=0){return qe(wl,null,t,e)}function dn(t="",e=!1){return e?(fe(),Da(ts,null,t)):qe(ts,null,t)}function Tn(t){return t==null||typeof t=="boolean"?qe(ts):le(t)?qe(It,null,t.slice()):Va(t)?ur(t):qe(wl,null,String(t))}function ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hs(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kg(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[qs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Wt([e.class,r.class]));else if(s==="style")e.style=Mu([e.style,r.style]);else if(cl(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(t,e,n,r=null){kn(t,e,7,[n,r])}const Xb=Sg();let Zb=0;function eT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xb,i={uid:Zb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Og(r,s),emitsOptions:Bg(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jb.bind(null,i),t.ce&&t.ce(i),i}let ft=null,Na,Xc;{const t=fl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Na=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Xc=e("__VUE_SSR_SETTERS__",n=>io=n)}const To=t=>{const e=ft;return Na(t),t.scope.on(),()=>{t.scope.off(),Na(e)}},wf=()=>{ft&&ft.scope.off(),Na(null)};function qg(t){return t.vnode.shapeFlag&4}let io=!1;function tT(t,e=!1,n=!1){e&&Xc(e);const{props:r,children:s}=t.vnode,i=qg(t);Sb(t,r,i,e),xb(t,s,n);const o=i?nT(t,e):void 0;return e&&Xc(!1),o}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yb);const{setup:r}=n;if(r){Dr();const s=t.setupContext=r.length>1?sT(t):null,i=To(t),o=bo(r,t,0,[t.props,s]),l=Bm(o);if(Vr(),i(),(l||t.sp)&&!ji(t)&&Eg(t),l){if(o.then(wf,wf),e)return o.then(c=>{vf(t,c)}).catch(c=>{gl(c,t,0)});t.asyncDep=o}else vf(t,o)}else zg(t)}function vf(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=pg(e)),zg(t)}function zg(t,e,n){const r=t.type;t.render||(t.render=r.render||In);{const s=To(t);Dr();try{wb(t)}finally{Vr(),s()}}}const rT={get(t,e){return bt(t,"get",""),t[e]}};function sT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rT),slots:t.slots,emit:t.emit,expose:e}}function vl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pg(zu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)},has(e,n){return n in e||n in Hi}})):t.proxy}function iT(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function oT(t){return _e(t)&&"__vccOpts"in t}const it=(t,e)=>YE(t,e,io);function Wg(t,e,n){const r=arguments.length;return r===2?Be(e)&&!le(e)?Va(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Va(n)&&(n=[n]),qe(t,e,n))}const aT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zc;const Ef=typeof window<"u"&&window.trustedTypes;if(Ef)try{Zc=Ef.createPolicy("vue",{createHTML:t=>t})}catch{}const Kg=Zc?t=>Zc.createHTML(t):t=>t,lT="http://www.w3.org/2000/svg",cT="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,bf=Fn&&Fn.createElement("template"),uT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(lT,t):e==="mathml"?Fn.createElementNS(cT,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bf.innerHTML=Kg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hT=Symbol("_vtc");function dT(t,e,n){const r=t[hT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tf=Symbol("_vod"),fT=Symbol("_vsh"),pT=Symbol(""),mT=/(^|;)\s*display\s*:/;function gT(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ga(r,l,"")}else for(const o in e)n[o]==null&&ga(r,o,"");for(const o in n)o==="display"&&(i=!0),ga(r,o,n[o])}else if(s){if(e!==n){const o=r[pT];o&&(n+=";"+o),r.cssText=n,i=mT.test(n)}}else e&&t.removeAttribute("style");Tf in t&&(t[Tf]=i?r.display:"",t[fT]&&(r.display="none"))}const If=/\s*!important$/;function ga(t,e,n){if(le(n))n.forEach(r=>ga(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_T(t,e);If.test(n)?t.setProperty(cs(r),n.replace(If,""),"important"):t[r]=n}}const Af=["Webkit","Moz","ms"],Ic={};function _T(t,e){const n=Ic[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return Ic[e]=r;r=dl(r);for(let s=0;s<Af.length;s++){const i=Af[s]+r;if(i in t)return Ic[e]=i}return e}const Cf="http://www.w3.org/1999/xlink";function Sf(t,e,n,r,s,i=EE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cf,e.slice(6,e.length)):t.setAttributeNS(Cf,e,n):n==null||i&&!qm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pn(n)?String(n):n)}function Rf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function yT(t,e,n,r){t.removeEventListener(e,n,r)}const Pf=Symbol("_vei");function wT(t,e,n,r,s=null){const i=t[Pf]||(t[Pf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=vT(e);if(r){const u=i[e]=TT(r,s);Gr(t,l,u,c)}else o&&(yT(t,l,o,c),i[e]=void 0)}}const kf=/(?:Once|Passive|Capture)$/;function vT(t){let e;if(kf.test(t)){e={};let r;for(;r=t.match(kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Ac=0;const ET=Promise.resolve(),bT=()=>Ac||(ET.then(()=>Ac=0),Ac=Date.now());function TT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kn(IT(r,n.value),e,5,[r])};return n.value=t,n.attached=bT(),n}function IT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?dT(t,r,o):e==="style"?gT(t,n,r):cl(e)?Vu(e)||wT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CT(t,e,r,o))?(Rf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?Rf(t,on(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sf(t,e,r,o))};function CT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xf(e)&&tt(n)?!1:e in t}const La=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>fa(e,n):e};function ST(t){t.target.composing=!0}function Of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ns=Symbol("_assign"),Er={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ns]=La(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Hc(l)),t[Ns](l)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",ST),Gr(t,"compositionend",Of),Gr(t,"change",Of))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ns]=La(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},RT={deep:!0,created(t,e,n){t[Ns]=La(n),Gr(t,"change",()=>{const r=t._modelValue,s=PT(t),i=t.checked,o=t[Ns];if(le(r)){const l=zm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ul(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Gg(t,i))})},mounted:Df,beforeUpdate(t,e,n){t[Ns]=La(n),Df(t,e,n)}};function Df(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=zm(e,r.props.value)>-1;else if(ul(e))s=e.has(r.props.value);else{if(e===n)return;s=pl(e,Gg(t,!0))}t.checked!==s&&(t.checked=s)}function PT(t){return"_value"in t?t._value:t.value}function Gg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const kT=["ctrl","shift","alt","meta"],xT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kT.some(n=>t[`${n}Key`]&&!e.includes(n))},Qg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=xT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},OT=Ct({patchProp:AT},uT);let Vf;function DT(){return Vf||(Vf=Db(OT))}const VT=(...t)=>{const e=DT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=LT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,NT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function NT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function LT(t){return tt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Yg;const El=t=>Yg=t,Jg=Symbol();function eu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zi||(zi={}));function MT(){const t=Qm(!0),e=t.run(()=>Se({}));let n=[],r=[];const s=zu({install(i){El(s),s._a=i,i.provide(Jg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xg=()=>{};function Nf(t,e,n,r=Xg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ym()&&TE(s),s}function bs(t,...e){t.slice().forEach(n=>{n(...e)})}const FT=t=>t(),Lf=Symbol(),Cc=Symbol();function tu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];eu(s)&&eu(r)&&t.hasOwnProperty(n)&&!Je(r)&&!vr(r)?t[n]=tu(s,r):t[n]=r}return t}const UT=Symbol();function BT(t){return!eu(t)||!t.hasOwnProperty(UT)}const{assign:lr}=Object;function $T(t){return!!(Je(t)&&t.effect)}function jT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=WE(n.state.value[t]);return lr(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=zu(it(()=>{El(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Zg(t,u,e,n,r,!0),c}function Zg(t,e,n={},r,s,i){let o;const l=lr({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],y;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Se({});let O;function D(_){let w;u=d=!1,typeof _=="function"?(_(r.state.value[t]),w={type:zi.patchFunction,storeId:t,events:y}):(tu(r.state.value[t],_),w={type:zi.patchObject,payload:_,storeId:t,events:y});const T=O=Symbol();Wu().then(()=>{O===T&&(u=!0)}),d=!0,bs(p,w,r.state.value[t])}const j=i?function(){const{state:w}=n,T=w?w():{};this.$patch(A=>{lr(A,T)})}:Xg;function L(){o.stop(),p=[],m=[],r._s.delete(t)}const $=(_,w="")=>{if(Lf in _)return _[Cc]=w,_;const T=function(){El(r);const A=Array.from(arguments),C=[],E=[];function lt(de){C.push(de)}function Mt(de){E.push(de)}bs(m,{args:A,name:T[Cc],store:ie,after:lt,onError:Mt});let Me;try{Me=_.apply(this&&this.$id===t?this:ie,A)}catch(de){throw bs(E,de),de}return Me instanceof Promise?Me.then(de=>(bs(C,de),de)).catch(de=>(bs(E,de),Promise.reject(de))):(bs(C,Me),Me)};return T[Lf]=!0,T[Cc]=w,T},q={_p:r,$id:t,$onAction:Nf.bind(null,m),$patch:D,$reset:j,$subscribe(_,w={}){const T=Nf(p,_,w.detached,()=>A()),A=o.run(()=>Xr(()=>r.state.value[t],C=>{(w.flush==="sync"?d:u)&&_({storeId:t,type:zi.direct,events:y},C)},lr({},c,w)));return T},$dispose:L},ie=Eo(q);r._s.set(t,ie);const I=(r._a&&r._a.runWithContext||FT)(()=>r._e.run(()=>(o=Qm()).run(()=>e({action:$}))));for(const _ in I){const w=I[_];if(Je(w)&&!$T(w)||vr(w))i||(P&&BT(w)&&(Je(w)?w.value=P[_]:tu(w,P[_])),r.state.value[t][_]=w);else if(typeof w=="function"){const T=$(w,_);I[_]=T,l.actions[_]=w}}return lr(ie,I),lr(ke(ie),I),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:_=>{D(w=>{lr(w,_)})}}),r._p.forEach(_=>{lr(ie,o.run(()=>_({store:ie,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(ie.$state,P),u=!0,d=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function Zu(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Cb();return o=o||(c?rn(Jg,null):null),o&&El(o),o=Yg,o._s.has(t)||(s?Zg(t,e,r,o):jT(t,r,o)),o._s.get(t)}return i.$id=t,i}const HT=()=>{};var Mf={};/**
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
 */const e_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new zT;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(t){const e=e_(t);return t_.encodeByteArray(e,!0)},Ma=function(t){return WT(t).replace(/\./g,"")},n_=function(t){try{return t_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GT=()=>KT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof Mf>"u")return;const t=Mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n_(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return HT()||GT()||QT()||YT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r_=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=r_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},s_=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config},i_=t=>{var e;return(e=bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class XT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ZT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),""].join(".")}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function t0(){var t;const e=(t=bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function i0(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o0(){return!t0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const c0="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=c0,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?u0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new er(s,l,r)}}function u0(t,e){return t.replace(h0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const h0=/\{\$([^}]+)}/g;function d0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ff(i)&&Ff(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
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
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function f0(t,e){const n=new p0(t,e);return n.subscribe.bind(n)}class p0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class g0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y0(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _0(t){return t===Kr?void 0:t}function y0(t){return t.instantiationMode==="EAGER"}/**
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
 */class w0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const v0={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},E0=Ee.INFO,b0={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},T0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=b0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eh{constructor(e){this.name=e,this._logLevel=E0,this._logHandler=T0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const I0=(t,e)=>e.some(n=>t instanceof n);let Uf,Bf;function A0(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C0(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o_=new WeakMap,nu=new WeakMap,a_=new WeakMap,Rc=new WeakMap,th=new WeakMap;function S0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o_.set(n,t)}).catch(()=>{}),th.set(e,t),e}function R0(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P0(t){ru=t(ru)}function k0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return a_.set(r,e.sort?e.sort():[e]),br(r)}:C0().includes(t)?function(...e){return t.apply(Pc(this),e),br(o_.get(this))}:function(...e){return br(t.apply(Pc(this),e))}}function x0(t){return typeof t=="function"?k0(t):(t instanceof IDBTransaction&&R0(t),I0(t,A0())?new Proxy(t,ru):t)}function br(t){if(t instanceof IDBRequest)return S0(t);if(Rc.has(t))return Rc.get(t);const e=x0(t);return e!==t&&(Rc.set(t,e),th.set(e,t)),e}const Pc=t=>th.get(t);function O0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",c=>{r(br(o.result),c.oldVersion,c.newVersion,br(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const D0=["get","getKey","getAll","getAllKeys","count"],V0=["put","add","delete","clear"],kc=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=V0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||D0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return kc.set(e,i),i}P0(t=>({...t,get:(e,n,r)=>$f(e,n)||t.get(e,n,r),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
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
 */class N0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",jf="0.11.2";/**
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
 */const Qn=new eh("@firebase/app"),M0="@firebase/app-compat",F0="@firebase/analytics-compat",U0="@firebase/analytics",B0="@firebase/app-check-compat",$0="@firebase/app-check",j0="@firebase/auth",H0="@firebase/auth-compat",q0="@firebase/database",z0="@firebase/data-connect",W0="@firebase/database-compat",K0="@firebase/functions",G0="@firebase/functions-compat",Q0="@firebase/installations",Y0="@firebase/installations-compat",J0="@firebase/messaging",X0="@firebase/messaging-compat",Z0="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",rI="@firebase/storage",sI="@firebase/storage-compat",iI="@firebase/firestore",oI="@firebase/vertexai",aI="@firebase/firestore-compat",lI="firebase",cI="11.4.0";/**
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
 */const iu="[DEFAULT]",uI={[su]:"fire-core",[M0]:"fire-core-compat",[U0]:"fire-analytics",[F0]:"fire-analytics-compat",[$0]:"fire-app-check",[B0]:"fire-app-check-compat",[j0]:"fire-auth",[H0]:"fire-auth-compat",[q0]:"fire-rtdb",[z0]:"fire-data-connect",[W0]:"fire-rtdb-compat",[K0]:"fire-fn",[G0]:"fire-fn-compat",[Q0]:"fire-iid",[Y0]:"fire-iid-compat",[J0]:"fire-fcm",[X0]:"fire-fcm-compat",[Z0]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[rI]:"fire-gcs",[sI]:"fire-gcs-compat",[iI]:"fire-fst",[aI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[lI]:"fire-js-all"};/**
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
 */const Fa=new Map,hI=new Map,ou=new Map;function Hf(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(ou.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of Fa.values())Hf(n,t);for(const n of hI.values())Hf(n,t);return!0}function nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const dI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Io("app","Firebase",dI);/**
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
 */class fI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const si=cI;function l_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:iu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tr.create("bad-app-name",{appName:String(s)});if(n||(n=s_()),!n)throw Tr.create("no-options");const i=Fa.get(s);if(i){if(ns(n,i.options)&&ns(r,i.config))return i;throw Tr.create("duplicate-app",{appName:s})}const o=new w0(s);for(const c of ou.values())o.addComponent(c);const l=new fI(n,r,o);return Fa.set(s,l),l}function c_(t=iu){const e=Fa.get(t);if(!e&&t===iu&&s_())return l_();if(!e)throw Tr.create("no-app",{appName:t});return e}function Ir(t,e,n){var r;let s=(r=uI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}zs(new rs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pI="firebase-heartbeat-database",mI=1,oo="firebase-heartbeat-store";let xc=null;function u_(){return xc||(xc=O0(pI,mI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),xc}async function gI(t){try{const n=(await u_()).transaction(oo),r=await n.objectStore(oo).get(h_(t));return await n.done,r}catch(e){if(e instanceof er)Qn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function qf(t,e){try{const r=(await u_()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,h_(t)),await r.done}catch(n){if(n instanceof er)Qn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function h_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _I=1024,yI=30;class wI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>yI){const o=bI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zf(),{heartbeatsToSend:r,unsentEntries:s}=vI(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function zf(){return new Date().toISOString().substring(0,10)}function vI(t,e=_I){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wf(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}function bI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function TI(t){zs(new rs("platform-logger",e=>new N0(e),"PRIVATE")),zs(new rs("heartbeat",e=>new wI(e),"PRIVATE")),Ir(su,jf,t),Ir(su,jf,"esm2017"),Ir("fire-js","")}TI("");var II="firebase",AI="11.4.0";/**
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
 */Ir(II,AI,"app");function rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function d_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CI=d_,f_=new Io("auth","Firebase",d_());/**
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
 */const Ua=new eh("@firebase/auth");function SI(t,...e){Ua.logLevel<=Ee.WARN&&Ua.warn(`Auth (${si}): ${t}`,...e)}function _a(t,...e){Ua.logLevel<=Ee.ERROR&&Ua.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function mn(t,...e){throw sh(t,...e)}function An(t,...e){return sh(t,...e)}function p_(t,e,n){const r=Object.assign(Object.assign({},CI()),{[e]:n});return new Io("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return p_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f_.create(t,...e)}function ce(t,e,...n){if(!t)throw sh(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function Yn(t,e){t||$n(e)}/**
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
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RI(){return Kf()==="http:"||Kf()==="https:"}function Kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RI()||r0()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=e0()||s0()}get(){return PI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ih(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class m_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OI=new Co(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,r,s={}){return g_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return n0()||(u.referrerPolicy="no-referrer"),m_.fetch()(__(t,t.config.apiHost,n,l),u)})}async function g_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xI),e);try{const s=new VI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw oa(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw p_(t,d,u);mn(t,d)}}catch(s){if(s instanceof er)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function So(t,e,n,r,s={}){const i=await Lr(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function __(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ih(t.config,s):`${t.config.apiScheme}://${s}`}function DI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),OI.get())})}}function oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function Gf(t){return t!==void 0&&t.enterprise!==void 0}class NI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LI(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function MI(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function y_(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FI(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=oh(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wi(Oc(s.auth_time)),issuedAtTime:Wi(Oc(s.iat)),expirationTime:Wi(Oc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oc(t){return Number(t)*1e3}function oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=n_(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qf(t){const e=oh(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&UI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ao(t,y_(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?w_(i.providerUserInfo):[],l=jI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function $I(t){const e=ot(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function w_(t){return t.map(e=>{var{providerId:n}=e,r=rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HI(t,e){const n=await g_(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=__(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",m_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qI(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Qf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ls;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function or(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FI(this,e)}reload(){return $I(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await ao(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:q,isAnonymous:ie,providerData:we,stsTokenManager:I}=n;ce($&&I,e,"internal-error");const _=Ls.fromJSON(this.name,I);ce(typeof $=="string",e,"internal-error"),or(p,e.name),or(m,e.name),ce(typeof q=="boolean",e,"internal-error"),ce(typeof ie=="boolean",e,"internal-error"),or(y,e.name),or(P,e.name),or(O,e.name),or(D,e.name),or(j,e.name),or(L,e.name);const w=new jn({uid:$,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ie,photoURL:P,phoneNumber:y,tenantId:O,stsTokenManager:_,createdAt:j,lastLoginAt:L});return we&&Array.isArray(we)&&(w.providerData=we.map(T=>Object.assign({},T))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ls;s.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?w_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ls;l.updateFromIdToken(r);const c=new jn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Yf=new Map;function Hn(t){Yn(t instanceof Function,"Expected a class definition");let e=Yf.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yf.set(t,e),e)}/**
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
 */class v_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v_.type="NONE";const Jf=v_;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Hn(Jf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Hn(Jf);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=jn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ms(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ms(i,e,r))}}/**
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
 */function Xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C_(e))return"Blackberry";if(S_(e))return"Webos";if(b_(e))return"Safari";if((e.includes("chrome/")||T_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E_(t=St()){return/firefox\//i.test(t)}function b_(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T_(t=St()){return/crios\//i.test(t)}function I_(t=St()){return/iemobile/i.test(t)}function A_(t=St()){return/android/i.test(t)}function C_(t=St()){return/blackberry/i.test(t)}function S_(t=St()){return/webos/i.test(t)}function ah(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=St()){var e;return ah(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WI(){return i0()&&document.documentMode===10}function R_(t=St()){return ah(t)||A_(t)||S_(t)||C_(t)||/windows phone/i.test(t)||I_(t)}/**
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
 */function P_(t,e=[]){let n;switch(t){case"Browser":n=Xf(St());break;case"Worker":n=`${Xf(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class KI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GI(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
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
 */const QI=6;class YI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class JI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zf(this),this.idTokenSubscription=new Zf(this),this.beforeStateQueue=new KI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await y_(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Wn(this));const n=e?ot(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),n=new YI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hs(t){return ot(t)}class Zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=f0(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(t){Tl=t}function k_(t){return Tl.loadJS(t)}function ZI(){return Tl.recaptchaEnterpriseScript}function eA(){return Tl.gapiScript}function tA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class nA{constructor(){this.enterprise=new rA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sA="recaptcha-enterprise",x_="NO_RECAPTCHA";class iA{constructor(e){this.type=sA,this.auth=hs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{LI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new NI(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Gf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(x_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Gf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZI();c.length!==0&&(c+=l),k_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ep(t,e,n,r=!1,s=!1){const i=new iA(t);let o;if(s)o=x_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function cu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ep(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ep(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function oA(t,e){const n=nh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ns(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function aA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lA(t,e,n){const r=hs(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=O_(e),{host:o,port:l}=cA(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(ns(u,r.config.emulator)&&ns(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,uA()}function O_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cA(t){const e=O_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tp(o)}}}function tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function hA(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dA(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
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
 */async function fA(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function pA(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class lo extends lh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,n,"signInWithPassword",dA);case"emailLink":return fA(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,r,"signUpPassword",hA);case"emailLink":return pA(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fs(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const mA="http://localhost";class ss extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:mA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
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
 */function gA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _A(t){const e=Di(Vi(t)).link,n=e?Di(Vi(e)).deep_link_id:null,r=Di(Vi(t)).deep_link_id;return(r?Di(Vi(r)).link:null)||r||n||e||t}class ch{constructor(e){var n,r,s,i,o,l;const c=Di(Vi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=gA((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_A(e);try{return new ch(n)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,n){return lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ch.parseLink(n);return ce(r,"argument-error"),lo._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ro extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends Ro{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class pr extends Ro{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends Ro{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */async function yA(t,e){return So(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jn._fromIdTokenResponse(e,r,s),o=np(r);return new is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=np(r);return new is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $a extends er{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function V_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function wA(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
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
 */async function vA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await ao(t,V_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=oh(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
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
 */async function N_(t,e,n=!1){if(tn(t.app))return Promise.reject(Wn(t));const r="signIn",s=await V_(t,r,e),i=await is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function EA(t,e){return N_(hs(t),e)}/**
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
 */async function L_(t){const e=hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bA(t,e,n){if(tn(t.app))return Promise.reject(Wn(t));const r=hs(t),o=await cu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&L_(t),c}),l=await is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function TA(t,e,n){return tn(t.app)?Promise.reject(Wn(t)):EA(ot(t),ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&L_(t),r})}function IA(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function AA(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function Il(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function CA(t){return ot(t).signOut()}const ja="__sak";/**
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
 */class M_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SA=1e3,RA=10;class F_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);WI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F_.type="LOCAL";const PA=F_;/**
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
 */class U_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U_.type="SESSION";const B_=U_;/**
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
 */function kA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await kA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Al.receivers=[];/**
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
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=uh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function OA(t){Cn().location.href=t}/**
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
 */function $_(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function DA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NA(){return $_()?self:null}/**
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
 */const j_="firebaseLocalStorageDb",LA=1,Ha="firebaseLocalStorage",H_="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function MA(){const t=indexedDB.deleteDatabase(j_);return new Po(t).toPromise()}function uu(){const t=indexedDB.open(j_,LA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:H_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await MA(),e(await uu()))})})}async function rp(t,e,n){const r=Cl(t,!0).put({[H_]:e,value:n});return new Po(r).toPromise()}async function FA(t,e){const n=Cl(t,!1).get(e),r=await new Po(n).toPromise();return r===void 0?null:r.value}function sp(t,e){const n=Cl(t,!0).delete(e);return new Po(n).toPromise()}const UA=800,BA=3;class q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Al._getInstance(NA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DA(),!this.activeServiceWorker)return;this.sender=new xA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await rp(e,ja,"1"),await sp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cl(s,!1).getAll();return new Po(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q_.type="LOCAL";const $A=q_;new Co(3e4,6e4);/**
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
 */function jA(t,e){return e?Hn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hh extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HA(t){return N_(t.auth,new hh(t),t.bypassAuthState)}function qA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),vA(n,new hh(t),t.bypassAuthState)}async function zA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),wA(n,new hh(t),t.bypassAuthState)}/**
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
 */class z_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return qA;default:mn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WA=new Co(2e3,1e4);class Ps extends z_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WA.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const KA="pendingRedirect",wa=new Map;class GA extends z_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wa.get(this.auth._key());if(!e){try{const r=await QA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wa.set(this.auth._key(),e)}return this.bypassAuthState||wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QA(t,e){const n=XA(e),r=JA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YA(t,e){wa.set(t._key(),e)}function JA(t){return Hn(t._redirectPersistence)}function XA(t){return ya(KA,t.config.apiKey,t.name)}async function ZA(t,e,n=!1){if(tn(t.app))return Promise.reject(Wn(t));const r=hs(t),s=jA(r,e),o=await new GA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eC=10*60*1e3;class tC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!W_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(t);default:return!1}}/**
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
 */async function rC(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const sC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iC=/^https?/;async function oC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rC(t);for(const n of e)try{if(aC(n))return}catch{}mn(t,"unauthorized-domain")}function aC(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iC.test(n))return!1;if(sC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lC=new Co(3e4,6e4);function op(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cC(t){return new Promise((e,n)=>{var r,s,i;function o(){op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{op(),n(An(t,"network-request-failed"))},timeout:lC.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=tA("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},k_(`${eA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw va=null,e})}let va=null;function uC(t){return va=va||cC(t),va}/**
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
 */const hC=new Co(5e3,15e3),dC="__/auth/iframe",fC="emulator/auth/iframe",pC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gC(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ih(e,fC):`https://${t.config.authDomain}/${dC}`,r={apiKey:e.apiKey,appName:t.name,v:si},s=mC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ao(r).slice(1)}`}async function _C(t){const e=await uC(t),n=Cn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:gC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},hC.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wC=500,vC=600,EC="_blank",bC="http://localhost";class ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(t,e,n,r=wC,s=vC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(l=T_(u)?EC:n),E_(u)&&(e=e||bC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(zI(u)&&l!=="_self")return IC(e||"",l),new ap(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new ap(p)}function IC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AC="__/auth/handler",CC="emulator/auth/handler",SC=encodeURIComponent("fac");async function lp(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:s};if(e instanceof D_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",d0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ro){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${SC}=${encodeURIComponent(c)}`:"";return`${RC(t)}?${Ao(l).slice(1)}${u}`}function RC({config:t}){return t.emulator?ih(t,CC):`https://${t.authDomain}/${AC}`}/**
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
 */const Dc="webStorageSupport";class PC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B_,this._completeRedirectFn=ZA,this._overrideRedirectResult=YA}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lp(e,n,r,au(),s);return TC(e,o,uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lp(e,n,r,au(),s);return OA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _C(e),r=new tC(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Dc];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R_()||b_()||ah()}}const kC=PC;var cp="@firebase/auth",up="1.9.1";/**
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
 */class xC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DC(t){zs(new rs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P_(t)},u=new JI(r,s,i,c);return aA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new rs("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(r=>new xC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ir(cp,up,OC(t)),Ir(cp,up,"esm2017")}/**
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
 */const VC=5*60,NC=i_("authIdTokenMaxAge")||VC;let hp=null;const LC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NC)return;const s=n==null?void 0:n.token;hp!==s&&(hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function MC(t=c_()){const e=nh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oA(t,{popupRedirectResolver:kC,persistence:[$A,PA,B_]}),r=i_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LC(i.toString());AA(n,o,()=>o(n.currentUser)),IA(n,l=>o(l))}}const s=r_("auth");return s&&lA(n,`http://${s}`),n}function FC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DC("Browser");var dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,K_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,A,C){for(var E=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)E[lt-2]=arguments[lt];return _.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],A=I.g[2];var C=I.g[3],E=_+(C^w&(A^C))+T[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[1]+3905402710&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[5]+1200080426&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[9]+2336552879&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[13]+4254626195&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(A^C&(w^A))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[6]+3225465664&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[10]+38016083&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[14]+3275163606&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[2]+4243563512&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(w^A^C)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[8]+2272392833&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[4]+1272893353&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[0]+3936430074&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[12]+3873151461&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(A^(w|~C))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[7]+1126891415&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[3]+2399980690&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[15]+4264355552&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[11]+3174756917&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,T=this.B,A=this.h,C=0;C<_;){if(A==0)for(;C<=w;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<_;)if(T[A++]=I.charCodeAt(C++),A==this.blockSize){s(this,T),A=0;break}}else for(;C<_;)if(T[A++]=I[C++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)I[w++]=this.g[_]>>>T&255;return I};function i(I,_){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],T=!0,A=I.length-1;0<=A;A--){var C=I[A]|0;T&&C==_||(w[A]=C,T=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(u(-I));for(var _=[],w=1,T=0;I>=w;T++)_[T]=I/w|0,w*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return D(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(_,8)),T=p,A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+C),_);8>C?(C=u(Math.pow(_,C)),T=T.j(C).add(u(E))):(T=T.j(w),T=T.add(u(E)))}return T}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(O(this))return"-"+D(this).toString(I);for(var _=u(Math.pow(I,6)),w=this,T="";;){var A=q(w,_).g;w=j(w,A.j(_));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,P(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=j(this,I),O(I)?-1:P(I)?0:1};function D(I){for(var _=I.g.length,w=[],T=0;T<_;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}t.abs=function(){return O(this)?D(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0,A=0;A<=_;A++){var C=T+(this.i(A)&65535)+(I.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,C&=65535,E&=65535,w[A]=E<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(D(_))}t.j=function(I){if(P(this)||P(I))return p;if(O(this))return O(I)?D(this).j(D(I)):D(D(this).j(I));if(O(I))return D(this.j(D(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var C=this.i(T)>>>16,E=this.i(T)&65535,lt=I.i(A)>>>16,Mt=I.i(A)&65535;w[2*T+2*A]+=E*Mt,L(w,2*T+2*A),w[2*T+2*A+1]+=C*Mt,L(w,2*T+2*A+1),w[2*T+2*A+1]+=E*lt,L(w,2*T+2*A+1),w[2*T+2*A+2]+=C*lt,L(w,2*T+2*A+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new o(w,0)};function L(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function $(I,_){this.g=I,this.h=_}function q(I,_){if(P(_))throw Error("division by zero");if(P(I))return new $(p,p);if(O(I))return _=q(D(I),_),new $(D(_.g),D(_.h));if(O(_))return _=q(I,D(_)),new $(D(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=_;0>=T.l(I);)w=ie(w),T=ie(T);var A=we(w,1),C=we(T,1);for(T=we(T,2),w=we(w,2);!P(T);){var E=C.add(T);0>=E.l(I)&&(A=A.add(w),C=E),T=we(T,1),w=we(w,1)}return _=j(I,A.j(_)),new $(A,_)}for(A=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=u(w),E=C.j(_);O(E)||0<E.l(I);)w-=T,C=u(w),E=C.j(_);P(C)&&(C=m),A=A.add(C),I=j(I,E)}return new $(A,I)}t.A=function(I){return q(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function ie(I){for(var _=I.g.length+1,w=[],T=0;T<_;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function we(I,_){var w=_>>5;_%=32;for(var T=I.g.length-w,A=[],C=0;C<T;C++)A[C]=0<_?I.i(C+w)>>>_|I.i(C+w+1)<<32-_:I.i(C+w);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,K_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ar=o}).apply(typeof dp<"u"?dp:typeof self<"u"?self:typeof window<"u"?window:{});var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G_,Ni,Q_,Ea,hu,Y_,J_,X_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof aa=="object"&&aa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var k=f++;return{value:h(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,k){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return h.prototype[R].apply(g,K)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=a.length||0,k=g.length||0;a.length=R+k;for(let K=0;K<k;K++)a[R+K]=g[K]}else a.push(g)}}class j{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ie=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function we(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let k=0;k<w.length;k++)f=w[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class lt{constructor(){this.h=this.g=null}add(h,f){const g=Mt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new j(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,ve=!1,Ht=new lt,un=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){C(f)}var h=Mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function yn(a,h){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{q(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}P(yn,We);var Ft={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,h,f,g,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=R,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,g,R){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var K=b(a,h,g,R);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Q(h,this.src,k,!!g,R),h.fa=f,a.push(h)),h};function v(a,h){var f=h.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,h,void 0),k;(k=0<=R)&&Array.prototype.splice.call(g,R,1),k&&(te(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,h,f,g){for(var R=0;R<a.length;++R){var k=a[R];if(!k.da&&k.listener==h&&k.capture==!!f&&k.ha==g)return R}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function B(a,h,f,g,R){if(Array.isArray(h)){for(var k=0;k<h.length;k++)B(a,h[k],f,g,R);return null}return f=ue(f),a&&a[V]?a.K(h,f,u(g)?!!g.capture:!1,R):F(a,h,f,!1,g,R)}function F(a,h,f,g,R,k){if(!h)throw Error("Invalid event type");var K=u(R)?!!R.capture:!!R,Ne=Y(a);if(Ne||(a[S]=Ne=new Re(a)),f=Ne.add(h,f,g,K,k),f.proxy)return f;if(g=G(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)tr||(R=K),R===void 0&&(R=!1),a.addEventListener(h.toString(),g,R);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return h.call(a.src,a.listener,f)}const h=oe;return a}function W(a,h,f,g,R){if(Array.isArray(h))for(var k=0;k<h.length;k++)W(a,h[k],f,g,R);else g=u(g)?!!g.capture:!!g,f=ue(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(k=a.g[h],f=b(k,f,g,R),-1<f&&(te(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,f,g,R)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])v(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(H(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Y(h))?(v(f,a),f.h==0&&(f.src=null,h[S]=null)):te(a)}}}function H(a){return a in N?N[a]:N[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new yn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,h)}return a}function Y(a){return a=a[S],a instanceof Re?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ae(){ze.call(this),this.i=new Re(this),this.M=this,this.F=null}P(ae,ze),ae.prototype[V]=!0,ae.prototype.removeEventListener=function(a,h,f,g){W(this,a,h,f,g)};function ye(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new We(h,a);else if(h instanceof We)h.target=h.target||a;else{var R=h;h=new We(g,a),T(h,R)}if(R=!0,f)for(var k=f.length-1;0<=k;k--){var K=h.g=f[k];R=Ie(K,g,!0,h)&&R}if(K=h.g=a,R=Ie(K,g,!0,h)&&R,R=Ie(K,g,!1,h)&&R,f)for(k=0;k<f.length;k++)K=h.g=f[k],R=Ie(K,g,!1,h)&&R}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)te(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ie(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,k=0;k<h.length;++k){var K=h[k];if(K&&!K.da&&K.capture==f){var Ne=K.listener,ht=K.ha||K.src;K.fa&&v(a.i,K),R=Ne.call(ht,g)!==!1&&R}}return R&&!g.defaultPrevented}function gt(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ct(a){a.g=gt(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Zt extends ze{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){ze.call(this),this.h=a,this.g={}}P(_t,ze);var nr=[];function gi(a){we(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),gi(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=l.JSON.stringify,en=l.JSON.parse,$o=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tc(){}tc.prototype.h=null;function dd(a){return a.h||(a.h=a.i())}function fd(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nc(){We.call(this,"d")}P(nc,We);function rc(){We.call(this,"c")}P(rc,We);var Ur={},pd=null;function jo(){return pd=pd||new ae}Ur.La="serverreachability";function md(a){We.call(this,Ur.La,a)}P(md,We);function yi(a){const h=jo();ye(h,new md(h))}Ur.STAT_EVENT="statevent";function gd(a,h){We.call(this,Ur.STAT_EVENT,a),this.stat=h}P(gd,We);function Pt(a){const h=jo();ye(h,new gd(h,a))}Ur.Ma="timingevent";function _d(a,h){We.call(this,Ur.Ma,a),this.size=h}P(_d,We);function wi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function jv(a,h,f,g,R,k){a.info(function(){if(a.g)if(k)for(var K="",Ne=k.split("&"),ht=0;ht<Ne.length;ht++){var Pe=Ne[ht].split("=");if(1<Pe.length){var yt=Pe[0];Pe=Pe[1];var wt=yt.split("_");K=2<=wt.length&&wt[1]=="type"?K+(yt+"="+Pe+"&"):K+(yt+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+h+`
`+f+`
`+K})}function Hv(a,h,f,g,R,k,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+h+`
`+f+`
`+k+" "+K})}function _s(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zv(a,f)+(g?" "+g:"")})}function qv(a,h){a.info(function(){return"TIMEOUT: "+h})}vi.prototype.info=function(){};function zv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<R.length;K++)R[K]=""}}}}return ut(f)}catch{return h}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sc;function qo(){}P(qo,tc),qo.prototype.g=function(){return new XMLHttpRequest},qo.prototype.i=function(){return{}},sc=new qo;function rr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wd}function wd(){this.i=null,this.g="",this.h=!1}var vd={},ic={};function oc(a,h,f){a.L=1,a.v=Go(Vn(h)),a.m=f,a.P=!0,Ed(a,null)}function Ed(a,h){a.F=Date.now(),zo(a),a.A=Vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Nd(f.i,"t",g),a.C=0,f=a.j.J,a.h=new wd,a.g=Zd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Zt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(nr[0]=R.toString()),R=nr);for(var k=0;k<R.length;k++){var K=B(f,R[k],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),yi(),jv(a.i,a.u,a.A,a.l,a.R,a.m)}rr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},rr.prototype.Y=function(a){try{if(a==this.g)e:{const wt=Nn(this.g);var h=this.g.Ba();const vs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||jd(this.g)))){this.J||wt!=4||h==7||(h==8||0>=vs?yi(3):yi(2)),ac(this);var f=this.g.Z();this.X=f;t:if(bd(this)){var g=jd(this.g);a="";var R=g.length,k=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Ei(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(k&&h==R-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Hv(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ht=this.g;if((Ne=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ne)){var Pe=Ne;break t}}Pe=null}if(f=Pe)_s(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lc(this,f);else{this.o=!1,this.s=3,Pt(12),Br(this),Ei(this);break e}}if(this.P){f=!0;let hn;for(;!this.J&&this.C<K.length;)if(hn=Wv(this,K),hn==ic){wt==4&&(this.s=4,Pt(14),f=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==vd){this.s=4,Pt(15),_s(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else _s(this.i,this.l,hn,null),lc(this,hn);if(bd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)_s(this.i,this.l,K,"[Invalid Chunked Response]"),Br(this),Ei(this);else if(0<K.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),pc(yt),yt.M=!0,Pt(11))}}else _s(this.i,this.l,K,null),lc(this,K);wt==4&&Br(this),this.o&&!this.J&&(wt==4?Qd(this.j,this):(this.o=!1,zo(this)))}else cE(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Br(this),Ei(this)}}}catch{}finally{}};function bd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Wv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?ic:(f=Number(h.substring(f,g)),isNaN(f)?vd:(g+=1,g+f>h.length?ic:(h=h.slice(g,g+f),a.C=g+f,h)))}rr.prototype.cancel=function(){this.J=!0,Br(this)};function zo(a){a.S=Date.now()+a.I,Td(a,a.I)}function Td(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wi(m(a.ba,a),h)}function ac(a){a.B&&(l.clearTimeout(a.B),a.B=null)}rr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qv(this.i,this.A),this.L!=2&&(yi(),Pt(17)),Br(this),this.s=2,Ei(this)):Td(this,this.S-a)};function Ei(a){a.j.G==0||a.J||Qd(a.j,a)}function Br(a){ac(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function lc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||cc(f.h,a))){if(!a.K&&cc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ea(f),Xo(f);else break e;fc(f),Pt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=wi(m(f.Za,f),6e3));if(1>=Cd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&ea(f),!L(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let Pe=R[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const yt=Pe[3];yt!=null&&(f.la=yt,f.j.info("VER="+f.la));const wt=Pe[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const vs=Pe[5];vs!=null&&typeof vs=="number"&&0<vs&&(g=1.5*vs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const hn=a.g;if(hn){const na=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var k=g.h;k.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(uc(k,k.h),k.h=null))}if(g.D){const mc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;mc&&(g.ya=mc,je(g.I,g.D,mc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Xd(g,g.J?g.ia:null,g.W),K.K){Sd(g.h,K);var Ne=K,ht=g.L;ht&&(Ne.I=ht),Ne.B&&(ac(Ne),zo(Ne)),g.g=K}else Kd(g);0<f.i.length&&Zo(f)}else Pe[0]!="stop"&&Pe[0]!="close"||jr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?jr(f,7):dc(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}yi(4)}catch{}}var Kv=class{constructor(a,h){this.g=a,this.map=h}};function Id(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ad(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cd(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function uc(a,h){a.g?a.g.add(h):a.h=h}function Sd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Id.prototype.cancel=function(){if(this.i=Rd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function Gv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Qv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Pd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Qv(a),g=Gv(a),R=g.length,k=0;k<R;k++)h.call(void 0,g[k],f&&f[k],a)}var kd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var k=a[f].substring(0,g);R=a[f].substring(g+1)}else k=a[f];h(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Wo(this,a.j),this.o=a.o,this.g=a.g,Ko(this,a.s),this.l=a.l;var h=a.i,f=new Ii;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),xd(this,f),this.m=a.m}else a&&(h=String(a).match(kd))?(this.h=!1,Wo(this,h[1]||"",!0),this.o=bi(h[2]||""),this.g=bi(h[3]||"",!0),Ko(this,h[4]),this.l=bi(h[5]||"",!0),xd(this,h[6]||"",!0),this.m=bi(h[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ti(h,Od,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ti(h,Od,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ti(f,f.charAt(0)=="/"?Zv:Xv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ti(f,tE)),a.join("")};function Vn(a){return new $r(a)}function Wo(a,h,f){a.j=f?bi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ko(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function xd(a,h,f){h instanceof Ii?(a.i=h,nE(a.i,a.h)):(f||(h=Ti(h,eE)),a.i=new Ii(h,a.h))}function je(a,h,f){a.i.set(h,f)}function Go(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Jv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Od=/[#\/\?@]/g,Xv=/[#\?:]/g,Zv=/[#\?]/g,eE=/[#\?@]/g,tE=/#/g;function Ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&Yv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ii.prototype,t.add=function(a,h){sr(this),this.i=null,a=ys(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dd(a,h){sr(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vd(a,h){return sr(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){sr(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(h,R,g,this)},this)},this)},t.na=function(){sr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const R=a[g];for(let k=0;k<R.length;k++)f.push(h[g])}return f},t.V=function(a){sr(this);let h=[];if(typeof a=="string")Vd(this,a)&&(h=h.concat(this.g.get(ys(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return sr(this),this.i=null,a=ys(this,a),Vd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Nd(a,h,f){Dd(a,h),0<f.length&&(a.i=null,a.g.set(ys(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const k=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var R=k;K[g]!==""&&(R+="="+encodeURIComponent(String(K[g]))),a.push(R)}}return this.i=a.join("&")};function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function nE(a,h){h&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Dd(this,g),Nd(this,R,f))},a)),a.j=h}function rE(a,h){const f=new vi;if(l.Image){const g=new Image;g.onload=y(ir,f,"TestLoadImage: loaded",!0,h,g),g.onerror=y(ir,f,"TestLoadImage: error",!1,h,g),g.onabort=y(ir,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(ir,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function sE(a,h){const f=new vi,g=new AbortController,R=setTimeout(()=>{g.abort(),ir(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(R),k.ok?ir(f,"TestPingServer: ok",!0,h):ir(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),ir(f,"TestPingServer: error",!1,h)})}function ir(a,h,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function iE(){this.g=new $o}function oE(a,h,f){const g=f||"";try{Pd(a,function(R,k){let K=R;u(R)&&(K=ut(R)),h.push(g+k+"="+encodeURIComponent(K))})}catch(R){throw h.push(g+"type="+encodeURIComponent("_badmap")),R}}function Qo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Qo,tc),Qo.prototype.g=function(){return new Yo(this.l,this.j)},Qo.prototype.i=function(a){return function(){return a}}({});function Yo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Yo,ae),t=Yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ci(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ld(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ld(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ai(this):Ci(this),this.readyState==3&&Ld(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ci(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ci(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Md(a){let h="";return we(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function hc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Md(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Ge(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ge,ae);var aE=/^https?$/i,lE=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sc.g(),this.v=this.o?dd(this.o):dd(sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Fd(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lE,h,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of f)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$d(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Fd(this,k)}};function Fd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ud(a),Jo(a)}function Ud(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bd(this):this.bb())},t.bb=function(){Bd(this)};function Bd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)gt(a.Ea,0,a);else if(ye(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=K===0){var R=String(a.D).match(kd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!aE.test(R?R.toLowerCase():"")}f=g}if(f)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var k=2<Nn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Ud(a)}}finally{Jo(a)}}}}function Jo(a,h){if(a.g){$d(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{f.onreadystatechange=g}catch{}}}function $d(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),en(h)}};function jd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cE(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var f=A(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=h[R]||[];h[R]=k,k.push(f)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Hd(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Id(a&&a.concurrentRequestLimit),this.Da=new iE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Pt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xd(this,null,this.W),Zo(this)};function dc(a){if(qd(a),a.G==3){var h=a.U++,f=Vn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),Ri(a,f),h=new rr(a,a.j,h),h.L=2,h.v=Go(Vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Zd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zo(h)}Jd(a)}function Xo(a){a.g&&(pc(a),a.g.cancel(),a.g=null)}function qd(a){Xo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Zo(a){if(!Ad(a.h)&&!a.s){a.s=!0;var h=a.Ga;de||un(),ve||(de(),ve=!0),Ht.add(h,a),a.B=0}}function uE(a,h){return Cd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wi(m(a.Ga,a,h),Yd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new rr(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Wd(this,R,h),f=Vn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),Ri(this,f),k&&(this.O?h="headers="+encodeURIComponent(String(Md(k)))+"&"+h:this.m&&hc(f,this.m,k)),uc(this.h,R),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),R.T=!0,oc(R,f,null)):oc(R,f,h),this.G=2}}else this.G==3&&(a?zd(this,a):this.i.length==0||Ad(this.h)||zd(this))};function zd(a,h){var f;h?f=h.l:f=a.U++;const g=Vn(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),Ri(a,g),a.m&&a.o&&hc(g,a.m,a.o),f=new rr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),uc(a.h,f),oc(f,g,h)}function Ri(a,h){a.H&&we(a.H,function(f,g){je(h,g,f)}),a.l&&Pd({},function(f,g){je(h,g,f)})}function Wd(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let k=-1;for(;;){const K=["count="+f];k==-1?0<f?(k=R[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Ne=!0;for(let ht=0;ht<f;ht++){let Pe=R[ht].g;const yt=R[ht].map;if(Pe-=k,0>Pe)k=Math.max(0,R[ht].g-100),Ne=!1;else try{oE(yt,K,"req"+Pe+"_")}catch{g&&g(yt)}}if(Ne){g=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Kd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;de||un(),ve||(de(),ve=!0),Ht.add(h,a),a.v=0}}function fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wi(m(a.Fa,a),Yd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Xo(this),Gd(this))};function pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gd(a){a.g=new rr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),Ri(a,h),a.m&&a.o&&hc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Go(Vn(h)),f.m=null,f.P=!0,Ed(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Xo(this),fc(this),Pt(19))};function ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qd(a,h){var f=null;if(a.g==h){ea(a),pc(a),a.g=null;var g=2}else if(cc(a.h,h))f=h.D,Sd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;g=jo(),ye(g,new _d(g,f)),Zo(a)}else Kd(a);else if(R=h.s,R==3||R==0&&0<h.X||!(g==1&&uE(a,h)||g==2&&fc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Yd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const R=!g;g=new $r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wo(g,"https"),Go(g),R?rE(g.toString(),f):sE(g.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(h),Jd(a),qd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Jd(a){if(a.G=0,a.ka=[],a.l){const h=Rd(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Xd(a,h,f){var g=f instanceof $r?Vn(f):new $r(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ko(g,g.s);else{var R=l.location;g=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var k=new $r(null);g&&Wo(k,g),h&&(k.g=h),R&&Ko(k,R),f&&(k.l=f),g=k}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),Ri(a,g),g}function Zd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new Qo({eb:f})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ef(){}t=ef.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){ae.call(this),this.g=new Hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ws(this)}P(qt,ae),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){dc(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ut(a),a=f);h.i.push(new Kv(h.Ya++,a)),h.G==3&&Zo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,qt.aa.N.call(this)};function tf(a){nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(tf,nc);function nf(){rc.call(this),this.status=1}P(nf,rc);function ws(a){this.g=a}P(ws,ef),ws.prototype.ua=function(){ye(this.g,"a")},ws.prototype.ta=function(a){ye(this.g,new tf(a))},ws.prototype.sa=function(a){ye(this.g,new nf)},ws.prototype.ra=function(){ye(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,X_=function(){return new ta},J_=function(){return jo()},Y_=Ur,hu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ea=Ho,yd.COMPLETE="complete",Q_=yd,fd.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ni=fd,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,G_=Ge}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});const fp="@firebase/firestore",pp="4.7.9";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let oi="11.4.0";/**
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
 */const os=new eh("@firebase/firestore");function Is(){return os.logLevel}function X(t,...e){if(os.logLevel<=Ee.DEBUG){const n=e.map(dh);os.debug(`Firestore (${oi}): ${t}`,...n)}}function Jn(t,...e){if(os.logLevel<=Ee.ERROR){const n=e.map(dh);os.error(`Firestore (${oi}): ${t}`,...n)}}function Ws(t,...e){if(os.logLevel<=Ee.WARN){const n=e.map(dh);os.warn(`Firestore (${oi}): ${t}`,...n)}}function dh(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function Ve(t,e){t||he()}function me(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class BC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $C{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Et(e)}}class jC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class HC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qC{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,tn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new mp(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new mp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const gp=-62135596800,_p=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_p);return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gp)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_p}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-gp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new nt(0,0))}static max(){return new pe(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yp="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=En.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=En.isNumericId(e),s=En.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?En.extractNumericId(e).compare(En.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class He extends En{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const WC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends En{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return WC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yp}static keyField(){return new pt([yp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(He.fromString(e))}static fromName(e){return new re(He.fromString(e).popFirst(5))}static empty(){return new re(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new He(e.slice()))}}/**
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
 */const co=-1;function KC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Sr(s,re.empty(),e)}function GC(t){return new Sr(t.readTime,t.key,co)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(pe.min(),re.empty(),co)}static max(){return new Sr(pe.max(),re.empty(),co)}}function QC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const YC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ai(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==YC)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function XC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function li(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Sl.ae=-1;/**
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
 */const fh=-1;function Rl(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function ZC(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ty="";function eS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wp(e)),e=tS(t.get(n),e);return wp(e)}function tS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ty:n+="";break;default:n+=i}}return n}function wp(t){return t+ty+""}/**
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
 */function vp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new la(this.root,e,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new la(this.root,e,this.comparator,!0)}}class la{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ep(this.data.getIterator())}getIteratorFrom(e){return new Ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new rt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ry extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ry("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const nS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=nS.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */const sy="server_timestamp",iy="__type__",oy="__previous_value__",ay="__local_write_time__";function ph(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[iy])===null||n===void 0?void 0:n.stringValue)===sy}function Pl(t){const e=t.mapValue.fields[oy];return ph(e)?Pl(e):e}function uo(t){const e=Rr(t.mapValue.fields[ay].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class rS{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const za="(default)";class ho{constructor(e,n){this.projectId=e,this.database=n||za}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database===za}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ly="__type__",sS="__max__",ca={mapValue:{}},cy="__vector__",Wa="value";function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ph(t)?4:oS(t)?9007199254740991:iS(t)?10:11:he()}function xn(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?qa(o)===qa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(vp(o)!==vp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!xn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function fo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bp(t.timestampValue,e.timestampValue);case 4:return bp(uo(t),uo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Pr(i),c=Pr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Te(l[u],c[u]);if(d!==0)return d}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Te(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Tp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},y=(l=p[Wa])===null||l===void 0?void 0:l.arrayValue,P=(c=m[Wa])===null||c===void 0?void 0:c.arrayValue,O=Te(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Tp(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ca.mapValue&&o===ca.mapValue)return 0;if(i===ca.mapValue)return 1;if(o===ca.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Te(c[p],d[p]);if(m!==0)return m;const y=Gs(l[c[p]],u[d[p]]);if(y!==0)return y}return Te(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function bp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Rr(t),r=Rr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Tp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Qs(t){return du(t)}function du(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=du(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${du(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function ba(t){switch(kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pl(t);return e?16+ba(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ba(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Mr(r.fields,(i,o)=>{s+=i.length+ba(o)}),s}(t.mapValue);default:throw he()}}function Ip(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fu(t){return!!t&&"integerValue"in t}function mh(t){return!!t&&"arrayValue"in t}function Ap(t){return!!t&&"nullValue"in t}function Cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function iS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ly])===null||n===void 0?void 0:n.stringValue)===cy}function Ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sS}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ki(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(Ki(this.value))}}function uy(t){const e=[];return Mr(t.fields,(n,r)=>{const s=new pt([n]);if(Ta(r)){const i=uy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,pe.min(),pe.min(),pe.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,pe.min(),pe.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,pe.min(),pe.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ka{constructor(e,n){this.position=e,this.inclusive=n}}function Sp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class po{constructor(e,n="asc"){this.field=e,this.dir=n}}function aS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hy{}class et extends hy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cS(e,n,r):n==="array-contains"?new dS(e,r):n==="in"?new fS(e,r):n==="not-in"?new pS(e,r):n==="array-contains-any"?new mS(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uS(e,r):new hS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends hy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new gn(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function dy(t){return t.op==="and"}function fy(t){return lS(t)&&dy(t)}function lS(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function pu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(fy(t))return t.filters.map(e=>pu(e)).join(",");{const e=t.filters.map(n=>pu(n)).join(",");return`${t.op}(${e})`}}function py(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&py(o,s.filters[l]),!0):!1}(t,e):void he()}function my(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(my).join(" ,")+"}"}(t):"Filter"}class cS extends et{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class uS extends et{constructor(e,n){super(e,"in",n),this.keys=gy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hS extends et{constructor(e,n){super(e,"not-in",n),this.keys=gy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class dS extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mh(n)&&fo(n.arrayValue,this.value)}}class fS extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class pS extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class mS extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
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
 */class gS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Pp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gS(t,e,n,r,s,i,o)}function gh(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.le=n}return e.le}function _h(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rp(t.startAt,e.startAt)&&Rp(t.endAt,e.endAt)}function mu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ci{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function _S(t,e,n,r,s,i,o,l){return new ci(t,e,n,r,s,i,o,l)}function yh(t){return new ci(t)}function kp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _y(t){return t.collectionGroup!==null}function Gi(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new po(i,r))}),n.has(pt.keyField().canonicalString())||e.he.push(new po(pt.keyField(),r))}return e.he}function Sn(t){const e=me(t);return e.Pe||(e.Pe=yS(e,Gi(t))),e.Pe}function yS(t,e){if(t.limitType==="F")return Pp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new po(s.field,i)});const n=t.endAt?new Ka(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ka(t.startAt.position,t.startAt.inclusive):null;return Pp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gu(t,e){const n=t.filters.concat([e]);return new ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _u(t,e,n){return new ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kl(t,e){return _h(Sn(t),Sn(e))&&t.limitType===e.limitType}function yy(t){return`${gh(Sn(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>my(s)).join(", ")}]`),Rl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Sp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Gi(r),s)||r.endAt&&!function(o,l,c){const u=Sp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Gi(r),s))}(t,e)}function wS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wy(t){return(e,n)=>{let r=!1;for(const s of Gi(t)){const i=vS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vS(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Gs(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ny(this.inner)}size(){return this.innerSize}}/**
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
 */const ES=new Ke(re.comparator);function Xn(){return ES}const vy=new Ke(re.comparator);function Li(...t){let e=vy;for(const n of t)e=e.insert(n.key,n);return e}function Ey(t){let e=vy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Qi()}function by(){return Qi()}function Qi(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const bS=new Ke(re.comparator),TS=new rt(re.comparator);function be(...t){let e=TS;for(const n of t)e=e.add(n);return e}const IS=new rt(Te);function AS(){return IS}/**
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
 */function wh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function Ty(t){return{integerValue:""+t}}function CS(t,e){return ZC(e)?Ty(e):wh(t,e)}/**
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
 */class Ol{constructor(){this._=void 0}}function SS(t,e,n){return t instanceof mo?function(s,i){const o={fields:{[iy]:{stringValue:sy},[ay]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ph(i)&&(i=Pl(i)),i&&(o.fields[oy]=i),{mapValue:o}}(n,e):t instanceof go?Ay(t,e):t instanceof _o?Cy(t,e):function(s,i){const o=Iy(s,i),l=xp(o)+xp(s.Ie);return fu(o)&&fu(s.Ie)?Ty(l):wh(s.serializer,l)}(t,e)}function RS(t,e,n){return t instanceof go?Ay(t,e):t instanceof _o?Cy(t,e):n}function Iy(t,e){return t instanceof Ga?function(r){return fu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mo extends Ol{}class go extends Ol{constructor(e){super(),this.elements=e}}function Ay(t,e){const n=Sy(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Ol{constructor(e){super(),this.elements=e}}function Cy(t,e){let n=Sy(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class Ga extends Ol{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function xp(t){return Ye(t.integerValue||t.doubleValue)}function Sy(t){return mh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class PS{constructor(e,n){this.field=e,this.transform=n}}function kS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof go&&s instanceof go||r instanceof _o&&s instanceof _o?Ks(r.elements,s.elements,xn):r instanceof Ga&&s instanceof Ga?xn(r.Ie,s.Ie):r instanceof mo&&s instanceof mo}(t.transform,e.transform)}class xS{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function Ry(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ky(t.key,pn.none()):new ko(t.key,t.data,pn.none());{const n=t.data,r=Bt.empty();let s=new rt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new Gt(s.toArray()),pn.none())}}function OS(t,e,n){t instanceof ko?function(s,i,o){const l=s.value.clone(),c=Dp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,o){if(!Ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Dp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Py(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof ko?function(i,o,l,c){if(!Ia(i.precondition,o))return l;const u=i.value.clone(),d=Vp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,o,l,c){if(!Ia(i.precondition,o))return l;const u=Vp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Py(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function DS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Iy(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function Op(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>kS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends Dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends Dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Py(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dp(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,RS(o,l,n[s]))}return r}function Vp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,SS(i,o,e))}return r}class ky extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VS extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=by();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ry(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>Op(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>Op(n,r))}}class vh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return bS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vh(e,n,r,s)}}/**
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
 */class LS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,Ae;function FS(t){switch(t){case M.OK:return he();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return he()}}function xy(t){if(t===void 0)return Jn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ze.OK:return M.OK;case Ze.CANCELLED:return M.CANCELLED;case Ze.UNKNOWN:return M.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return M.INTERNAL;case Ze.UNAVAILABLE:return M.UNAVAILABLE;case Ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ze.NOT_FOUND:return M.NOT_FOUND;case Ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ze.ABORTED:return M.ABORTED;case Ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ze.DATA_LOSS:return M.DATA_LOSS;default:return he()}}(Ae=Ze||(Ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function US(){return new TextEncoder}/**
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
 */const BS=new Ar([4294967295,4294967295],0);function Np(t){const e=US().encode(t),n=new K_;return n.update(e),new Uint8Array(n.digest())}function Lp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class Eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mi(`Invalid padding: ${n}`);if(r<0)throw new Mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mi(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ar.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(BS)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Np(e),[r,s]=Lp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Np(e),[r,s]=Lp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vl(pe.min(),s,new Ke(Te),Xn(),be())}}class xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xo(r,n,be(),be(),be())}}/**
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
 */class Aa{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Oy{constructor(e,n){this.targetId=e,this.ge=n}}class Dy{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Mp{constructor(){this.pe=0,this.ye=Fp(),this.we=mt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=be(),n=be(),r=be();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new xo(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Fp()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ve(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class $S{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Xn(),this.$e=ua(),this.Ke=ua(),this.Ue=new Ke(Te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(mu(i))if(r===0){const o=new re(i.path);this.ze(n,o,At.newNoDocument(o,pe.min()))}else Ve(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Pr(r).toUint8Array()}catch(c){if(c instanceof ry)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Eh(o,s,i)}catch(c){return Ws(c instanceof Mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&mu(l.target)){const c=new re(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,At.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=be();this.Ke.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Vl(e,n,this.Ue,this.Qe,r);return this.Qe=Xn(),this.$e=ua(),this.Ke=ua(),this.Ue=new Ke(Te),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Mp,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new rt(Te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new rt(Te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Mp),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ua(){return new Ke(re.comparator)}function Fp(){return new Ke(re.comparator)}const jS={asc:"ASCENDING",desc:"DESCENDING"},HS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qS={and:"AND",or:"OR"};class zS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yu(t,e){return t.useProto3Json||Rl(e)?e:{value:e}}function Qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WS(t,e){return Qa(t,e.toTimestamp())}function Rn(t){return Ve(!!t),pe.fromTimestamp(function(n){const r=Rr(n);return new nt(r.seconds,r.nanos)}(t))}function bh(t,e){return wu(t,e).canonicalString()}function wu(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ny(t){const e=He.fromString(t);return Ve(By(e)),e}function vu(t,e){return bh(t.databaseId,e.path)}function Vc(t,e){const n=Ny(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(My(n))}function Ly(t,e){return bh(t.databaseId,e)}function KS(t){const e=Ny(t);return e.length===4?He.emptyPath():My(e)}function Eu(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function My(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Up(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function GS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ve(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?M.UNKNOWN:xy(u.code);return new Z(d,u.message||"")}(o);n=new Dy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vc(t,r.document.name),i=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):pe.min(),l=new Bt({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Aa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vc(t,r.document),i=r.readTime?Rn(r.readTime):pe.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Aa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vc(t,r.document),i=r.removedTargetIds||[];n=new Aa([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MS(s,i),l=r.targetId;n=new Oy(l,o)}}return n}function QS(t,e){let n;if(e instanceof ko)n={update:Up(t,e.key,e.value)};else if(e instanceof ky)n={delete:vu(t,e.key)};else if(e instanceof Fr)n={update:Up(t,e.key,e.data),updateMask:sR(e.fieldMask)};else{if(!(e instanceof VS))return he();n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ga)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function YS(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Rn(s.updateTime):Rn(i);return o.isEqual(pe.min())&&(o=Rn(i)),new xS(o,s.transformResults||[])}(n,e))):[]}function JS(t,e){return{documents:[Ly(t,e.path)]}}function XS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ly(t,s);const i=function(u){if(u.length!==0)return Uy(gn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Cs(m.field),direction:tR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function ZS(t){let e=KS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Fy(p);return m instanceof gn&&fy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new po(Ss(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Rl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new Ka(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new Ka(y,m)}(n.endAt)),_S(e,s,o,i,l,"F",c,u)}function eR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ss(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ss(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>Fy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function tR(t){return jS[t]}function nR(t){return HS[t]}function rR(t){return qS[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ss(t){return pt.fromServerFormat(t.fieldPath)}function Uy(t){return t instanceof et?function(n){if(n.op==="=="){if(Cp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(Ap(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cp(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(Ap(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:nR(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(s=>Uy(s));return r.length===1?r[0]:{compositeFilter:{op:rR(n.op),filters:r}}}(t):he()}function sR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function By(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iR{constructor(e){this.Tt=e}}function oR(t){const e=ZS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_u(e,e.limit,"L"):e}/**
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
 */class aR{constructor(){this.Tn=new lR}addToCollectionParentIndex(e,n){return this.Tn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Sr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class lR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(He.comparator)).toArray()}}/**
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
 */const Bp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$y=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut($y,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
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
 */class Ys{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ys(0)}static Un(){return new Ys(-1)}}/**
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
 */const $p="LruGarbageCollector",cR=1048576;function jp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class uR{constructor(e){this.Hn=e,this.buffer=new rt(jp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X($p,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){li(n)?X($p,"Ignoring IndexedDB error during garbage collection: ",n):await ai(n)}await this.er(3e5)})}}class dR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Sl.ae);const r=new uR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Bp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Is()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function fR(t,e){return new dR(t,e)}/**
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
 */class pR{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yi(r.mutation,s,Gt.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Li();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Xn();const o=Qi(),l=function(){return Qi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Fr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Yi(d.mutation,u,d.mutation.getFieldMask(),nt.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new mR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qi();let s=new Ke((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Gt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||be()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=by();d.forEach(m=>{if(!i.has(m)){const y=Ry(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Qr());let l=co,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,be())).next(d=>({batchId:l,changes:Ey(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,m){return new ci(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=Li();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Yi(d.mutation,u,Gt.empty(),nt.now()),xl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class _R{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return U.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:oR(s.bundledQuery),readTime:Rn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class yR{constructor(){this.overlays=new Ke(re.comparator),this.Rr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Qr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LS(n,r));let i=this.Rr.get(n);i===void 0&&(i=be(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class wR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Th{constructor(){this.Vr=new rt(st.mr),this.gr=new rt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new st(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new re(new He([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new re(new He([])),r=new st(n,e),s=new st(n,e+1);let i=be();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return re.comparator(e.key,n.key)||Te(e.Cr,n.Cr)}static pr(e,n){return Te(e.Cr,n.Cr)||re.comparator(e.key,n.key)}}/**
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
 */class vR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(st.mr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?fh:this.Fr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Te);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),U.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new st(new re(i),0);let l=new rt(Te);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},o),U.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return U.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new st(n,0),s=this.Mr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ER{constructor(e){this.kr=e,this.docs=function(){return new Ke(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QC(GC(d),r)<=0||(s.has(d.key)||xl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}qr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bR(this)}getSize(e){return U.resolve(this.size)}}class bR extends pR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class TR{constructor(e){this.persistence=e,this.Qr=new ds(n=>gh(n),_h),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Th,this.targetCount=0,this.Ur=Ys.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),U.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.zn(n),U.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Kr.containsKey(n))}}/**
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
 */class jy{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Sl(0),this.zr=!1,this.zr=!0,this.jr=new wR,this.referenceDelegate=e(this),this.Hr=new TR(this),this.indexManager=new aR,this.remoteDocumentCache=function(s){return new ER(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new iR(n),this.Yr=new _R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new vR(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new IR(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return U.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class IR extends JC{constructor(e){super(),this.currentSequenceNumber=e}}class Ih{constructor(e){this.persistence=e,this.ti=new Th,this.ni=null}static ri(e){return new Ih(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),U.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ii,r=>{const s=re.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return U.or([()=>U.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ya{constructor(e,n){this.persistence=e,this.oi=new ds(r=>eS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fR(this,n)}static ri(e,n){return new Ya(e,n)}Zr(){}Xr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return U.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),U.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ba(e.data.value)),n}ar(e,n,r){return U.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ah{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ah(e,n.fromCache,r,s)}}/**
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
 */class AR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return o0()?8:XC(St())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AR;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Is()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),U.resolve()):(Is()<=Ee.DEBUG&&X("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Is()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):U.resolve())}rs(e,n){if(kp(n))return U.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_u(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,_u(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return kp(n)||s.isEqual(pe.min())?U.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?U.resolve(null):(Is()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),As(n)),this.hs(e,o,n,KC(s,co)).next(l=>l))})}cs(e,n){let r=new rt(wy(e));return n.forEach((s,i)=>{xl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Is()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",As(n)),this.ns.getDocumentsMatchingQuery(e,n,Sr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ch="LocalStore",SR=3e8;class RR{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ke(Te),this.Is=new ds(i=>gh(i),_h),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function PR(t,e,n,r){return new RR(t,e,n,r)}async function Hy(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=be();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function kR(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let y=U.resolve();return m.forEach(P=>{y=y.next(()=>d.getEntry(c,P)).next(O=>{const D=u.docVersions.get(P);Ve(D!==null),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=be();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qy(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function xR(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(mt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(O,D,j){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=SR?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,y,d)&&l.push(n.Hr.updateTargetData(i,y))});let c=Xn(),u=be();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(OR(i,o,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(pe.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function OR(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Xn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Ch,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function DR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function bu(t,e,n){const r=me(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!li(o))throw o;X(Ch,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Hp(t,e,n){const r=me(t);let s=pe.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=me(c),m=p.Is.get(d);return m!==void 0?U.resolve(p.Ts.get(m)):p.Hr.getTargetData(u,d)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:be())).next(l=>(NR(r,wS(e),l),{documents:l,gs:i})))}function NR(t,e,n){let r=t.Es.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class qp{constructor(){this.activeTargetIds=AS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LR{constructor(){this.ho=new qp,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new qp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MR{To(e){}shutdown(){}}/**
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
 */const zp="ConnectivityMonitor";class Wp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(zp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(zp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ha=null;function Tu(){return ha===null?ha=function(){return 268435456+Math.round(2147483648*Math.random())}():ha++,"0x"+ha.toString(16)}/**
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
 */const Nc="RestConnection",FR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===za?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=Tu(),l=this.So(e,n.toUriEncodedString());X(Nc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(X(Nc,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ws(Nc,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=FR[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class BR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const vt="WebChannelConnection";class $R extends UR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Tu();return new Promise((o,l)=>{const c=new G_;c.setWithCredentials(!0),c.listenOnce(Q_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ea.NO_ERROR:const d=c.getResponseJson();X(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ea.TIMEOUT:X(vt,`RPC '${e}' ${i} timed out`),l(new Z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const p=c.getStatus();if(X(vt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const P=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(j)>=0?j:M.UNKNOWN}(y.status);l(new Z(P,y.message))}else l(new Z(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(M.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(vt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(vt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Tu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=X_(),l=J_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(vt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,y=!1;const P=new BR({Fo:D=>{y?X(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(X(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(vt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),O=(D,j,L)=>{D.listen(j,$=>{try{L($)}catch(q){setTimeout(()=>{throw q},0)}})};return O(p,Ni.EventType.OPEN,()=>{y||(X(vt,`RPC '${e}' stream ${s} transport opened.`),P.Qo())}),O(p,Ni.EventType.CLOSE,()=>{y||(y=!0,X(vt,`RPC '${e}' stream ${s} transport closed`),P.Ko())}),O(p,Ni.EventType.ERROR,D=>{y||(y=!0,Ws(vt,`RPC '${e}' stream ${s} transport errored:`,D),P.Ko(new Z(M.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ni.EventType.MESSAGE,D=>{var j;if(!y){const L=D.data[0];Ve(!!L);const $=L,q=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(q){X(vt,`RPC '${e}' stream ${s} received error:`,q);const ie=q.status;let we=function(w){const T=Ze[w];if(T!==void 0)return xy(T)}(ie),I=q.message;we===void 0&&(we=M.INTERNAL,I="Unknown error status: "+ie+" with message "+q.message),y=!0,P.Ko(new Z(we,I)),p.close()}else X(vt,`RPC '${e}' stream ${s} received:`,L),P.Uo(L)}}),O(l,Y_.STAT_EVENT,D=>{D.stat===hu.PROXY?X(vt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===hu.NOPROXY&&X(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Lc(){return typeof document<"u"?document:null}/**
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
 */function Nl(t){return new zS(t,!0)}/**
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
 */class zy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Kp="PersistentStream";class Wy{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new zy(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jR extends Wy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=GS(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Rn(o.readTime):pe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=mu(c)?{documents:JS(i,c)}:{query:XS(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Vy(i,o.resumeToken);const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Qa(i,o.snapshotVersion.toTimestamp());const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=eR(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.I_(n)}}class HR extends Wy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=YS(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Eu(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QS(this.serializer,r))};this.I_(n)}}/**
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
 */class qR{}class zR extends qR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,wu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(M.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,wu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(M.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class WR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Jn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const as="RemoteStore";class KR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{fs(this)&&(X(as,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.W_.add(4),await Oo(u),u.j_.set("Unknown"),u.W_.delete(4),await Ll(u)}(this))})}),this.j_=new WR(r,s)}}async function Ll(t){if(fs(t))for(const e of t.G_)await e(!0)}async function Oo(t){for(const e of t.G_)await e(!1)}function Ky(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),kh(n)?Ph(n):ui(n).c_()&&Rh(n,e))}function Sh(t,e){const n=me(t),r=ui(n);n.U_.delete(e),r.c_()&&Gy(n,e),n.U_.size===0&&(r.c_()?r.P_():fs(n)&&n.j_.set("Unknown"))}function Rh(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ui(t).y_(e)}function Gy(t,e){t.H_.Ne(e),ui(t).w_(e)}function Ph(t){t.H_=new $S({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ui(t).start(),t.j_.B_()}function kh(t){return fs(t)&&!ui(t).u_()&&t.U_.size>0}function fs(t){return me(t).W_.size===0}function Qy(t){t.H_=void 0}async function GR(t){t.j_.set("Online")}async function QR(t){t.U_.forEach((e,n)=>{Rh(t,e)})}async function YR(t,e){Qy(t),kh(t)?(t.j_.q_(e),Ph(t)):t.j_.set("Unknown")}async function JR(t,e,n){if(t.j_.set("Online"),e instanceof Dy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.U_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ja(t,r)}else if(e instanceof Aa?t.H_.We(e):e instanceof Oy?t.H_.Ze(e):t.H_.je(e),!n.isEqual(pe.min()))try{const r=await qy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.U_.get(u);d&&i.U_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.U_.get(c);if(!d)return;i.U_.set(c,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),Gy(i,c);const p=new gr(d.target,c,u,d.sequenceNumber);Rh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(as,"Failed to raise snapshot:",r),await Ja(t,r)}}async function Ja(t,e,n){if(!li(e))throw e;t.W_.add(1),await Oo(t),t.j_.set("Offline"),n||(n=()=>qy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(as,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ll(t)})}function Yy(t,e){return e().catch(n=>Ja(t,n,e))}async function Ml(t){const e=me(t),n=xr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:fh;for(;XR(e);)try{const s=await DR(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,ZR(e,s)}catch(s){await Ja(e,s)}Jy(e)&&Xy(e)}function XR(t){return fs(t)&&t.K_.length<10}function ZR(t,e){t.K_.push(e);const n=xr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Jy(t){return fs(t)&&!xr(t).u_()&&t.K_.length>0}function Xy(t){xr(t).start()}async function eP(t){xr(t).C_()}async function tP(t){const e=xr(t);for(const n of t.K_)e.S_(n.mutations)}async function nP(t,e,n){const r=t.K_.shift(),s=vh.from(r,e,n);await Yy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ml(t)}async function rP(t,e){e&&xr(t).b_&&await async function(r,s){if(function(o){return FS(o)&&o!==M.ABORTED}(s.code)){const i=r.K_.shift();xr(r).h_(),await Yy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ml(r)}}(t,e),Jy(t)&&Xy(t)}async function Gp(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),X(as,"RemoteStore received new credentials");const r=fs(n);n.W_.add(3),await Oo(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ll(n)}async function sP(t,e){const n=me(t);e?(n.W_.delete(2),await Ll(n)):e||(n.W_.add(2),await Oo(n),n.j_.set("Unknown"))}function ui(t){return t.J_||(t.J_=function(n,r,s){const i=me(n);return i.M_(),new jR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:GR.bind(null,t),No:QR.bind(null,t),Lo:YR.bind(null,t),p_:JR.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),kh(t)?Ph(t):t.j_.set("Unknown")):(await t.J_.stop(),Qy(t))})),t.J_}function xr(t){return t.Y_||(t.Y_=function(n,r,s){const i=me(n);return i.M_(),new HR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:eP.bind(null,t),Lo:rP.bind(null,t),D_:tP.bind(null,t),v_:nP.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Ml(t)):(await t.Y_.stop(),t.K_.length>0&&(X(as,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class xh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new xh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oh(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),li(t))return new Z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Li(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qp{constructor(){this.Z_=new Ke(re.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Js(e,n,Us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class iP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class oP{constructor(){this.queries=Yp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Yp(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Z(M.ABORTED,"Firestore shutting down"))}}function Yp(){return new ds(t=>yy(t),kl)}async function Zy(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new iP,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Oh(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Dh(n)}async function ew(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aP(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Dh(n)}function lP(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Dh(t){t.ia.forEach(e=>{e.next()})}var Iu,Jp;(Jp=Iu||(Iu={}))._a="default",Jp.Cache="cache";class tw{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Iu.Cache}}/**
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
 */class nw{constructor(e){this.key=e}}class rw{constructor(e){this.key=e}}class cP{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=be(),this.mutatedKeys=be(),this.ya=wy(e),this.wa=new Us(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new Qp,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=xl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?P!==O&&(r.track({type:3,doc:y}),D=!0):this.va(m,y)||(r.track({type:2,doc:y}),D=!0,(c&&this.ya(y,c)>0||u&&this.ya(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(y?(o=o.add(y),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(y,P){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return O(y)-O(P)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Js(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Qp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=be(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new rw(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new nw(r))}),n}Oa(e){this.fa=e.gs,this.pa=be();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Js.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Vh="SyncEngine";class uP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hP{constructor(e){this.key=e,this.Ba=!1}}class dP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ds(l=>yy(l),kl),this.qa=new Map,this.Qa=new Set,this.$a=new Ke(re.comparator),this.Ka=new Map,this.Ua=new Th,this.Wa={},this.Ga=new Map,this.za=Ys.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function fP(t,e,n=!0){const r=cw(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await sw(r,e,n,!0),s}async function pP(t,e){const n=cw(t);await sw(n,e,!0,!1)}async function sw(t,e,n,r){const s=await VR(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await mP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ky(t.remoteStore,s),l}async function mP(t,e,n,r,s){t.Ha=(p,m,y)=>async function(O,D,j,L){let $=D.view.Sa(j);$.ls&&($=await Hp(O.localStore,D.query,!1).then(({documents:I})=>D.view.Sa(I,$)));const q=L&&L.targetChanges.get(D.targetId),ie=L&&L.targetMismatches.get(D.targetId)!=null,we=D.view.applyChanges($,O.isPrimaryClient,q,ie);return Zp(O,D.targetId,we.Ma),we.snapshot}(t,p,m,y);const i=await Hp(t.localStore,e,!0),o=new cP(e,i.gs),l=o.Sa(i.documents),c=xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Zp(t,n,u.Ma);const d=new uP(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function gP(t,e,n){const r=me(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!kl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Sh(r.remoteStore,s.targetId),Au(r,s.targetId)}).catch(ai)):(Au(r,s.targetId),await bu(r.localStore,s.targetId,!0))}async function _P(t,e){const n=me(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sh(n.remoteStore,r.targetId))}async function yP(t,e,n){const r=AP(t);try{const s=await function(o,l){const c=me(o),u=nt.now(),d=l.reduce((y,P)=>y.add(P.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=Xn(),O=be();return c.ds.getEntries(y,d).next(D=>{P=D,P.forEach((j,L)=>{L.isValidDocument()||(O=O.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,P)).next(D=>{p=D;const j=[];for(const L of l){const $=DS(L,p.get(L.key).overlayedDocument);$!=null&&j.push(new Fr(L.key,$,uy($.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,j,l)}).next(D=>{m=D;const j=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(y,D.batchId,j)})}).then(()=>({batchId:m.batchId,changes:Ey(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ke(Te)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Do(r,s.changes),await Ml(r.remoteStore)}catch(s){const i=Oh(s,"Failed to persist write");n.reject(i)}}async function iw(t,e){const n=me(t);try{const r=await xR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ve(o.Ba):s.removedDocuments.size>0&&(Ve(o.Ba),o.Ba=!1))}),await Do(n,r,e)}catch(r){await ai(r)}}function Xp(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(u=!0)}),u&&Dh(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wP(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Ke(re.comparator);o=o.insert(i,At.newNoDocument(i,pe.min()));const l=be().add(i),c=new Vl(pe.min(),new Map,new Ke(Te),o,l);await iw(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),Nh(r)}else await bu(r.localStore,e,!1).then(()=>Au(r,e,n)).catch(ai)}async function vP(t,e){const n=me(t),r=e.batch.batchId;try{const s=await kR(n.localStore,e);aw(n,r,null),ow(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Do(n,s)}catch(s){await ai(s)}}async function EP(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);aw(r,e,n),ow(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Do(r,s)}catch(s){await ai(s)}}function ow(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function aw(t,e,n){const r=me(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||lw(t,r)})}function lw(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Sh(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),Nh(t))}function Zp(t,e,n){for(const r of n)r instanceof nw?(t.Ua.addReference(r.key,e),bP(t,r)):r instanceof rw?(X(Vh,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||lw(t,r.key)):he()}function bP(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Vh,"New document in limbo: "+n),t.Qa.add(r),Nh(t))}function Nh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new re(He.fromString(e)),r=t.za.next();t.Ka.set(r,new hP(n)),t.$a=t.$a.insert(n,r),Ky(t.remoteStore,new gr(Sn(yh(n.path)),r,"TargetPurposeLimboResolution",Sl.ae))}}async function Do(t,e,n){const r=me(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ah.Yi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,m=>U.forEach(m.Hi,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>U.forEach(m.Ji,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!li(p))throw p;X(Ch,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.Ts.get(m),P=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(P);d.Ts=d.Ts.insert(m,O)}}}(r.localStore,i))}async function TP(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){X(Vh,"User change. New user:",e.toKey());const r=await Hy(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Z(M.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Do(n,r.Rs)}}function IP(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return be().add(r.key);{let s=be();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.ba)}return s}}function cw(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wP.bind(null,e),e.La.p_=aP.bind(null,e.eventManager),e.La.Ja=lP.bind(null,e.eventManager),e}function AP(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EP.bind(null,e),e}class Xa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return PR(this.persistence,new CR,e.initialUser,this.serializer)}Xa(e){return new jy(Ih.ri,this.serializer)}Za(e){return new LR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xa.provider={build:()=>new Xa};class CP extends Xa{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ve(this.persistence.referenceDelegate instanceof Ya);const r=this.persistence.referenceDelegate.garbageCollector;return new hR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new jy(r=>Ya.ri(r,n),this.serializer)}}class Cu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TP.bind(null,this.syncEngine),await sP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oP}()}createDatastore(e){const n=Nl(e.databaseInfo.databaseId),r=function(i){return new $R(i)}(e.databaseInfo);return function(i,o,l,c){return new zR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new KR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xp(this.syncEngine,n,0),function(){return Wp.D()?new Wp:new MR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new dP(s,i,o,l,c,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);X(as,"RemoteStore shutting down."),i.W_.add(5),await Oo(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cu.provider={build:()=>new Cu};/**
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
 */class uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Or="FirestoreClient";class SP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),X(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function em(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RP(t);X(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gp(e.remoteStore,s)),t._onlineComponents=e}async function RP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Or,"Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Xa)}}else X(Or,"Using default OfflineComponentProvider"),await Mc(t,new CP(void 0));return t._offlineComponents}async function hw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Or,"Using user provided OnlineComponentProvider"),await em(t,t._uninitializedComponentsProvider._online)):(X(Or,"Using default OnlineComponentProvider"),await em(t,new Cu))),t._onlineComponents}function PP(t){return hw(t).then(e=>e.syncEngine)}async function dw(t){const e=await hw(t),n=e.eventManager;return n.onListen=fP.bind(null,e.syncEngine),n.onUnlisten=gP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_P.bind(null,e.syncEngine),n}function kP(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new uw({next:m=>{d.su(),o.enqueueAndForget(()=>ew(i,p));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new Z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new Z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new tw(yh(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Zy(i,p)}(await dw(t),t.asyncQueue,e,n,r)),r.promise}function xP(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new uw({next:m=>{d.su(),o.enqueueAndForget(()=>ew(i,p)),m.fromCache&&c.source==="server"?u.reject(new Z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new tw(l,d,{includeMetadataChanges:!0,Ta:!0});return Zy(i,p)}(await dw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tm=new Map;/**
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
 */function pw(t,e,n){if(!n)throw new Z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OP(t,e,n,r){if(e===!0&&r===!0)throw new Z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nm(t){if(!re.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rm(t){if(re.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new Z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const mw="firestore.googleapis.com",sm=!0;class im{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mw,this.ssl=sm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:sm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$y;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cR)throw new Z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new im({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new im(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UC;switch(r.type){case"firstParty":return new HC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tm.get(n);r&&(X("ComponentProvider","Removing Datastore"),tm.delete(n),r.terminate())}(this),Promise.resolve()}}function DP(t,e,n,r={}){var s;const i=(t=On(t,Ul))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==mw&&i.host!==l&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!ns(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Et.MOCK_USER;else{u=ZT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Et(p)}t._authCredentials=new BC(new Z_(u,d))}}/**
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
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Cr extends ps{constructor(e,n,r){super(e,n,yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new re(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Xs(t,e,...n){if(t=ot(t),pw("collection","path",e),t instanceof Ul){const r=He.fromString(e,...n);return rm(r),new Cr(t,null,r)}{if(!(t instanceof Dt||t instanceof Cr))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return rm(r),new Cr(t.firestore,null,r)}}function an(t,e,...n){if(t=ot(t),arguments.length===1&&(e=ey.newId()),pw("doc","path",e),t instanceof Ul){const r=He.fromString(e,...n);return nm(r),new Dt(t,null,new re(r))}{if(!(t instanceof Dt||t instanceof Cr))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return nm(r),new Dt(t.firestore,t instanceof Cr?t.converter:null,new re(r))}}/**
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
 */const om="AsyncQueue";class am{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new zy(this,"async_queue_retry"),this.bu=()=>{const r=Lc();r&&X(om,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Kn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!li(e))throw e;X(om,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=xh.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class hi extends Ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new am,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new am(e),this._firestoreClient=void 0,await e}}}function VP(t,e){const n=typeof t=="object"?t:c_(),r=typeof t=="string"?t:za,s=nh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JT("firestore");i&&DP(s,...i)}return s}function Lh(t){if(t._terminated)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NP(t),t._firestoreClient}function NP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new rS(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new SP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(mt.fromBase64String(e))}catch(n){throw new Z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $l{constructor(e){this._methodName=e}}/**
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
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Fh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const LP=/^__.*__$/;class MP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class gw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Uh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Za(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(_w(this.Lu)&&LP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class FP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nl(e)}ju(e,n,r,s=!1){return new Uh({Lu:e,methodName:n,zu:r,path:pt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jl(t){const e=t._freezeSettings(),n=Nl(t._databaseId);return new FP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yw(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);$h("Data must be an object, but it was:",o,r);const l=ww(r,o);let c,u;if(i.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Su(e,p,n);if(!o.contains(m))throw new Z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ew(d,m)||d.push(m)}c=new Gt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new MP(new Bt(l),c,u)}class Hl extends $l{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}class Bh extends $l{_toFieldTransform(e){return new PS(e.path,new mo)}isEqual(e){return e instanceof Bh}}function UP(t,e,n,r){const s=t.ju(1,e,n);$h("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();Mr(r,(c,u)=>{const d=jh(e,c,n);u=ot(u);const p=s.Ku(d);if(u instanceof Hl)i.push(d);else{const m=Vo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Gt(i);return new gw(o,l,s.fieldTransforms)}function BP(t,e,n,r,s,i){const o=t.ju(1,e,n),l=[Su(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Su(e,i[m])),c.push(i[m+1]);const u=[],d=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!Ew(u,l[m])){const y=l[m];let P=c[m];P=ot(P);const O=o.Ku(y);if(P instanceof Hl)u.push(y);else{const D=Vo(P,O);D!=null&&(u.push(y),d.set(y,D))}}const p=new Gt(u);return new gw(d,p,o.fieldTransforms)}function $P(t,e,n,r=!1){return Vo(n,t.ju(r?4:3,e))}function Vo(t,e){if(vw(t=ot(t)))return $h("Unsupported field value:",e,t),ww(t,e);if(t instanceof $l)return function(r,s){if(!_w(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Vo(l,s.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Qa(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qa(s.serializer,i)}}if(r instanceof Mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zs)return{bytesValue:Vy(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fh)return function(o,l){return{mapValue:{fields:{[ly]:{stringValue:cy},[Wa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return wh(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Fl(r)}`)}(t,e)}function ww(t,e){const n={};return ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,s)=>{const i=Vo(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Mh||t instanceof Zs||t instanceof Dt||t instanceof $l||t instanceof Fh)}function $h(t,e,n){if(!vw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Fl(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Su(t,e,n){if((e=ot(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return jh(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const jP=new RegExp("[~\\*/\\[\\]]");function jh(t,e,n){if(e.search(jP)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(M.INVALID_ARGUMENT,l+t+c)}function Ew(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ql("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HP extends bw{data(){return super.data()}}function ql(t,e){return typeof e=="string"?jh(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}/**
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
 */function qP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hh{}class Tw extends Hh{}function qh(t,e,...n){let r=[];e instanceof Hh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof zh).length,l=i.filter(c=>c instanceof zl).length;if(o>1||o>0&&l>0)throw new Z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class zl extends Tw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zl(e,n,r)}_apply(e){const n=this._parse(e);return Aw(e._query,n),new ps(e.firestore,e.converter,gu(e._query,n))}_parse(e){const n=jl(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){cm(p,d);const P=[];for(const O of p)P.push(lm(c,i,O));m={arrayValue:{values:P}}}else m=lm(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||cm(p,d),m=$P(l,o,p,d==="in"||d==="not-in");return et.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Iw(t,e,n){const r=e,s=ql("where",t);return zl._create(s,r,n)}class zh extends Hh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Aw(o,c),o=gu(o,c)}(e._query,n),new ps(e.firestore,e.converter,gu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wh extends Tw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new po(i,o)}(e._query,this._field,this._direction);return new ps(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function zP(t,e="asc"){const n=e,r=ql("orderBy",t);return Wh._create(r,n)}function lm(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new Z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_y(e)&&n.indexOf("/")!==-1)throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!re.isDocumentKey(r))throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ip(t,new re(r))}if(n instanceof Dt)return Ip(t,n._key);throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fl(n)}.`)}function cm(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Aw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WP{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Fh(i)}convertGeoPoint(e){return new Mh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ve(By(r));const s=new ho(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Cw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sw extends bw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ql("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ca extends Sw{data(e={}){return super.data(e)}}class KP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ca(this._firestore,this._userDataWriter,r.key,r,new Fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:GP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function qn(t){t=On(t,Dt);const e=On(t.firestore,hi);return kP(Lh(e),t._key).then(n=>YP(e,t,n))}class Rw extends WP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function Wl(t){t=On(t,ps);const e=On(t.firestore,hi),n=Lh(e),r=new Rw(e);return qP(t._query),xP(n,t._query).then(s=>new KP(e,r,t,s))}function ks(t,e,n){t=On(t,Dt);const r=On(t.firestore,hi),s=Cw(t.converter,e,n);return Kh(r,[yw(jl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function QP(t,e,n,...r){t=On(t,Dt);const s=On(t.firestore,hi),i=jl(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof Bl?BP(i,"updateDoc",t._key,e,n,r):UP(i,"updateDoc",t._key,e),Kh(s,[o.toMutation(t._key,pn.exists(!0))])}function Pw(t,e){const n=On(t.firestore,hi),r=an(t),s=Cw(t.converter,e);return Kh(n,[yw(jl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function Kh(t,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>yP(await PP(r),s,i)),i.promise}(Lh(t),e)}function YP(t,e,n){const r=n.docs.get(e._key),s=new Rw(t);return new Sw(t,s,e._key,r,new Fi(n.hasPendingWrites,n.fromCache),e.converter)}function JP(){return new Bh("serverTimestamp")}(function(e,n=!0){(function(s){oi=s})(si),zs(new rs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new hi(new $C(r.getProvider("auth-internal")),new qC(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ir(fp,pp,e),Ir(fp,pp,"esm2017")})();const XP={apiKey:"AIzaSyC8WspggAJ7NYeCils7NGKk-BDfKw3lzUU",authDomain:"brobank-d0269.firebaseapp.com",projectId:"brobank-d0269",storageBucket:"brobank-d0269.appspot.com",messagingSenderId:"332534888385",appId:"1:332534888385:web:9f0f879472df456d36a140"},kw=l_(XP),sn=MC(kw),Vt=VP(kw);Il(sn,t=>{t?console.log("User angemeldet:",t.uid):console.log("Kein Nutzer angemeldet.")});const Gh=Zu("auth",()=>{const t=Se(null);us(()=>{Il(sn,n=>{t.value=n})});async function e(){await CA(sn),t.value=null}return{user:t,logout:e}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof document<"u";function xw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xw(t.default)}const Oe=Object.assign;function Fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=_n(s)?s.map(t):t(s)}return n}const Ji=()=>{},_n=Array.isArray,Ow=/#/g,e2=/&/g,t2=/\//g,n2=/=/g,r2=/\?/g,Dw=/\+/g,s2=/%5B/g,i2=/%5D/g,Vw=/%5E/g,o2=/%60/g,Nw=/%7B/g,a2=/%7C/g,Lw=/%7D/g,l2=/%20/g;function Qh(t){return encodeURI(""+t).replace(a2,"|").replace(s2,"[").replace(i2,"]")}function c2(t){return Qh(t).replace(Nw,"{").replace(Lw,"}").replace(Vw,"^")}function Ru(t){return Qh(t).replace(Dw,"%2B").replace(l2,"+").replace(Ow,"%23").replace(e2,"%26").replace(o2,"`").replace(Nw,"{").replace(Lw,"}").replace(Vw,"^")}function u2(t){return Ru(t).replace(n2,"%3D")}function h2(t){return Qh(t).replace(Ow,"%23").replace(r2,"%3F")}function d2(t){return t==null?"":h2(t).replace(t2,"%2F")}function yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const f2=/\/$/,p2=t=>t.replace(f2,"");function Uc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=y2(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:yo(o)}}function m2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function um(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function g2(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ei(e.matched[r],n.matched[s])&&Mw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_2(t[n],e[n]))return!1;return!0}function _2(t,e){return _n(t)?hm(t,e):_n(e)?hm(e,t):t===e}function hm(t,e){return _n(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function y2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var wo;(function(t){t.pop="pop",t.push="push"})(wo||(wo={}));var Xi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xi||(Xi={}));function w2(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),p2(t)}const v2=/^[^#]+#/;function E2(t,e){return t.replace(v2,"#")+e}function b2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kl=()=>({left:window.scrollX,top:window.scrollY});function T2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=b2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dm(t,e){return(history.state?history.state.position-e:-1)+t}const Pu=new Map;function I2(t,e){Pu.set(t,e)}function A2(t){const e=Pu.get(t);return Pu.delete(t),e}let C2=()=>location.protocol+"//"+location.host;function Fw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),um(c,"")}return um(n,t)+r+s}function S2(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Fw(t,location),P=n.value,O=e.value;let D=0;if(m){if(n.value=y,e.value=m,o&&o===P){o=null;return}D=O?m.position-O.position:0}else r(y);s.forEach(j=>{j(n.value,P,{delta:D,type:wo.pop,direction:D?D>0?Xi.forward:Xi.back:Xi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Kl()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function fm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kl():null}}function R2(t){const{history:e,location:n}=window,r={value:Fw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:C2()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(c,u){const d=Oe({},e.state,fm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Oe({},s.value,e.state,{forward:c,scroll:Kl()});i(d.current,d,!0);const p=Oe({},fm(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function P2(t){t=w2(t);const e=R2(t),n=S2(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:E2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function k2(t){return typeof t=="string"||t&&typeof t=="object"}function Uw(t){return typeof t=="string"||typeof t=="symbol"}const Bw=Symbol("");var pm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pm||(pm={}));function ti(t,e){return Oe(new Error,{type:t,[Bw]:!0},e)}function Mn(t,e){return t instanceof Error&&Bw in t&&(e==null||!!(t.type&e))}const mm="[^/]+?",x2={sensitive:!1,strict:!1,start:!0,end:!0},O2=/[.+*?^${}()[\]/\\]/g;function D2(t,e){const n=Oe({},x2,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(O2,"\\$&"),y+=40;else if(m.type===1){const{value:P,repeatable:O,optional:D,regexp:j}=m;i.push({name:P,repeatable:O,optional:D});const L=j||mm;if(L!==mm){y+=10;try{new RegExp(`(${L})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${P}" (${L}): `+q.message)}}let $=O?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||($=D&&u.length<2?`(?:/${$})`:"/"+$),D&&($+="?"),s+=$,y+=20,D&&(y+=-8),O&&(y+=-20),L===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:O,optional:D}=y,j=P in u?u[P]:"";if(_n(j)&&!O)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const L=_n(j)?j.join("/"):j;if(!L)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function V2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $w(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=V2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gm(r))return 1;if(gm(s))return-1}return s.length-r.length}function gm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const N2={type:0,value:""},L2=/[a-zA-Z0-9_]/;function M2(t){if(!t)return[[]];if(t==="/")return[[N2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:L2.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function F2(t,e,n){const r=D2(M2(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function U2(t,e){const n=[],r=new Map;e=vm({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,O=ym(p);O.aliasOf=y&&y.record;const D=vm(e,p),j=[O];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of q)j.push(ym(Oe({},O,{components:y?y.record.components:O.components,path:ie,aliasOf:y?y.record:O})))}let L,$;for(const q of j){const{path:ie}=q;if(m&&ie[0]!=="/"){const we=m.record.path,I=we[we.length-1]==="/"?"":"/";q.path=m.record.path+(ie&&I+ie)}if(L=F2(q,m,D),y?y.alias.push(L):($=$||L,$!==L&&$.alias.push(L),P&&p.name&&!wm(L)&&o(p.name)),jw(L)&&c(L),O.children){const we=O.children;for(let I=0;I<we.length;I++)i(we[I],L,y&&y.children[I])}y=y||L}return $?()=>{o($)}:Ji}function o(p){if(Uw(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=j2(p,n);n.splice(m,0,p),p.record.name&&!wm(p)&&r.set(p.record.name,p)}function u(p,m){let y,P={},O,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ti(1,{location:p});D=y.record.name,P=Oe(_m(m.params,y.keys.filter($=>!$.optional).concat(y.parent?y.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&_m(p.params,y.keys.map($=>$.name))),O=y.stringify(P)}else if(p.path!=null)O=p.path,y=n.find($=>$.re.test(O)),y&&(P=y.parse(O),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!y)throw ti(1,{location:p,currentLocation:m});D=y.record.name,P=Oe({},m.params,p.params),O=y.stringify(P)}const j=[];let L=y;for(;L;)j.unshift(L.record),L=L.parent;return{name:D,path:O,params:P,matched:j,meta:$2(j)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function _m(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ym(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:B2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function B2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $2(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function vm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function j2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$w(t,e[i])<0?r=i:n=i+1}const s=H2(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function H2(t){let e=t;for(;e=e.parent;)if(jw(e)&&$w(t,e)===0)return e}function jw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function q2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Dw," "),o=i.indexOf("="),l=yo(o<0?i:i.slice(0,o)),c=o<0?null:yo(i.slice(o+1));if(l in e){let u=e[l];_n(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Em(t){let e="";for(let n in t){const r=t[n];if(n=u2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(_n(r)?r.map(i=>i&&Ru(i)):[r&&Ru(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function z2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=_n(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const W2=Symbol(""),bm=Symbol(""),Gl=Symbol(""),Yh=Symbol(""),ku=Symbol("");function xi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ti(4,{from:n,to:e})):m instanceof Error?c(m):k2(m)?c(ti(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Bc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(xw(c)){const d=(c.__vccOpts||c)[e];d&&i.push(hr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=ZP(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&hr(y,n,r,o,l,s)()}))}}return i}function Tm(t){const e=rn(Gl),n=rn(Yh),r=it(()=>{const c=Ds(t.to);return e.resolve(c)}),s=it(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ei.bind(null,d));if(m>-1)return m;const y=Im(c[u-2]);return u>1&&Im(d)===y&&p[p.length-1].path!==y?p.findIndex(ei.bind(null,c[u-2])):m}),i=it(()=>s.value>-1&&J2(n.params,r.value.params)),o=it(()=>s.value>-1&&s.value===n.matched.length-1&&Mw(n.params,r.value.params));function l(c={}){if(Y2(c)){const u=e[Ds(t.replace)?"replace":"push"](Ds(t.to)).catch(Ji);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:it(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function K2(t){return t.length===1?t[0]:t}const G2=vg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tm,setup(t,{slots:e}){const n=Eo(Tm(t)),{options:r}=rn(Gl),s=it(()=>({[Am(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Am(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&K2(e.default(n));return t.custom?i:Wg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Q2=G2;function Y2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function J2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!_n(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Im(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Am=(t,e,n)=>t??e??n,X2=vg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rn(ku),s=it(()=>t.route||r.value),i=rn(bm,0),o=it(()=>{let u=Ds(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=it(()=>s.value.matched[o.value]);pa(bm,it(()=>o.value+1)),pa(W2,l),pa(ku,s);const c=Se();return Xr(()=>[c.value,l.value,t.name],([u,d,p],[m,y,P])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!ei(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Cm(n.default,{Component:m,route:u});const y=p.props[d],P=y?y===!0?u.params:typeof y=="function"?y(u):y:null,D=Wg(m,Oe({},P,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Cm(n.default,{Component:D,route:u})||D}}});function Cm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Z2=X2;function ek(t){const e=U2(t.routes,t),n=t.parseQuery||q2,r=t.stringifyQuery||Em,s=t.history,i=xi(),o=xi(),l=xi(),c=HE(ar);let u=ar;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Fc.bind(null,V=>""+V),p=Fc.bind(null,d2),m=Fc.bind(null,yo);function y(V,J){let Q,te;return Uw(V)?(Q=e.getRecordMatcher(V),te=J):te=V,e.addRoute(te,Q)}function P(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function j(V,J){if(J=Oe({},J||c.value),typeof V=="string"){const S=Uc(n,V,J.path),N=e.resolve({path:S.path},J),B=s.createHref(S.fullPath);return Oe(S,N,{params:m(N.params),hash:yo(S.hash),redirectedFrom:void 0,href:B})}let Q;if(V.path!=null)Q=Oe({},V,{path:Uc(n,V.path,J.path).path});else{const S=Oe({},V.params);for(const N in S)S[N]==null&&delete S[N];Q=Oe({},V,{params:p(S)}),J.params=p(J.params)}const te=e.resolve(Q,J),Re=V.hash||"";te.params=d(m(te.params));const v=m2(r,Oe({},V,{hash:c2(Re),path:te.path})),b=s.createHref(v);return Oe({fullPath:v,hash:Re,query:r===Em?z2(V.query):V.query||{}},te,{redirectedFrom:void 0,href:b})}function L(V){return typeof V=="string"?Uc(n,V,c.value.path):Oe({},V)}function $(V,J){if(u!==V)return ti(8,{from:J,to:V})}function q(V){return I(V)}function ie(V){return q(Oe(L(V),{replace:!0}))}function we(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(V):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=L(te):{path:te},te.params={}),Oe({query:V.query,hash:V.hash,params:te.path!=null?{}:V.params},te)}}function I(V,J){const Q=u=j(V),te=c.value,Re=V.state,v=V.force,b=V.replace===!0,S=we(Q);if(S)return I(Oe(L(S),{state:typeof S=="object"?Oe({},Re,S.state):Re,force:v,replace:b}),J||Q);const N=Q;N.redirectedFrom=J;let B;return!v&&g2(r,te,Q)&&(B=ti(16,{to:N,from:te}),Xt(te,te,!0,!1)),(B?Promise.resolve(B):T(N,te)).catch(F=>Mn(F)?Mn(F,2)?F:un(F):ve(F,N,te)).then(F=>{if(F){if(Mn(F,2))return I(Oe({replace:b},L(F.to),{state:typeof F.to=="object"?Oe({},Re,F.to.state):Re,force:v}),J||N)}else F=C(N,te,!0,b,Re);return A(N,te,F),F})}function _(V,J){const Q=$(V,J);return Q?Promise.reject(Q):Promise.resolve()}function w(V){const J=tr.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function T(V,J){let Q;const[te,Re,v]=tk(V,J);Q=Bc(te.reverse(),"beforeRouteLeave",V,J);for(const S of te)S.leaveGuards.forEach(N=>{Q.push(hr(N,V,J))});const b=_.bind(null,V,J);return Q.push(b),Ft(Q).then(()=>{Q=[];for(const S of i.list())Q.push(hr(S,V,J));return Q.push(b),Ft(Q)}).then(()=>{Q=Bc(Re,"beforeRouteUpdate",V,J);for(const S of Re)S.updateGuards.forEach(N=>{Q.push(hr(N,V,J))});return Q.push(b),Ft(Q)}).then(()=>{Q=[];for(const S of v)if(S.beforeEnter)if(_n(S.beforeEnter))for(const N of S.beforeEnter)Q.push(hr(N,V,J));else Q.push(hr(S.beforeEnter,V,J));return Q.push(b),Ft(Q)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),Q=Bc(v,"beforeRouteEnter",V,J,w),Q.push(b),Ft(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(hr(S,V,J));return Q.push(b),Ft(Q)}).catch(S=>Mn(S,8)?S:Promise.reject(S))}function A(V,J,Q){l.list().forEach(te=>w(()=>te(V,J,Q)))}function C(V,J,Q,te,Re){const v=$(V,J);if(v)return v;const b=J===ar,S=Rs?history.state:{};Q&&(te||b?s.replace(V.fullPath,Oe({scroll:b&&S&&S.scroll},Re)):s.push(V.fullPath,Re)),c.value=V,Xt(V,J,Q,b),un()}let E;function lt(){E||(E=s.listen((V,J,Q)=>{if(!yn.listening)return;const te=j(V),Re=we(te);if(Re){I(Oe(Re,{replace:!0,force:!0}),te).catch(Ji);return}u=te;const v=c.value;Rs&&I2(dm(v.fullPath,Q.delta),Kl()),T(te,v).catch(b=>Mn(b,12)?b:Mn(b,2)?(I(Oe(L(b.to),{force:!0}),te).then(S=>{Mn(S,20)&&!Q.delta&&Q.type===wo.pop&&s.go(-1,!1)}).catch(Ji),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(b,te,v))).then(b=>{b=b||C(te,v,!1),b&&(Q.delta&&!Mn(b,8)?s.go(-Q.delta,!1):Q.type===wo.pop&&Mn(b,20)&&s.go(-1,!1)),A(te,v,b)}).catch(Ji)}))}let Mt=xi(),Me=xi(),de;function ve(V,J,Q){un(V);const te=Me.list();return te.length?te.forEach(Re=>Re(V,J,Q)):console.error(V),Promise.reject(V)}function Ht(){return de&&c.value!==ar?Promise.resolve():new Promise((V,J)=>{Mt.add([V,J])})}function un(V){return de||(de=!V,lt(),Mt.list().forEach(([J,Q])=>V?Q(V):J()),Mt.reset()),V}function Xt(V,J,Q,te){const{scrollBehavior:Re}=t;if(!Rs||!Re)return Promise.resolve();const v=!Q&&A2(dm(V.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Wu().then(()=>Re(V,J,v)).then(b=>b&&T2(b)).catch(b=>ve(b,V,J))}const ze=V=>s.go(V);let We;const tr=new Set,yn={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:O,resolve:j,options:t,push:q,replace:ie,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Me.add,isReady:Ht,install(V){const J=this;V.component("RouterLink",Q2),V.component("RouterView",Z2),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Ds(c)}),Rs&&!We&&c.value===ar&&(We=!0,q(s.location).catch(Re=>{}));const Q={};for(const Re in ar)Object.defineProperty(Q,Re,{get:()=>c.value[Re],enumerable:!0});V.provide(Gl,J),V.provide(Yh,hg(Q)),V.provide(ku,c);const te=V.unmount;tr.add(V),V.unmount=function(){tr.delete(V),tr.size<1&&(u=ar,E&&E(),E=null,c.value=ar,We=!1,de=!1),te()}}};function Ft(V){return V.reduce((J,Q)=>J.then(()=>w(Q)),Promise.resolve())}return yn}function tk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ei(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ei(u,c))||s.push(c))}return[n,r,s]}function Hw(){return rn(Gl)}function Ql(t){return rn(Yh)}/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function qw(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function nk(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Sm(t,e){return t.get(qw(t,e))}function rk(t,e,n){nk(t,e),e.set(t,n)}function sk(t,e,n){return t.set(qw(t,e),n),n}const ik=100,se={},ok=()=>{se.previousActiveElement instanceof HTMLElement?(se.previousActiveElement.focus(),se.previousActiveElement=null):document.body&&document.body.focus()},ak=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;se.restoreFocusTimeout=setTimeout(()=>{ok(),e()},ik),window.scrollTo(n,r)}),zw="swal2-",lk=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],x=lk.reduce((t,e)=>(t[e]=zw+e,t),{}),ck=["success","warning","info","question","error"],el=ck.reduce((t,e)=>(t[e]=zw+e,t),{}),Ww="SweetAlert2:",Jh=t=>t.charAt(0).toUpperCase()+t.slice(1),Nt=t=>{console.warn(`${Ww} ${typeof t=="object"?t.join(" "):t}`)},ms=t=>{console.error(`${Ww} ${t}`)},Rm=[],uk=t=>{Rm.includes(t)||(Rm.push(t),Nt(t))},Kw=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uk(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Yl=t=>typeof t=="function"?t():t,Xh=t=>t&&typeof t.toPromise=="function",No=t=>Xh(t)?t.toPromise():Promise.resolve(t),Zh=t=>t&&Promise.resolve(t)===t,Lt=()=>document.body.querySelector(`.${x.container}`),Lo=t=>{const e=Lt();return e?e.querySelector(t):null},Yt=t=>Lo(`.${t}`),xe=()=>Yt(x.popup),di=()=>Yt(x.icon),hk=()=>Yt(x["icon-content"]),Gw=()=>Yt(x.title),ed=()=>Yt(x["html-container"]),Qw=()=>Yt(x.image),td=()=>Yt(x["progress-steps"]),Jl=()=>Yt(x["validation-message"]),Dn=()=>Lo(`.${x.actions} .${x.confirm}`),fi=()=>Lo(`.${x.actions} .${x.cancel}`),gs=()=>Lo(`.${x.actions} .${x.deny}`),dk=()=>Yt(x["input-label"]),pi=()=>Lo(`.${x.loader}`),Mo=()=>Yt(x.actions),Yw=()=>Yt(x.footer),Xl=()=>Yt(x["timer-progress-bar"]),nd=()=>Yt(x.close),fk=`
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
`,rd=()=>{const t=xe();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=t.querySelectorAll(fk),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>jt(i))},sd=()=>Gn(document.body,x.shown)&&!Gn(document.body,x["toast-shown"])&&!Gn(document.body,x["no-backdrop"]),Zl=()=>{const t=xe();return t?Gn(t,x.toast):!1},pk=()=>{const t=xe();return t?t.hasAttribute("data-loading"):!1},Jt=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Gn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},mk=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(x).includes(n)&&!Object.values(el).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Qt=(t,e,n)=>{if(mk(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){Nt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}Ce(t,r)}},ec=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${x.popup} > .${x[e]}`);case"checkbox":return t.querySelector(`.${x.popup} > .${x.checkbox} input`);case"radio":return t.querySelector(`.${x.popup} > .${x.radio} input:checked`)||t.querySelector(`.${x.popup} > .${x.radio} input:first-child`);case"range":return t.querySelector(`.${x.popup} > .${x.range} input`);default:return t.querySelector(`.${x.popup} > .${x.input}`)}},Jw=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Xw=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},Ce=(t,e)=>{Xw(t,e,!0)},ln=(t,e)=>{Xw(t,e,!1)},_r=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&Gn(s,e))return s}},Zr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},at=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},Rt=t=>{t&&(t.style.display="none")},id=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{Fo(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Pm=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},Fo=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?at(t,n):Rt(t)},jt=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),gk=()=>!jt(Dn())&&!jt(gs())&&!jt(fi()),km=t=>t.scrollHeight>t.clientHeight,Zw=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},od=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Xl();n&&jt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},_k=()=>{const t=Xl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},yk=()=>typeof window>"u"||typeof document>"u",wk=`
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
`.replace(/(^|\n)\s*/g,""),vk=()=>{const t=Lt();return t?(t.remove(),ln([document.documentElement,document.body],[x["no-backdrop"],x["toast-shown"],x["has-column"]]),!0):!1},zr=()=>{se.currentInstance.resetValidationMessage()},Ek=()=>{const t=xe(),e=_r(t,x.input),n=_r(t,x.file),r=t.querySelector(`.${x.range} input`),s=t.querySelector(`.${x.range} output`),i=_r(t,x.select),o=t.querySelector(`.${x.checkbox} input`),l=_r(t,x.textarea);e.oninput=zr,n.onchange=zr,i.onchange=zr,o.onchange=zr,l.oninput=zr,r.oninput=()=>{zr(),s.value=r.value},r.onchange=()=>{zr(),s.value=r.value}},bk=t=>typeof t=="string"?document.querySelector(t):t,Tk=t=>{const e=xe();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Ik=t=>{window.getComputedStyle(t).direction==="rtl"&&Ce(Lt(),x.rtl)},Ak=t=>{const e=vk();if(yk()){ms("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=x.container,e&&Ce(n,x["no-transition"]),Jt(n,wk),n.dataset.swal2Theme=t.theme;const r=bk(t.target);r.appendChild(n),Tk(t),Ik(r),Ek()},ad=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Ck(t,e):t&&Jt(e,t)},Ck=(t,e)=>{t.jquery?Sk(e,t):Jt(e,t.toString())},Sk=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Rk=(t,e)=>{const n=Mo(),r=pi();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Rt(n):at(n),Qt(n,e,"actions"),Pk(n,r,e),Jt(r,e.loaderHtml||""),Qt(r,e,"loader"))};function Pk(t,e,n){const r=Dn(),s=gs(),i=fi();!r||!s||!i||($c(r,"confirm",n),$c(s,"deny",n),$c(i,"cancel",n),kk(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function kk(t,e,n,r){if(!r.buttonsStyling){ln([t,e,n],x.styled);return}Ce([t,e,n],x.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,Ce(t,x["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,Ce(e,x["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Ce(n,x["default-outline"]))}function $c(t,e,n){const r=Jh(e);Fo(t,n[`show${r}Button`],"inline-block"),Jt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=x[e],Qt(t,n,`${e}Button`)}const xk=(t,e)=>{const n=nd();n&&(Jt(n,e.closeButtonHtml||""),Qt(n,e,"closeButton"),Fo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Ok=(t,e)=>{const n=Lt();n&&(Dk(n,e.backdrop),Vk(n,e.position),Nk(n,e.grow),Qt(n,e,"container"))};function Dk(t,e){typeof e=="string"?t.style.background=e:e||Ce([document.documentElement,document.body],x["no-backdrop"])}function Vk(t,e){e&&(e in x?Ce(t,x[e]):(Nt('The "position" parameter is not valid, defaulting to "center"'),Ce(t,x.center)))}function Nk(t,e){e&&Ce(t,x[`grow-${e}`])}var $e={innerParams:new WeakMap,domCache:new WeakMap};const Lk=["input","file","range","select","radio","checkbox","textarea"],Mk=(t,e)=>{const n=xe();if(!n)return;const r=$e.innerParams.get(t),s=!r||e.input!==r.input;Lk.forEach(i=>{const o=_r(n,x[i]);o&&(Bk(i,e.inputAttributes),o.className=x[i],s&&Rt(o))}),e.input&&(s&&Fk(e),$k(e))},Fk=t=>{if(!t.input)return;if(!Qe[t.input]){ms(`Unexpected type of input! Expected ${Object.keys(Qe).join(" | ")}, got "${t.input}"`);return}const e=ev(t.input);if(!e)return;const n=Qe[t.input](e,t);at(e),t.inputAutoFocus&&setTimeout(()=>{Jw(n)})},Uk=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Bk=(t,e)=>{const n=xe();if(!n)return;const r=ec(n,t);if(r){Uk(r);for(const s in e)r.setAttribute(s,e[s])}},$k=t=>{if(!t.input)return;const e=ev(t.input);e&&Qt(e,t,"input")},ld=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Uo=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=x["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&Ce(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},ev=t=>{const e=xe();if(e)return _r(e,x[t]||x.input)},tl=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Zh(e)||Nt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=Qe.search=Qe.date=Qe["datetime-local"]=Qe.time=Qe.week=Qe.month=(t,e)=>(tl(t,e.inputValue),Uo(t,t,e),ld(t,e),t.type=e.input,t);Qe.file=(t,e)=>(Uo(t,t,e),ld(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return tl(n,e.inputValue),n.type=e.input,tl(r,e.inputValue),Uo(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Jt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Uo(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=ec(xe(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return Jt(r,e.inputPlaceholder||e.inputLabel),n};Qe.textarea=(t,e)=>{tl(t,e.inputValue),ld(t,e),Uo(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(xe()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?xe().style.width=`${i}px`:Zr(xe(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const jk=(t,e)=>{const n=ed();n&&(id(n),Qt(n,e,"htmlContainer"),e.html?(ad(e.html,n),at(n,"block")):e.text?(n.textContent=e.text,at(n,"block")):Rt(n),Mk(t,e))},Hk=(t,e)=>{const n=Yw();n&&(id(n),Fo(n,e.footer,"block"),e.footer&&ad(e.footer,n),Qt(n,e,"footer"))},qk=(t,e)=>{const n=$e.innerParams.get(t),r=di();if(!r)return;if(n&&e.icon===n.icon){Om(r,e),xm(r,e);return}if(!e.icon&&!e.iconHtml){Rt(r);return}if(e.icon&&Object.keys(el).indexOf(e.icon)===-1){ms(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Rt(r);return}at(r),Om(r,e),xm(r,e),Ce(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",tv)},xm=(t,e)=>{for(const[n,r]of Object.entries(el))e.icon!==n&&ln(t,r);Ce(t,e.icon&&el[e.icon]),Kk(t,e),tv(),Qt(t,e,"icon")},tv=()=>{const t=xe();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},zk=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Wk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Om=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=Dm(e.iconHtml):e.icon==="success"?(r=zk,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=Wk:e.icon&&(r=Dm({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&Jt(t,r)},Kk=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Pm(t,n,"background-color",e.iconColor);Pm(t,".swal2-success-ring","border-color",e.iconColor)}},Dm=t=>`<div class="${x["icon-content"]}">${t}</div>`,Gk=(t,e)=>{const n=Qw();if(n){if(!e.imageUrl){Rt(n);return}at(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Zr(n,"width",e.imageWidth),Zr(n,"height",e.imageHeight),n.className=x.image,Qt(n,e,"image")}};let cd=!1,nv=0,rv=0,sv=0,iv=0;const Qk=t=>{t.addEventListener("mousedown",nl),document.body.addEventListener("mousemove",rl),t.addEventListener("mouseup",sl),t.addEventListener("touchstart",nl),document.body.addEventListener("touchmove",rl),t.addEventListener("touchend",sl)},Yk=t=>{t.removeEventListener("mousedown",nl),document.body.removeEventListener("mousemove",rl),t.removeEventListener("mouseup",sl),t.removeEventListener("touchstart",nl),document.body.removeEventListener("touchmove",rl),t.removeEventListener("touchend",sl)},nl=t=>{const e=xe();if(t.target===e||di().contains(t.target)){cd=!0;const n=ov(t);nv=n.clientX,rv=n.clientY,sv=parseInt(e.style.insetInlineStart)||0,iv=parseInt(e.style.insetBlockStart)||0,Ce(e,"swal2-dragging")}},rl=t=>{const e=xe();if(cd){let{clientX:n,clientY:r}=ov(t);e.style.insetInlineStart=`${sv+(n-nv)}px`,e.style.insetBlockStart=`${iv+(r-rv)}px`}},sl=()=>{const t=xe();cd=!1,ln(t,"swal2-dragging")},ov=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},Jk=(t,e)=>{const n=Lt(),r=xe();if(!(!n||!r)){if(e.toast){Zr(n,"width",e.width),r.style.width="100%";const s=pi();s&&r.insertBefore(s,di())}else Zr(r,"width",e.width);Zr(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),Rt(Jl()),Xk(r,e),e.draggable&&!e.toast?(Ce(r,x.draggable),Qk(r)):(ln(r,x.draggable),Yk(r))}},Xk=(t,e)=>{const n=e.showClass||{};t.className=`${x.popup} ${jt(t)?n.popup:""}`,e.toast?(Ce([document.documentElement,document.body],x["toast-shown"]),Ce(t,x.toast)):Ce(t,x.modal),Qt(t,e,"popup"),typeof e.customClass=="string"&&Ce(t,e.customClass),e.icon&&Ce(t,x[`icon-${e.icon}`])},Zk=(t,e)=>{const n=td();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){Rt(n);return}at(n),n.textContent="",s>=r.length&&Nt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=e1(i);if(n.appendChild(l),o===s&&Ce(l,x["active-progress-step"]),o!==r.length-1){const c=t1(e);n.appendChild(c)}})},e1=t=>{const e=document.createElement("li");return Ce(e,x["progress-step"]),Jt(e,t),e},t1=t=>{const e=document.createElement("li");return Ce(e,x["progress-step-line"]),t.progressStepsDistance&&Zr(e,"width",t.progressStepsDistance),e},n1=(t,e)=>{const n=Gw();n&&(id(n),Fo(n,e.title||e.titleText,"block"),e.title&&ad(e.title,n),e.titleText&&(n.innerText=e.titleText),Qt(n,e,"title"))},av=(t,e)=>{Jk(t,e),Ok(t,e),Zk(t,e),qk(t,e),Gk(t,e),n1(t,e),xk(t,e),jk(t,e),Rk(t,e),Hk(t,e);const n=xe();typeof e.didRender=="function"&&n&&e.didRender(n),se.eventEmitter.emit("didRender",n)},r1=()=>jt(xe()),lv=()=>{var t;return(t=Dn())===null||t===void 0?void 0:t.click()},s1=()=>{var t;return(t=gs())===null||t===void 0?void 0:t.click()},i1=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.click()},mi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),cv=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},o1=(t,e,n)=>{cv(t),e.toast||(t.keydownHandler=r=>l1(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:xe(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},xu=(t,e)=>{var n;const r=rd();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=xe())===null||n===void 0||n.focus()},uv=["ArrowRight","ArrowDown"],a1=["ArrowLeft","ArrowUp"],l1=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?c1(e,t):e.key==="Tab"?u1(e):[...uv,...a1].includes(e.key)?h1(e.key):e.key==="Escape"&&d1(e,t,n)))},c1=(t,e)=>{if(!Yl(e.allowEnterKey))return;const n=ec(xe(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;lv(),t.preventDefault()}},u1=t=>{const e=t.target,n=rd();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?xu(r,-1):xu(r,1),t.stopPropagation(),t.preventDefault()},h1=t=>{const e=Mo(),n=Dn(),r=gs(),s=fi();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=uv.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&jt(l))break}l instanceof HTMLButtonElement&&l.focus()}},d1=(t,e,n)=>{Yl(e.allowEscapeKey)&&(t.preventDefault(),n(mi.esc))};var ni={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const f1=()=>{const t=Lt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},hv=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},dv=typeof window<"u"&&!!window.GestureEvent,p1=()=>{if(dv&&!Gn(document.body,x.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Ce(document.body,x.iosfix),m1()}},m1=()=>{const t=Lt();if(!t)return;let e;t.ontouchstart=n=>{e=g1(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},g1=t=>{const e=t.target,n=Lt(),r=ed();return!n||!r||_1(t)||y1(t)?!1:e===n||!km(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(km(r)&&r.contains(e))},_1=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",y1=t=>t.touches&&t.touches.length>1,w1=()=>{if(Gn(document.body,x.iosfix)){const t=parseInt(document.body.style.top,10);ln(document.body,x.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},v1=()=>{const t=document.createElement("div");t.className=x["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Bs=null;const E1=t=>{Bs===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Bs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Bs+v1()}px`)},b1=()=>{Bs!==null&&(document.body.style.paddingRight=`${Bs}px`,Bs=null)};function fv(t,e,n,r){Zl()?Vm(t,r):(ak(n).then(()=>Vm(t,r)),cv(se)),dv?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),sd()&&(b1(),w1(),hv()),T1()}function T1(){ln([document.documentElement,document.body],[x.shown,x["height-auto"],x["no-backdrop"],x["toast-shown"]])}function yr(t){t=A1(t);const e=ni.swalPromiseResolve.get(this),n=I1(this);this.isAwaitingPromise?t.isDismissed||(Bo(this),e(t)):n&&e(t)}const I1=t=>{const e=xe();if(!e)return!1;const n=$e.innerParams.get(t);if(!n||Gn(e,n.hideClass.popup))return!1;ln(e,n.showClass.popup),Ce(e,n.hideClass.popup);const r=Lt();return ln(r,n.showClass.backdrop),Ce(r,n.hideClass.backdrop),C1(t,e,n),!0};function pv(t){const e=ni.swalPromiseReject.get(this);Bo(this),e&&e(t)}const Bo=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,$e.innerParams.get(t)||t._destroy())},A1=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),C1=(t,e,n)=>{var r;const s=Lt(),i=Zw(e);typeof n.willClose=="function"&&n.willClose(e),(r=se.eventEmitter)===null||r===void 0||r.emit("willClose",e),i?S1(t,e,s,n.returnFocus,n.didClose):fv(t,s,n.returnFocus,n.didClose)},S1=(t,e,n,r,s)=>{se.swalCloseEventFinishedCallback=fv.bind(null,t,n,r,s);const i=function(o){if(o.target===e){var l;(l=se.swalCloseEventFinishedCallback)===null||l===void 0||l.call(se),delete se.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},Vm=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=se.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},ri=t=>{let e=xe();if(e||new js,e=xe(),!e)return;const n=pi();Zl()?Rt(di()):R1(e,t),at(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},R1=(t,e)=>{const n=Mo(),r=pi();!n||!r||(!e&&jt(Dn())&&(e=Dn()),at(n),e&&(Rt(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),Ce([t,n],x.loading))},P1=(t,e)=>{e.input==="select"||e.input==="radio"?V1(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Xh(e.inputValue)||Zh(e.inputValue))&&(ri(Dn()),N1(t,e))},k1=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return x1(n);case"radio":return O1(n);case"file":return D1(n);default:return e.inputAutoTrim?n.value.trim():n.value}},x1=t=>t.checked?1:0,O1=t=>t.checked?t.value:null,D1=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,V1=(t,e)=>{const n=xe();if(!n)return;const r=s=>{e.input==="select"?L1(n,il(s),e):e.input==="radio"&&M1(n,il(s),e)};Xh(e.inputOptions)||Zh(e.inputOptions)?(ri(Dn()),No(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):ms(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},N1=(t,e)=>{const n=t.getInput();n&&(Rt(n),No(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,at(n),n.focus(),t.hideLoading()}).catch(r=>{ms(`Error in inputValue promise: ${r}`),n.value="",at(n),n.focus(),t.hideLoading()}))};function L1(t,e,n){const r=_r(t,x.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,Jt(c,o),c.selected=mv(l,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(u=>s(c,u[1],u[0]))}else s(r,l,o)}),r.focus()}function M1(t,e,n){const r=_r(t,x.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),u=document.createElement("label");c.type="radio",c.name=x.radio,c.value=o,mv(o,n.inputValue)&&(c.checked=!0);const d=document.createElement("span");Jt(d,l),d.className=x.label,u.appendChild(c),u.appendChild(d),r.appendChild(u)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const il=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=il(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=il(r)),e.push([n,r])}),e},mv=(t,e)=>!!e&&e.toString()===t.toString(),F1=t=>{const e=$e.innerParams.get(t);t.disableButtons(),e.input?gv(t,"confirm"):hd(t,!0)},U1=t=>{const e=$e.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?gv(t,"deny"):ud(t,!1)},B1=(t,e)=>{t.disableButtons(),e(mi.cancel)},gv=(t,e)=>{const n=$e.innerParams.get(t);if(!n.input){ms(`The "input" parameter is needed to be set when using returnInputValueOn${Jh(e)}`);return}const r=t.getInput(),s=k1(t,n);n.inputValidator?$1(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?ud(t,s):hd(t,s)},$1=(t,e,n)=>{const r=$e.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>No(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?ud(t,e):hd(t,e)})},ud=(t,e)=>{const n=$e.innerParams.get(t||void 0);n.showLoaderOnDeny&&ri(gs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>No(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Bo(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>_v(t||void 0,s))):t.close({isDenied:!0,value:e})},Nm=(t,e)=>{t.close({isConfirmed:!0,value:e})},_v=(t,e)=>{t.rejectPromise(e)},hd=(t,e)=>{const n=$e.innerParams.get(t||void 0);n.showLoaderOnConfirm&&ri(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>No(n.preConfirm(e,n.validationMessage))).then(s=>{jt(Jl())||s===!1?(t.hideLoading(),Bo(t)):Nm(t,typeof s>"u"?e:s)}).catch(s=>_v(t||void 0,s))):Nm(t,e)};function ol(){const t=$e.innerParams.get(this);if(!t)return;const e=$e.domCache.get(this);Rt(e.loader),Zl()?t.icon&&at(di()):j1(e),ln([e.popup,e.actions],x.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const j1=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?at(e[0],"inline-block"):gk()&&Rt(t.actions)};function yv(){const t=$e.innerParams.get(this),e=$e.domCache.get(this);return e?ec(e.popup,t.input):null}function wv(t,e,n){const r=$e.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function vv(t,e){const n=xe();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${x.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function Ev(){wv(this,["confirmButton","denyButton","cancelButton"],!1)}function bv(){wv(this,["confirmButton","denyButton","cancelButton"],!0)}function Tv(){vv(this.getInput(),!1)}function Iv(){vv(this.getInput(),!0)}function Av(t){const e=$e.domCache.get(this),n=$e.innerParams.get(this);Jt(e.validationMessage,t),e.validationMessage.className=x["validation-message"],n.customClass&&n.customClass.validationMessage&&Ce(e.validationMessage,n.customClass.validationMessage),at(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",x["validation-message"]),Jw(r),Ce(r,x.inputerror))}function Cv(){const t=$e.domCache.get(this);t.validationMessage&&Rt(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ln(e,x.inputerror))}const $s={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},H1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],q1={allowEnterKey:void 0},z1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Sv=t=>Object.prototype.hasOwnProperty.call($s,t),Rv=t=>H1.indexOf(t)!==-1,Pv=t=>q1[t],W1=t=>{Sv(t)||Nt(`Unknown parameter "${t}"`)},K1=t=>{z1.includes(t)&&Nt(`The parameter "${t}" is incompatible with toasts`)},G1=t=>{const e=Pv(t);e&&Kw(t,e)},kv=t=>{t.backdrop===!1&&t.allowOutsideClick&&Nt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&Nt(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)W1(e),t.toast&&K1(e),G1(e)};function xv(t){const e=Lt(),n=xe(),r=$e.innerParams.get(this);if(!n||Gn(n,r.hideClass.popup)){Nt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=Q1(t),i=Object.assign({},r,s);kv(i),e.dataset.swal2Theme=i.theme,av(this,i),$e.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Q1=t=>{const e={};return Object.keys(t).forEach(n=>{Rv(n)?e[n]=t[n]:Nt(`Invalid parameter to update: ${n}`)}),e};function Ov(){const t=$e.domCache.get(this),e=$e.innerParams.get(this);if(!e){Dv(this);return}t.popup&&se.swalCloseEventFinishedCallback&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),se.eventEmitter.emit("didDestroy"),Y1(this)}const Y1=t=>{Dv(t),delete t.params,delete se.keydownHandler,delete se.keydownTarget,delete se.currentInstance},Dv=t=>{t.isAwaitingPromise?(jc($e,t),t.isAwaitingPromise=!0):(jc(ni,t),jc($e,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},jc=(t,e)=>{for(const n in t)t[n].delete(e)};var J1=Object.freeze({__proto__:null,_destroy:Ov,close:yr,closeModal:yr,closePopup:yr,closeToast:yr,disableButtons:bv,disableInput:Iv,disableLoading:ol,enableButtons:Ev,enableInput:Tv,getInput:yv,handleAwaitingPromise:Bo,hideLoading:ol,rejectPromise:pv,resetValidationMessage:Cv,showValidationMessage:Av,update:xv});const X1=(t,e,n)=>{t.toast?Z1(t,e,n):(tx(e),nx(e),rx(t,e,n))},Z1=(t,e,n)=>{e.popup.onclick=()=>{t&&(ex(t)||t.timer||t.input)||n(mi.close)}},ex=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let al=!1;const tx=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(al=!0)}}},nx=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(al=!0)}}},rx=(t,e,n)=>{e.container.onclick=r=>{if(al){al=!1;return}r.target===e.container&&Yl(t.allowOutsideClick)&&n(mi.backdrop)}},sx=t=>typeof t=="object"&&t.jquery,Lm=t=>t instanceof Element||sx(t),ix=t=>{const e={};return typeof t[0]=="object"&&!Lm(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Lm(s)?e[n]=s:s!==void 0&&ms(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function ox(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function ax(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const lx=()=>se.timeout&&se.timeout.getTimerLeft(),Vv=()=>{if(se.timeout)return _k(),se.timeout.stop()},Nv=()=>{if(se.timeout){const t=se.timeout.start();return od(t),t}},cx=()=>{const t=se.timeout;return t&&(t.running?Vv():Nv())},ux=t=>{if(se.timeout){const e=se.timeout.increase(t);return od(e,!0),e}},hx=()=>!!(se.timeout&&se.timeout.isRunning());let Mm=!1;const Ou={};function dx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ou[t]=this,Mm||(document.body.addEventListener("click",fx),Mm=!0)}const fx=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Ou){const r=e.getAttribute(n);if(r){Ou[n].fire({template:r});return}}};class px{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}se.eventEmitter=new px;const mx=(t,e)=>{se.eventEmitter.on(t,e)},gx=(t,e)=>{se.eventEmitter.once(t,e)},_x=(t,e)=>{if(!t){se.eventEmitter.reset();return}e?se.eventEmitter.removeListener(t,e):se.eventEmitter.removeAllListeners(t)};var yx=Object.freeze({__proto__:null,argsToParams:ix,bindClickHandler:dx,clickCancel:i1,clickConfirm:lv,clickDeny:s1,enableLoading:ri,fire:ox,getActions:Mo,getCancelButton:fi,getCloseButton:nd,getConfirmButton:Dn,getContainer:Lt,getDenyButton:gs,getFocusableElements:rd,getFooter:Yw,getHtmlContainer:ed,getIcon:di,getIconContent:hk,getImage:Qw,getInputLabel:dk,getLoader:pi,getPopup:xe,getProgressSteps:td,getTimerLeft:lx,getTimerProgressBar:Xl,getTitle:Gw,getValidationMessage:Jl,increaseTimer:ux,isDeprecatedParameter:Pv,isLoading:pk,isTimerRunning:hx,isUpdatableParameter:Rv,isValidParameter:Sv,isVisible:r1,mixin:ax,off:_x,on:mx,once:gx,resumeTimer:Nv,showLoading:ri,stopTimer:Vv,toggleTimer:cx});class wx{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Lv=["swal-title","swal-html","swal-footer"],vx=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Rx(n),Object.assign(Ex(n),bx(n),Tx(n),Ix(n),Ax(n),Cx(n),Sx(n,Lv))},Ex=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{ls(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof $s[s]=="boolean"?e[s]=i!=="false":typeof $s[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},bx=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},Tx=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{ls(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${Jh(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},Ix=t=>{const e={},n=t.querySelector("swal-image");return n&&(ls(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Ax=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ls(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Cx=t=>{const e={},n=t.querySelector("swal-input");n&&(ls(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{ls(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Sx=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(ls(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Rx=t=>{const e=Lv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||Nt(`Unrecognized element <${r}>`)})},ls=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Nt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Mv=10,Px=t=>{const e=Lt(),n=xe();typeof t.willOpen=="function"&&t.willOpen(n),se.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;Ox(e,n,t),setTimeout(()=>{kx(e,n)},Mv),sd()&&(xx(e,t.scrollbarPadding,s),f1()),!Zl()&&!se.previousActiveElement&&(se.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),se.eventEmitter.emit("didOpen",n),ln(e,x["no-transition"])},ll=t=>{const e=xe();if(t.target!==e)return;const n=Lt();e.removeEventListener("animationend",ll),e.removeEventListener("transitionend",ll),n.style.overflowY="auto"},kx=(t,e)=>{Zw(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",ll),e.addEventListener("transitionend",ll)):t.style.overflowY="auto"},xx=(t,e,n)=>{p1(),e&&n!=="hidden"&&E1(n),setTimeout(()=>{t.scrollTop=0})},Ox=(t,e,n)=>{Ce(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),at(e,"grid"),setTimeout(()=>{Ce(e,n.showClass.popup),e.style.removeProperty("opacity")},Mv)):at(e,"grid"),Ce([document.documentElement,document.body],x.shown),n.heightAuto&&n.backdrop&&!n.toast&&Ce([document.documentElement,document.body],x["height-auto"])};var Fm={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Dx(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Fm.email),t.input==="url"&&(t.inputValidator=Fm.url))}function Vx(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Nt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Nx(t){Dx(t),t.showLoaderOnConfirm&&!t.preConfirm&&Nt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Vx(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Ak(t)}let bn;var da=new WeakMap;class Xe{constructor(){if(rk(this,da,void 0),typeof window>"u")return;bn=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,sk(da,this,this._main(bn.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(kv(Object.assign({},n,e)),se.currentInstance){const i=ni.swalPromiseResolve.get(se.currentInstance),{isAwaitingPromise:o}=se.currentInstance;se.currentInstance._destroy(),o||i({isDismissed:!0}),sd()&&hv()}se.currentInstance=bn;const r=Mx(e,n);Nx(r),Object.freeze(r),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);const s=Fx(bn);return av(bn,r),$e.innerParams.set(bn,r),Lx(bn,s,r)}then(e){return Sm(da,this).then(e)}finally(e){return Sm(da,this).finally(e)}}const Lx=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};ni.swalPromiseResolve.set(t,r),ni.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{F1(t)},e.denyButton.onclick=()=>{U1(t)},e.cancelButton.onclick=()=>{B1(t,i)},e.closeButton.onclick=()=>{i(mi.close)},X1(n,e,i),o1(se,n,i),P1(t,n),Px(n),Ux(se,n,i),Bx(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Mx=(t,e)=>{const n=vx(t),r=Object.assign({},$s,e,n,t);return r.showClass=Object.assign({},$s.showClass,r.showClass),r.hideClass=Object.assign({},$s.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Fx=t=>{const e={popup:xe(),container:Lt(),actions:Mo(),confirmButton:Dn(),denyButton:gs(),cancelButton:fi(),loader:pi(),closeButton:nd(),validationMessage:Jl(),progressSteps:td()};return $e.domCache.set(t,e),e},Ux=(t,e,n)=>{const r=Xl();Rt(r),e.timer&&(t.timeout=new wx(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(at(r),Qt(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&od(e.timer)})))},Bx=(t,e)=>{if(!e.toast){if(!Yl(e.allowEnterKey)){Kw("allowEnterKey"),Hx();return}$x(t)||jx(t,e)||xu(-1,1)}},$x=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&jt(n))return n.focus(),!0;return!1},jx=(t,e)=>e.focusDeny&&jt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&jt(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&jt(t.confirmButton)?(t.confirmButton.focus(),!0):!1,Hx=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Xe.prototype.disableButtons=bv;Xe.prototype.enableButtons=Ev;Xe.prototype.getInput=yv;Xe.prototype.disableInput=Iv;Xe.prototype.enableInput=Tv;Xe.prototype.hideLoading=ol;Xe.prototype.disableLoading=ol;Xe.prototype.showValidationMessage=Av;Xe.prototype.resetValidationMessage=Cv;Xe.prototype.close=yr;Xe.prototype.closePopup=yr;Xe.prototype.closeModal=yr;Xe.prototype.closeToast=yr;Xe.prototype.rejectPromise=pv;Xe.prototype.update=xv;Xe.prototype._destroy=Ov;Object.assign(Xe,yx);Object.keys(J1).forEach(t=>{Xe[t]=function(){return bn&&bn[t]?bn[t](...arguments):null}});Xe.DismissReason=mi;Xe.version="11.17.2";const js=Xe;js.default=js;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const cn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qx={class:"sidebar"},zx={class:"user"},Wx={class:"nav-links"},Kx={__name:"NavBar",setup(t){const e=Hw(),n=Gh(),r=it(()=>n.user),s=async()=>{await n.logout(),e.push("/")};return(i,o)=>{const l=Qu("router-link");return fe(),ge("nav",qx,[o[2]||(o[2]=ee("h1",{class:"headline"},"Bro-Bank",-1)),ee("p",zx,"Eingeloggt: "+Ue(r.value.email),1),ee("ul",Wx,[ee("li",null,[qe(l,{to:"/home"},{default:no(()=>o[0]||(o[0]=[qs("🏠 Home")])),_:1})]),ee("li",null,[qe(l,{to:"/newgroups"},{default:no(()=>o[1]||(o[1]=[qs("💬 Finde Bros")])),_:1})])]),ee("button",{class:"logout-btn",onClick:s},"🚪 Abmelden")])}}},Gx=cn(Kx,[["__scopeId","data-v-63a0c81f"]]),Qx={class:"container"},Yx={class:"input-group"},Jx={class:"input-group"},Xx={class:"input-group"},Zx=["required"],eO={type:"submit"},tO={__name:"LoginBar",setup(t){const e=Hw(),n=Se(""),r=Se(""),s=Se(""),i=Se(!1),o=js.mixin({toast:!0,position:"bottom-left",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:p=>{p.onmouseenter=js.stopTimer,p.onmouseleave=js.resumeTimer}});async function l(){i.value?await c():await u()}async function c(){if(r.value!==s.value){o.fire({icon:"error",title:"Fehler",text:"Passwörter stimmen nicht überein!",timer:!1});return}try{const p=await bA(sn,n.value,r.value),m=p.user;await ks(an(Vt,"users",m.uid),{username:n.value}),console.log("Erfolgreich registriert:",p.user),o.fire({icon:"success",title:"Registrierung erfolgreich!",showConfirmButton:!1,timer:1500}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Registrierungsfehler",text:p.message})}}async function u(){try{await TA(sn,n.value,r.value),o.fire({icon:"success",title:"Signed in successfully"}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Anmeldefehler",text:p.message,timer:!1})}}function d(){i.value=!i.value}return(p,m)=>(fe(),ge("div",Qx,[m[3]||(m[3]=ee("h1",{class:"headline"},"Bro-Bank",-1)),ee("form",{onSubmit:Qg(l,["prevent"])},[ee("div",Yx,[zn(ee("input",{"onUpdate:modelValue":m[0]||(m[0]=y=>n.value=y),id:"email",type:"email",required:""},null,512),[[Er,n.value]]),ee("label",{class:Wt({active:n.value}),for:"email"},"E-Mail",2)]),ee("div",Jx,[zn(ee("input",{"onUpdate:modelValue":m[1]||(m[1]=y=>r.value=y),id:"password",type:"password",required:""},null,512),[[Er,r.value]]),ee("label",{class:Wt({active:r.value}),for:"password"},"Passwort",2)]),ee("div",{class:Wt(["register-fields",{expanded:i.value}])},[ee("div",Xx,[zn(ee("input",{"onUpdate:modelValue":m[2]||(m[2]=y=>s.value=y),id:"confirmPassword",type:"password",required:i.value},null,8,Zx),[[Er,s.value]]),ee("label",{class:Wt({active:s.value}),for:"confirmPassword"},"Passwort bestätigen",2)])],2),ee("div",{class:Wt(["button-container",{shifted:i.value}])},[ee("button",eO,Ue(i.value?"Registrieren":"Login"),1),ee("button",{type:"button",class:"toggle-btn",onClick:d},Ue(i.value?"Zurück zum Login":"Registrieren"),1)],2)],32)]))}},nO=cn(tO,[["__scopeId","data-v-e9a37f23"]]),rO={class:"app-container"},sO={__name:"App",setup(t){const e=Gh(),n=it(()=>e.user),r=Se(!1),s=()=>{r.value=!r.value};return(i,o)=>{const l=Qu("router-view");return fe(),ge("div",rO,[ee("aside",{class:Wt(["sidebar",{collapsed:r.value}])},[n.value?(fe(),ge("button",{key:0,class:Wt(["toggle-btn",{collapsed:r.value}]),onClick:s},Ue(r.value?"⮚⮚⮚":"⮘⮘⮘"),3)):dn("",!0),n.value?(fe(),Da(Gx,{key:1})):(fe(),Da(nO,{key:2}))],2),ee("main",{class:Wt(["content",{expanded:r.value}])},[qe(l)],2)])}}},iO=cn(sO,[["__scopeId","data-v-c32f97b0"]]),oO={class:"username-container"},aO={key:0,class:"username-setup"},lO={class:"buttons"},cO={key:0,class:"error"},uO={key:1,class:"username-display"},hO={class:"username-display2"},dO={__name:"Userdata",setup(t){const e=Se(""),n=Se(""),r=Se(!1),s=Se("");us(()=>{Il(sn,async c=>{if(c)try{console.log("Angemeldeter Nutzer:",c.uid);const u=await qn(an(Vt,"users",c.uid));u.exists()&&(e.value=u.data().username)}catch(u){console.error("Fehler beim Abrufen der Daten:",u),s.value="Fehler beim Laden."}else s.value="Bitte melde dich an!"})});async function i(){if(!n.value.trim()){s.value="Bitte gib einen gültigen Namen ein.";return}try{await ks(an(Vt,"users",sn.currentUser.uid),{username:n.value},{merge:!0}),e.value=n.value,n.value="",r.value=!1}catch(c){console.error("Fehler beim Speichern des Namens:",c),s.value="Fehler beim Speichern."}}function o(){n.value=e.value,r.value=!0}function l(){r.value=!1,n.value=""}return(c,u)=>(fe(),ge("div",oO,[!e.value||r.value?(fe(),ge("div",aO,[u[1]||(u[1]=ee("p",null,"Wähle einen Namen:",-1)),zn(ee("input",{"onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),id:"username",placeholder:"Username"},null,512),[[Er,n.value]]),ee("div",lO,[ee("button",{onClick:i},"Speichern"),e.value?(fe(),ge("button",{key:0,onClick:l,class:"cancel-btn"}," Abbrechen ")):dn("",!0)]),s.value?(fe(),ge("p",cO,Ue(s.value),1)):dn("",!0)])):(fe(),ge("div",uO,[ee("div",hO,[ee("p",null,"Willkommen, "+Ue(e.value)+"!",1),ee("button",{onClick:o,class:"edit-btn"},"✏️")])]))]))}},fO=cn(dO,[["__scopeId","data-v-53b0214b"]]);async function pO(t,e){if(sn.currentUser)try{const n=await Pw(Xs(Vt,"groups"),{name:t,ownerId:sn.currentUser.uid,members:[sn.currentUser.uid],codeword:e,createdAt:JP()});console.log("Gruppe erstellt mit ID:",n.id)}catch(n){console.error("Fehler beim Erstellen der Gruppe:",n)}}async function mO(t){const e=qh(Xs(Vt,"groups"),Iw("members","array-contains",t));return(await Wl(e)).docs.map(r=>({id:r.id,...r.data()}))}async function gO(t){try{const e=Xs(Vt,"groups"),n=qh(e,Iw("codeword","==",t)),r=await Wl(n);if(r.empty)return!1;const s=r.docs[0],i=s.id,o=sn.currentUser;if(!o)throw new Error("Kein angemeldeter Nutzer.");const l=an(Vt,"groups",i);return await QP(l,{members:[...s.data().members||[],o.uid]}),!0}catch(e){throw console.error("Fehler beim Gruppenbeitritt:",e),e}}async function _O(t){if(!t)return console.error("Fehler: Keine groupId erhalten."),null;try{const e=an(Vt,"groups",t),n=await qn(e);return n.exists()?{id:n.id,...n.data()}:(console.warn("Gruppe nicht gefunden:",t),null)}catch(e){return console.error("Fehler beim Laden der Gruppe:",e),null}}async function Fv(t){const e=an(Vt,"groups",t);try{const n=await qn(e);if(!n.exists())return console.error("Gruppe existiert nicht!"),[];const i=(n.data().members||[]).map(async l=>{const c=an(Vt,"users",l),u=await qn(c);return u.exists()?{id:l,username:u.data().username}:null});return(await Promise.all(i)).filter(Boolean)}catch(n){return console.error("Fehler beim Abrufen der Gruppenmitglieder:",n),[]}}const yO={class:"groups-container"},wO={key:0,class:"groups-list"},vO={key:1,class:"no-groups"},EO={__name:"GroupOverview",setup(t){const e=Se([]);return us(()=>{Il(sn,async n=>{n&&(e.value=await mO(n.uid))})}),(n,r)=>{const s=Qu("router-link");return fe(),ge("div",yO,[r[2]||(r[2]=ee("h1",null,"Deine Gruppen",-1)),e.value.length>0?(fe(),ge("div",wO,[(fe(!0),ge(It,null,ro(e.value,i=>(fe(),Da(s,{key:i.id,to:`/group/${i.id}`,class:"group-card"},{default:no(()=>[ee("h2",null,Ue(i.name),1),ee("p",null,Ue(i.description),1)]),_:2},1032,["to"]))),128))])):(fe(),ge("div",vO,[r[1]||(r[1]=ee("p",null,"Du bist in keiner Gruppe.",-1)),qe(s,{to:"/newgroups"},{default:no(()=>r[0]||(r[0]=[qs("Gruppe beitreten")])),_:1})]))])}}},bO=cn(EO,[["__scopeId","data-v-7f8ff4e9"]]),TO={__name:"HomeView",setup(t){return(e,n)=>(fe(),ge(It,null,[qe(fO,{class:"Userdata"}),qe(bO,{class:"GroupOverview"})],64))}},IO=cn(TO,[["__scopeId","data-v-6fc3fbdc"]]),Uv=Zu("transactions",()=>{const t=Se([]);async function e(r,s){try{const i=an(Vt,"groups",r),o=Xs(i,"transactions"),l=await Pw(o,{...s,createdAt:new Date});t.value.push({id:l.id,...s}),console.log("✅ Transaktion gespeichert in Gruppe",r)}catch(i){console.error("❌ Fehler beim Speichern:",i)}}async function n(r){try{const s=an(Vt,"groups",r),i=Xs(s,"transactions"),o=qh(i,zP("createdAt","desc")),l=await Wl(o);t.value=l.docs.map(c=>({id:c.id,...c.data()}))}catch(s){console.error("❌ Fehler beim Abrufen:",s)}}return{transactions:t,addTransaction:e,fetchTransactions:n}});async function Bv(t){try{const e=await qn(an(Vt,"users",t));return e.exists()?e.data():(console.error("User not found!"),null)}catch(e){return console.error("Error getting user:",e),null}}async function AO(t,e){const{createdBy:n,members:r,amount:s,type:i}=e,o=c=>an(Vt,"groups",t,"balances",c),l=parseFloat(s);if(i==="send"){const c=o(n),u=await qn(c),d=u.exists()?u.data().balance:0;await ks(c,{balance:d-l*r.length});for(const p of r){const m=o(p),y=await qn(m),P=y.exists()?y.data().balance:0;await ks(m,{balance:P+l})}}else if(i==="receive"){const c=o(n),u=await qn(c),d=u.exists()?u.data().balance:0;await ks(c,{balance:d+l*r.length});for(const p of r){const m=o(p),y=await qn(m),P=y.exists()?y.data().balance:0;await ks(m,{balance:P-l})}}}async function CO(t){const e=Xs(Vt,"groups",t,"balances"),n=await Wl(e),r=[];return n.forEach(s=>{r.push({id:s.id,...s.data()})}),r}const $v=Zu("balance",()=>{const t=Se([]);async function e(n){console.log("🔄 Lade Balances für",n);const r=await CO(n),s=[];for(const i of r){const o=await Bv(i.id);s.push({...i,username:(o==null?void 0:o.username)??"Unbekannt"})}t.value=s}return{balances:t,loadBalances:e}}),SO=["id","value"],RO=["for"],PO={__name:"TransactionForm",props:{members:Array},setup(t){const e=t,n=$v(),r=Uv(),s=Ql(),i=Se(s.params.groupId),o=Se([]),l=Se(""),c=Se(""),u=Se("send"),d=Se([]),p=Gh(),m=it(()=>p.user),y=async j=>{const L=[];for(const $ of j){const q=await Bv($.id);L.push({...$,username:(q==null?void 0:q.username)??"Unbekannt"})}d.value=L};Xr(()=>e.members,async j=>{j.length>0&&await y(j)},{immediate:!0});const P=it(()=>{var j;return!((j=m.value)!=null&&j.uid)||!d.value.length?[]:d.value.filter(L=>L.id!==m.value.uid)}),O=()=>{u.value=u.value==="send"?"receive":"send"},D=async()=>{var L;if(o.value.length===0){alert("Bitte Empfänger auswählen!");return}const j={members:o.value,amount:l.value,comment:c.value,type:u.value,createdBy:(L=m.value)==null?void 0:L.uid,createdAt:new Date().toISOString()};await r.addTransaction(i.value,j),await AO(i.value,j),await n.loadBalances(i.value),alert("Transaktion gespeichert!")};return(j,L)=>(fe(),ge("form",{onSubmit:Qg(D,["prevent"])},[L[3]||(L[3]=ee("h2",null,"Neue Transaktion",-1)),L[4]||(L[4]=ee("label",null,"Empfänger auswählen:",-1)),(fe(!0),ge(It,null,ro(P.value,$=>(fe(),ge("div",{key:$.id,class:"custom-checkbox"},[zn(ee("input",{type:"checkbox",id:"member-"+$.id,"onUpdate:modelValue":L[0]||(L[0]=q=>o.value=q),value:$.id},null,8,SO),[[RT,o.value]]),ee("label",{for:"member-"+$.id},Ue($.username),9,RO)]))),128)),L[5]||(L[5]=ee("label",null,"Betrag:",-1)),zn(ee("input",{type:"number","onUpdate:modelValue":L[1]||(L[1]=$=>l.value=$),placeholder:"€ Betrag",required:""},null,512),[[Er,l.value]]),L[6]||(L[6]=ee("label",null,"Kommentar:",-1)),zn(ee("input",{type:"text","onUpdate:modelValue":L[2]||(L[2]=$=>c.value=$),placeholder:"Optional"},null,512),[[Er,c.value]]),ee("button",{type:"button",onClick:O},Ue(u.value==="send"?"➡️ Geld senden":"🔄 Geld erhalten"),1),L[7]||(L[7]=ee("button",{type:"submit"},"Transaktion speichern",-1))],32))}},kO=cn(PO,[["__scopeId","data-v-4b7a211d"]]),xO={class:"transactions"},OO={class:"transaction-header"},DO={class:"icon"},VO={class:"transaction-body"},NO={class:"sender"},LO={key:0,class:"date"},MO={key:0,class:"receiver"},FO={key:0},UO={key:1,class:"comment"},BO={__name:"TransactionList",setup(t){const e=c=>!c||typeof c.toDate!="function"?"—":c.toDate().toLocaleDateString("de-DE",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=Uv(),s=Ql().params.groupId,i=it(()=>n.transactions),o=Se({}),l=async()=>{const c=await Fv(s),u={};for(const d of c)u[d.id]=d.username;for(const d of i.value){const p=d.createdBy;if(!u[p]&&p){const y=c.find(P=>P.id===p);y&&(u[p]=y.username)}}o.value=u};return Xr(i,async c=>{c.length>0&&await l()},{immediate:!0}),us(async()=>{await n.fetchTransactions(s),await l()}),(c,u)=>(fe(),ge("div",xO,[u[1]||(u[1]=ee("h2",null,"📜 Transaktionen",-1)),ee("ul",null,[(fe(!0),ge(It,null,ro(i.value,d=>(fe(),ge("li",{key:d.id,class:"transaction-item"},[ee("div",OO,[ee("span",DO,Ue(d.type==="send"?"📤":d.type==="receive"?"📥":"🔄"),1),ee("span",{class:Wt({sent:d.type==="send",received:d.type==="receive",transfer:d.type==="transfer"})},Ue(d.amount)+"€ ",3)]),ee("div",VO,[ee("p",NO,[ee("strong",null,Ue(o.value[d.createdBy]||"Unbekannt"),1),d.createdAt?(fe(),ge("span",LO,"("+Ue(e(d.createdAt))+")",1)):dn("",!0)]),d.members?(fe(),ge("p",MO,[u[0]||(u[0]=qs(" An: ")),(fe(!0),ge(It,null,ro(d.members,(p,m)=>(fe(),ge("span",{key:p},[qs(Ue(o.value[p]||"❓")+" ",1),m<d.members.length-1?(fe(),ge("span",FO,", ")):dn("",!0)]))),128))])):dn("",!0),d.comment?(fe(),ge("p",UO," 📝 "+Ue(d.comment),1)):dn("",!0)])]))),128))])]))}},$O=cn(BO,[["__scopeId","data-v-1b73ba27"]]),jO={class:"balance-list"},HO={key:0},qO={key:1},zO={__name:"BalanceOverview",setup(t){const n=Ql().params.groupId,r=$v();us(()=>{r.loadBalances(n)});const s=it(()=>r.balances);return(i,o)=>(fe(),ge("div",jO,[o[0]||(o[0]=ee("h2",null,"💰 Gruppensaldo",-1)),s.value.length?(fe(),ge("ul",HO,[(fe(!0),ge(It,null,ro(s.value,l=>(fe(),ge("li",{key:l.id,class:Wt(l.balance>=0?"positive":"negative")},Ue(l.username)+": "+Ue(l.balance.toFixed(2))+" € ",3))),128))])):(fe(),ge("p",qO,"Keine Balances gefunden."))]))}},WO=cn(zO,[["__scopeId","data-v-dd2ba1f2"]]),KO={key:0,class:"group-view"},GO={key:1,class:"loading"},QO={key:0},YO={key:1},Um={__name:"GroupView",setup(t){const e=Ql(),n=Se(null),r=Se(""),s=Se([]),i=Se(e.params.groupId);return us(async()=>{s.value=await Fv(i.value)}),Ub(async()=>{const o=e.params.groupId;if(!o){r.value="Fehler: Keine Gruppen-ID angegeben!";return}n.value=await _O(o),n.value||(r.value="Gruppe nicht gefunden!")}),(o,l)=>n.value?(fe(),ge("div",KO,[ee("h1",null,Ue(n.value.name),1),ee("p",null,Ue(n.value.description),1),qe(WO),qe(kO,{members:s.value},null,8,["members"]),qe($O)])):(fe(),ge("div",GO,[r.value?(fe(),ge("p",QO,Ue(r.value),1)):(fe(),ge("p",YO,"Lädt..."))]))}},JO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--emojione-monotone'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20d='M61.971%2042.634c-.632-6.334-2.045-11.643-2.358-25.352c-.223-9.706-12.006-10.453-15.069-7.164c-3.471-4.255-12.762-4.354-16.229.94c-2.693-1.48-9.901-1.799-12.879%201.873c0%200-8.835-1.411-12.836%2013.321c-1.437%205.289.12%2012.302.41%2013.756c2.023%2010.147%2010.502%208.19%2012.209%207.2c2.892%207.44%2010.375%206.101%2013.385%203.913c.174%204.414%203.771%206.535%206.065%205.699c6.722-2.451%2012.33-2.783%2016.764-2.607c2.127.083%203.797-.938%204.741-2.779c3.325-1.733%206.148-5.279%205.797-8.8m-15.525.998c1.008-5.798-1.179-14.392-.4-20.936c-3.16%204.926-.82%2018.871-2.146%2024.525c-1.085%204.62-9.646%203.175-12.294-2.375c-.918-8.487.424-13.407-1.889-22.15c.218%2010.57-1.415%2012.539-.325%2022.813c-2.524%202.592-11.239.768-11.679-3.621c-.587-5.858.628-10.459-1.099-16.139c0%205.369-1.062%208.233-.541%2016.18c.003.049-1.556%201.24-3.869%201.24c-9.471%200-8.646-14.027-7.087-18.926c2.256-7.098%208.207-11.233%2011.281-9.611c1.527-3.561%2010.239-3.875%2011.74-.539c1.296-6.143%2013.705-5.645%2017.005-.166c2.214-4.44%2012.358-3.112%2012.464%203.388c.235%2014.059%202.284%2020.641%202.203%2026.796c-3.471%204.281-9.605%203.902-13.364-.479'%20fill='%23000000'%3e%3c/path%3e%3c/svg%3e",XO={class:"logo-container"},ZO={__name:"LoginView",setup(t){return(e,n)=>(fe(),ge("div",XO,n[0]||(n[0]=[ee("img",{class:"logo",src:JO,alt:"logo"},null,-1)])))}},eD=cn(ZO,[["__scopeId","data-v-6335875f"]]),tD={class:"container"},nD={key:0,class:"success"},rD={key:1,class:"error"},sD={__name:"CreateGroup",setup(t){const e=Se(""),n=Se(""),r=Se(""),s=async()=>{if(!e.value.trim()){r.value="Bitte einen Gruppennamen eingeben.";return}try{await pO(e.value,e.value),n.value="Gruppe erfolgreich erstellt!",e.value="",r.value=""}catch(i){r.value="Fehler beim Erstellen der Gruppe.",console.error(i)}};return(i,o)=>(fe(),ge("div",tD,[o[1]||(o[1]=ee("h2",null,"Neue Gruppe erstellen",-1)),zn(ee("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"groupName",type:"text",placeholder:"Gruppenname"},null,512),[[Er,e.value]]),ee("button",{onClick:s},"Erstellen"),n.value?(fe(),ge("p",nD,Ue(n.value),1)):dn("",!0),r.value?(fe(),ge("p",rD,Ue(r.value),1)):dn("",!0)]))}},iD=cn(sD,[["__scopeId","data-v-df4181b4"]]),oD={class:"container"},aD={key:0,class:"success"},lD={key:1,class:"error"},cD={__name:"JoinGroup",setup(t){const e=Se(""),n=Se(""),r=Se(""),s=async()=>{if(!e.value.trim()){r.value="Bitte ein Codewort eingeben.";return}try{await gO(e.value)?(n.value="Du bist der Gruppe erfolgreich beigetreten!",r.value=""):(r.value="Ungültiges Codewort.",n.value="")}catch(i){console.error("Fehler beim Beitreten:",i),r.value="Fehler beim Beitritt.",n.value=""}};return(i,o)=>(fe(),ge("div",oD,[o[1]||(o[1]=ee("h2",null,"Gruppe beitreten",-1)),zn(ee("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"codeword",placeholder:"Codewort eingeben"},null,512),[[Er,e.value]]),ee("button",{onClick:s},"Beitreten"),n.value?(fe(),ge("p",aD,Ue(n.value),1)):dn("",!0),r.value?(fe(),ge("p",lD,Ue(r.value),1)):dn("",!0)]))}},uD=cn(cD,[["__scopeId","data-v-d565c1b9"]]),hD={__name:"NewGroupsView",setup(t){return(e,n)=>(fe(),ge(It,null,[qe(iD),qe(uD)],64))}},dD=[{path:"/",name:"login",component:eD},{path:"/home",name:"home",component:IO},{path:"/group",name:"groupview",component:Um},{path:"/group/:groupId",name:"GroupView",component:Um,props:!0},{path:"/newgroups",name:"newgroups",component:hD}],fD=ek({history:P2("/Website/"),routes:dD});VT(iO).use(fD).use(MT()).mount("#app");

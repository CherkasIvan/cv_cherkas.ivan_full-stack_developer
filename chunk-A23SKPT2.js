import{$a as Gn,Bb as Ze,Cb as Xe,Db as Yn,Ea as W,Eb as Zn,Fa as Hn,Gb as Xn,Hb as Oe,Ib as Qn,Jb as z,Ka as qe,Kb as It,Lb as Tt,M as Ke,Ma as Q,N as zt,Na as v,O as Kt,P as y,Pa as St,Q as k,Qb as x,S as w,Sa as J,T as pe,Ta as B,Tb as en,U as f,Ua as _,V as Un,Va as Wn,Wa as he,Xa as T,Ya as _e,Zb as K,_a as qt,a as g,aa as _t,ac as S,b as $,ba as Et,bc as tn,c as kn,ca as H,cb as ee,fa as me,ga as jn,gc as Ne,h as ae,hc as Jn,ic as ei,ja as M,jb as O,kb as Yt,kc as F,l as Bn,la as L,lb as Zt,lc as nn,ma as le,mb as Ye,na as Te,nb as Xt,oa as A,ob as Qt,pb as Jt,q as Vn,qa as Y,qb as wt,rb as At,sb as zn,ua as Me,ub as Kn,vb as Ft,w as $n,wb as te,xb as Ee,yb as Se,zb as qn}from"./chunk-NHEMQ547.js";var ti=null;function we(){return ti}function tr(t){ti??=t}var on=class{},Le=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>f(ni),providedIn:"platform"})}return t})(),nr=new w(""),ni=(()=>{class t extends Le{_location;_history;_doc=f(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return we().getBaseHref(this._doc)}onPopState(e){let n=we().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=we().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Mt(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function ii(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function ne(t){return t&&t[0]!=="?"?`?${t}`:t}var Pe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>f(ri),providedIn:"root"})}return t})(),Ot=new w(""),ri=(()=>{class t extends Pe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Mt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ne(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+ne(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+ne(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(pe(Le),pe(Ot,8))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),si=(()=>{class t{_subject=new ae;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=rr(ii(oi(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ne(n))}normalize(e){return t.stripTrailingSlash(or(this._basePath,oi(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ne(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ne(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=ne;static joinWithSlash=Mt;static stripTrailingSlash=ii;static \u0275fac=function(n){return new(n||t)(pe(Pe))};static \u0275prov=y({token:t,factory:()=>ir(),providedIn:"root"})}return t})();function ir(){return new si(pe(Pe))}function or(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function oi(t){return t.replace(/\/index.html$/,"")}function rr(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var sr=(()=>{class t extends Pe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Mt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+ne(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+ne(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(pe(Le),pe(Ot,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var rn=/\s+/,ai=[],ar=(()=>{class t{_ngEl;_renderer;initialClasses=ai;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(rn):ai}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(rn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(rn).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(v(Y),v(Q))};static \u0275dir=_({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Nt=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},di=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Nt(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),li(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);li(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(v(St),v(qe),v(Jn))};static \u0275dir=_({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function li(t,i){t.context.$implicit=i.item}var sn=(()=>{class t{_viewContainer;_context=new Lt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ui(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ui(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(v(St),v(qe))};static \u0275dir=_({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Lt=class{$implicit=null;ngIf=null};function ui(t,i){if(t&&!t.createEmbeddedView)throw new Ke(2020,!1)}var an=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:Hn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(v(Y),v(ei),v(Q))};static \u0275dir=_({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),ln=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(v(St))};static \u0275dir=_({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();function lr(t,i){return new Ke(2100,!1)}var ur=(()=>{class t{transform(e){if(e==null)return null;if(typeof e!="string")throw lr(t,e);return e.toUpperCase()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=Wn({name:"uppercase",type:t,pure:!0})}return t})();var ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({})}return t})();function dr(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var un=class{};var fr="browser",gr="server";function xe(t){return t===fr}function cn(t){return t===gr}var Kl=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>new dn(f(H),window)})}return t})(),dn=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo($(g({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=mr(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(zt(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo($(g({},e),{left:o-s[0],top:r-s[1]}))}};function mr(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function be(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[be(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function ci(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Ae(t,i){if(t&&i){let e=n=>{ci(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function yr(){return window.innerWidth-document.documentElement.offsetWidth}function pi(t){typeof t=="string"?Ae(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,yr()+"px"),Ae(document.body,t?.className||"p-overflow-hidden"))}function ye(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function hi(t){typeof t=="string"?ye(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),ye(document.body,t?.className||"p-overflow-hidden"))}function Qe(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch(e){}return null}function fi(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],o=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=o.width||t.offsetWidth,i.height=o.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function gi(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function pn(t){return t?Math.abs(t.scrollLeft):0}function vr(){let t=document.documentElement;return(window.pageXOffset||pn(t))-(t.clientLeft||0)}function Dr(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Cr(t){return t?getComputedStyle(t).direction==="rtl":!1}function tu(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:fi(t),l=a.height,u=a.width,d=i.offsetHeight,c=i.offsetWidth,p=i.getBoundingClientRect(),h=Dr(),m=vr(),b=gi(),D,I,N="top";p.top+d+l>b.height?(D=p.top+h-l,N="bottom",D<0&&(D=h)):D=d+p.top+h,p.left+u>b.width?I=Math.max(0,p.left+m+c-u):I=p.left+m,Cr(t)?t.style.insetInlineEnd=I+"px":t.style.insetInlineStart=I+"px",t.style.top=D+"px",t.style.transformOrigin=N,e&&(t.style.marginTop=N==="bottom"?`calc(${(o=(n=Qe(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Qe(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function mi(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function nu(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:fi(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=gi(),u,d,c=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,c="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,t.style.top=u+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=c,e){let p=(o=Qe(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=c==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function _r(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Er(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&_r(t))}function Re(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function bi(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),Re(i)?i:void 0}function Sr(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=bi(r);return Er(s)?s:r?.nodeType===9?r:void 0}}}function iu(t,i){let e=Sr(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Pt(t,i={}){if(Re(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Pt(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function xt(t,i={},...e){if(t){let n=document.createElement(t);return Pt(n,i),n.append(...e),n}}function ou(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function wr(t,i){return Re(t)?Array.from(t.querySelectorAll(i)):[]}function ke(t,i){return Re(t)?t.matches(i)?t:t.querySelector(i):null}function ru(t,i){t&&document.activeElement!==t&&t.focus(i)}function su(t,i){if(Re(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function yi(t,i=""){let e=wr(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function au(t,i){let e=yi(t,i);return e.length>0?e[0]:null}function hn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function lu(t,i){let e=yi(t,i);return e.length>0?e[e.length-1]:null}function vi(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||pn(document.documentElement)||pn(document.body)||0)}}return{top:"auto",left:"auto"}}function Di(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function fn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function uu(t){return!!(t&&t.offsetParent!=null)}function du(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cu(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function pu(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function Ci(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function hu(t,i){let e=bi(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function _i(t,i="",e){Re(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function fu(t,i,e=null,n){var o;i&&((o=t?.style)==null||o.setProperty(i,e,n))}function Ei(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Ar=Object.defineProperty,Si=Object.getOwnPropertySymbols,Fr=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable,wi=(t,i,e)=>i in t?Ar(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Ai=(t,i)=>{for(var e in i||(i={}))Fr.call(i,e)&&wi(t,e,i[e]);if(Si)for(var e of Si(i))Ir.call(i,e)&&wi(t,e,i[e]);return t};function Fi(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Fi(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Tr(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Mr({skipUndefined:t=!1},...i){return i?.reduce((e,n={})=>{for(let o in n){let r=n[o];if(!(t&&r===void 0))if(o==="style")e.style=Ai(Ai({},e.style),n.style);else if(o==="class"||o==="className")e[o]=Fi(e[o],n[o]);else if(Tr(r)){let s=e[o];e[o]=s?(...a)=>{s(...a),r(...a)}:r}else e[o]=r}return e},{})}function gn(...t){return Mr({skipUndefined:!1},...t)}var Or=Object.defineProperty,Ii=Object.getOwnPropertySymbols,Nr=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable,Ti=(t,i,e)=>i in t?Or(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Pr=(t,i)=>{for(var e in i||(i={}))Nr.call(i,e)&&Ti(t,e,i[e]);if(Ii)for(var e of Ii(i))Lr.call(i,e)&&Ti(t,e,i[e]);return t};function de(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function mn(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!mn(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let d=t instanceof RegExp,c=i instanceof RegExp;if(d!=c)return!1;if(d&&c)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!mn(t[a],i[a],e))return!1;return!0}function xr(t,i){return mn(t,i)}function Rt(t){return typeof t=="function"&&"call"in t&&"apply"in t}function C(t){return!de(t)}function Mi(t,i){if(!t||!i)return null;try{let e=t[i];if(C(e))return e}catch(e){}if(Object.keys(t).length){if(Rt(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Oi(t,i,e){return e?Mi(t,e)===Mi(i,e):xr(t,i)}function ie(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Ni(t={},i={}){let e=Pr({},t);return Object.keys(i).forEach(n=>{let o=n;ie(i[o])&&o in t&&ie(t[o])?e[o]=Ni(t[o],i[o]):e[o]=i[o]}),e}function Li(...t){return t.reduce((i,e,n)=>n===0?e:Ni(i,e),{})}function yu(t,i){let e=-1;if(C(t))try{e=t.findLastIndex(i)}catch(n){e=t.lastIndexOf([...t].reverse().find(i))}return e}function R(t,...i){return Rt(t)?t(...i):t}function X(t,i=!0){return typeof t=="string"&&(i||t!=="")}function ve(t){return X(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function kt(t,i="",e={}){let n=ve(i).split("."),o=n.shift();if(o){if(ie(t)){let r=Object.keys(t).find(s=>ve(s)===o)||"";return kt(R(t[r],e),n.join("."),e)}return}return R(t,e)}function bn(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Pi(t){return C(t)&&!isNaN(t)}function vu(t=""){return C(t)&&t.length===1&&!!t.match(/\S| /)}function oe(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Fe(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Bt(t){return X(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Du(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}var Vt={};function Je(t="pui_id_"){return Object.hasOwn(Vt,t)||(Vt[t]=0),Vt[t]++,`${t}${Vt[t]}`}var V=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var wu=(()=>{class t{messageSource=new ae;clearSource=new ae;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Au=(()=>{class t{clickSource=new ae;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(v(qe))};static \u0275dir=_({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),De=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({imports:[ue]})}return t})(),Fu=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Rr=Object.defineProperty,kr=Object.defineProperties,Br=Object.getOwnPropertyDescriptors,$t=Object.getOwnPropertySymbols,Bi=Object.prototype.hasOwnProperty,Vi=Object.prototype.propertyIsEnumerable,Ri=(t,i,e)=>i in t?Rr(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,se=(t,i)=>{for(var e in i||(i={}))Bi.call(i,e)&&Ri(t,e,i[e]);if($t)for(var e of $t(i))Vi.call(i,e)&&Ri(t,e,i[e]);return t},yn=(t,i)=>kr(t,Br(i)),fe=(t,i)=>{var e={};for(var n in t)Bi.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&$t)for(var n of $t(t))i.indexOf(n)<0&&Vi.call(t,n)&&(e[n]=t[n]);return e};function Mu(...t){return Li(...t)}var Vr=Ei(),Z=Vr,et=/{([^}]*)}/g,$i=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Ui=/var\([^)]+\)/g;function ki(t){return X(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function $r(t){return ie(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function Ur(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function vn(t="",i=""){return Ur(`${X(t,!1)&&X(i,!1)?`${t}-`:t}${i}`)}function ji(t="",i=""){return`--${vn(t,i)}`}function jr(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Hi(t,i="",e="",n=[],o){if(X(t)){let r=t.trim();if(jr(r))return;if(oe(r,et)){let s=r.replaceAll(et,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>oe(u,d)));return`var(${ji(e,Bt(l.join("-")))}${C(o)?`, ${o}`:""})`});return oe(s.replace(Ui,"0"),$i)?`calc(${s})`:s}return r}else if(Pi(t))return t}function Hr(t,i,e){X(i,!1)&&t.push(`${i}:${e};`)}function Be(t,i){return t?`${t}{${i}}`:""}function Wi(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,d="",c=null,p=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(c=c===h?null:h),!c&&(h==="("&&p++,h===")"&&p--,(h===","||u===s.length)&&p===0)){let m=d.trim();m.startsWith("dt(")?l.push(Wi(m,a)):l.push(n(m)),d="",u++;continue}h!==void 0&&(d+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),d=e(u,i),c=i(...d);t=t.slice(0,a)+c+t.slice(l+1)}return t}var Cn=t=>{var i;let e=E.getTheme(),n=Dn(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Dn(e,t,void 0,"value");return{name:o,variable:n,value:r}},ge=(...t)=>Dn(E.getTheme(),...t),Dn=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=E.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=oe(i,et)?i:`{${i}}`;return n==="value"||de(n)&&a==="strict"?E.getTokenValue(i):Hi(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Ve(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=R(i[r],{dt:ge}))!=null?s:"")},"");return Wi(e,ge)}return R(t,{dt:ge})}function Wr(t,i={}){let e=E.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let p in d){let h=d[p],m=$r(h),b=oe(p,r)?vn(c):vn(c,Bt(p));if(ie(m))l.push({node:m,path:b});else{let D=ji(b),I=Hi(m,b,n,[r]);Hr(a,D,I);let N=b;n&&N.startsWith(n+"-")&&(N=N.slice(n.length+1)),s.push(N.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Be(o,u)}}var re={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Wr(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,d,c;let{preset:p,options:h}=i,m,b,D,I,N,q,st;if(C(p)&&h.transform!=="strict"){let{primitive:at,semantic:lt,extend:ut}=p,We=lt||{},{colorScheme:dt}=We,ct=fe(We,["colorScheme"]),pt=ut||{},{colorScheme:ht}=pt,Ge=fe(pt,["colorScheme"]),ze=dt||{},{dark:ft}=ze,gt=fe(ze,["dark"]),mt=ht||{},{dark:bt}=mt,yt=fe(mt,["dark"]),vt=C(at)?this._toVariables({primitive:at},h):{},Dt=C(ct)?this._toVariables({semantic:ct},h):{},Ct=C(gt)?this._toVariables({light:gt},h):{},Ln=C(ft)?this._toVariables({dark:ft},h):{},Pn=C(Ge)?this._toVariables({semantic:Ge},h):{},xn=C(yt)?this._toVariables({light:yt},h):{},Rn=C(bt)?this._toVariables({dark:bt},h):{},[ko,Bo]=[(r=vt.declarations)!=null?r:"",vt.tokens],[Vo,$o]=[(s=Dt.declarations)!=null?s:"",Dt.tokens||[]],[Uo,jo]=[(a=Ct.declarations)!=null?a:"",Ct.tokens||[]],[Ho,Wo]=[(l=Ln.declarations)!=null?l:"",Ln.tokens||[]],[Go,zo]=[(u=Pn.declarations)!=null?u:"",Pn.tokens||[]],[Ko,qo]=[(d=xn.declarations)!=null?d:"",xn.tokens||[]],[Yo,Zo]=[(c=Rn.declarations)!=null?c:"",Rn.tokens||[]];m=this.transformCSS(t,ko,"light","variable",h,n,o),b=Bo;let Xo=this.transformCSS(t,`${Vo}${Uo}`,"light","variable",h,n,o),Qo=this.transformCSS(t,`${Ho}`,"dark","variable",h,n,o);D=`${Xo}${Qo}`,I=[...new Set([...$o,...jo,...Wo])];let Jo=this.transformCSS(t,`${Go}${Ko}color-scheme:light`,"light","variable",h,n,o),er=this.transformCSS(t,`${Yo}color-scheme:dark`,"dark","variable",h,n,o);N=`${Jo}${er}`,q=[...new Set([...zo,...qo,...Zo])],st=R(p.css,{dt:ge})}return{primitive:{css:m,tokens:b},semantic:{css:D,tokens:I},global:{css:N,tokens:q},style:st}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let d,c,p;if(C(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),m=i,{colorScheme:b,extend:D,css:I}=m,N=fe(m,["colorScheme","extend","css"]),q=D||{},{colorScheme:st}=q,at=fe(q,["colorScheme"]),lt=b||{},{dark:ut}=lt,We=fe(lt,["dark"]),dt=st||{},{dark:ct}=dt,pt=fe(dt,["dark"]),ht=C(N)?this._toVariables({[h]:se(se({},N),at)},e):{},Ge=C(We)?this._toVariables({[h]:se(se({},We),pt)},e):{},ze=C(ut)?this._toVariables({[h]:se(se({},ut),ct)},e):{},[ft,gt]=[(a=ht.declarations)!=null?a:"",ht.tokens||[]],[mt,bt]=[(l=Ge.declarations)!=null?l:"",Ge.tokens||[]],[yt,vt]=[(u=ze.declarations)!=null?u:"",ze.tokens||[]],Dt=this.transformCSS(h,`${ft}${mt}`,"light","variable",e,o,r,s),Ct=this.transformCSS(h,yt,"dark","variable",e,o,r,s);d=`${Dt}${Ct}`,c=[...new Set([...gt,...bt,...vt])],p=R(I,{dt:ge})}return{css:d,tokens:c,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${R(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(ie(d)&&Object.hasOwn(d,"css")){let c=Fe(d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,p])=>d.push(`${c}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Fe(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&et.test(this.value)){let c=this.value.trim().replace(et,p=>{var h;let m=p.slice(1,-1),b=this.tokens[m];if(!b)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let D=b.computed(a,l,u);return Array.isArray(D)&&D.length===2?`light-dark(${D[0].value},${D[1].value})`:(h=D?.value)!=null?h:"__UNRESOLVED__"});d=$i.test(c.replace(Ui,"0"))?`calc(${c})`:c}return de(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let p=oe(d,i.variable.excludedKeyRegex)?l:l?`${l}.${ki(d)}`:ki(d),h=u?`${u}.${d}`:d;ie(c)?s(c,p,h):(o[p]||(o[p]={paths:[],computed:(m,b={},D=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,b.binding,D);if(m&&m!=="none")for(let I=0;I<o[p].paths.length;I++){let N=o[p].paths[I];if(N.scheme===m)return N.computed(m,b.binding,D)}return o[p].paths.map(I=>I.computed(I.scheme,b[I.scheme],D))}}),o[p].paths.push({path:h,value:c,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!oe(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=fe(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Be(C(i)?`${t}${i},${t} ${i}`:t,n):Be(t,Be(i??":root,:host",n))},transformCSS(t,i,e,n,o={},r,s,a){if(C(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((d,{type:c,selector:p})=>(C(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,c,i)),d),""):Be(a??":root,:host",i)}if(l){let u={name:"primeui",order:"primeui"};ie(l)&&(u.name=R(l.name,{name:t,type:n})),C(u.name)&&(i=Be(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},E={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=yn(se({},i),{options:se(se({},this.defaults.options),i.options)}),this._tokens=re.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Z.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=yn(se({},this.theme),{preset:t}),this._tokens=re.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Z.emit("preset:change",t),Z.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=yn(se({},this.theme),{options:t}),this.clearLoadedStyleNames(),Z.emit("options:change",t),Z.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return re.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return re.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return re.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return re.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return re.getPreset(o)},getLayerOrderCSS(t=""){return re.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return re.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return re.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return re.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Z.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Z.emit("theme:load"))}};var Gi=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Gr=0,zi=(()=>{class t{document=f(H);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Gr}`,id:d=void 0,media:c=void 0,nonce:p=void 0,first:h=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let b=this.document.head;_i(s,"nonce",p),h&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),Pt(s,{type:"text/css",media:c,nonce:p,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $e={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},zr=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,j=(()=>{class t{name="base";useStyle=f(zi);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Ve`${R(e,{dt:ge})}`);return r?this.useStyle.use(Fe(r),g({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>E.transformCSS(e.name||this.name,`${o}${Ve`${n}`}`));loadBaseCSS=(e={})=>this.load(zr,e);loadBaseStyle=(e={},n="")=>this.load(Gi,e,(o="")=>E.transformCSS(e.name||this.name,`${o}${Ve`${n}`}`));getCommonTheme=e=>E.getCommon(this.name,e);getComponentTheme=e=>E.getComponent(this.name,e);getPresetTheme=(e,n,o)=>E.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>E.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=R(this.css,{dt:ge}),r=Fe(Ve`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>E.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[E.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Ve`${R(this.style,{dt:ge})}`,a=Fe(E.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kr=(()=>{class t{theme=M(void 0);csp=M({nonce:void 0});isThemeChanged=!1;document=f(H);baseStyle=f(j);constructor(){L(()=>{Z.on("theme:change",e=>{le(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),L(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){E.clearLoadedStyleNames(),Z.clear()}onThemeChange(e){E.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,g({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,g({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(g({name:"global-style"},s),r),E.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_n=(()=>{class t extends Kr{ripple=M(!1);platformId=f(Me);inputStyle=M(null);inputVariant=M(null);overlayAppendTo=M("self");overlayOptions={};csp=M({nonce:void 0});unstyled=M(void 0);pt=M(void 0);ptOptions=M(void 0);filterMatchModeOptions={text:[V.STARTS_WITH,V.CONTAINS,V.NOT_CONTAINS,V.ENDS_WITH,V.EQUALS,V.NOT_EQUALS],numeric:[V.EQUALS,V.NOT_EQUALS,V.LESS_THAN,V.LESS_THAN_OR_EQUAL_TO,V.GREATER_THAN,V.GREATER_THAN_OR_EQUAL_TO],date:[V.DATE_IS,V.DATE_IS_NOT,V.DATE_BEFORE,V.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ae;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=g(g({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:p,ptOptions:h,pt:m,unstyled:b}=e||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),p&&(this.zIndex=p),m&&this.pt.set(m),h&&this.ptOptions.set(h),b&&this.unstyled.set(b),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qr=new w("PRIME_NG_CONFIG");function rd(...t){let i=t?.map(n=>({provide:qr,useValue:n,multi:!1})),e=Gn(()=>{let n=f(_n);t?.forEach(o=>n.setConfig(o))});return Un([...i,e])}var Ki=(()=>{class t extends j{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ce=new w("PARENT_INSTANCE"),G=(()=>{class t{document=f(H);platformId=f(Me);el=f(Y);injector=f(Et);cd=f(Ne);renderer=f(Q);config=f(_n);$parentInstance=f(ce,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=f(Ki);baseStyle=f(j);scopedStyleEl;parent=this.$params.parent;cn=be;_themeScopedListener;themeChangeListenerMap=new Map;dt=S();unstyled=S();pt=S();ptOptions=S();$attrSelector=Je("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=M(void 0);directiveUnstyled=M(void 0);$unstyled=K(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=K(()=>R(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>R(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||R(e,this.$params))}get $style(){return g(g({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){L(e=>{this.document&&!cn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),L(e=>{this.document&&!cn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Rt(e)?e(...n):gn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return kt(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){$e.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),$e.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);C(e)&&this.baseStyle.load(e,g({name:"global"},this.$styleOptions))}_loadCoreStyles(){!$e.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),$e.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,g({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,g({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(g({name:"global-style"},this.$styleOptions),r),E.setLoadedStyleName("common")}if(!E.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,g({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(g({name:`${this.$style?.name}-style`},this.$styleOptions),n),E.setLoadedStyleName(this.$style?.name)}if(!E.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,g({name:"layer-order",first:!0},this.$styleOptions)),E.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,g({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),$e.clearLoadedStyleNames();let o=n.bind(this);this.themeChangeListenerMap.set(e,o),Z.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Z.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,d=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,$(g({},o),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):g(g(g({},u),d),c):g(g({},d),c)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&C(this.$pt()?.["data-pc-section"]);return e!=="transition"&&$(g({},e==="root"&&$(g({[`${n}name`]:ve(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:ve(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:ve(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return X(r)||bn(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,u=ve(n),d=ve(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),d=s(e.value);return u===void 0&&d===void 0?void 0:X(d)?d:X(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):g(g({},u),d):d}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,g(g({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=gn(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,g({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:be(this._getOptionValue(this.$style.classes,e,g(g({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,g(g({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,g(g({},this.$params),o));return g(g({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=_({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[x([Ki,j]),Te]})}return t})();var En=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=q=>{if(q)return getComputedStyle(q).getPropertyValue("position")==="relative"?q:r(q.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),h=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},m,b,D="top";l.top+a+s.height>c.height?(m=l.top-h.top-s.height,D="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-h.top,D="top");let I=l.left+s.width-c.width,N=l.left-h.left;if(s.width>c.width?b=(l.left-h.left)*-1:I>0?b=N-I:b=l.left-h.left,e.style.top=m+"px",e.style.left=b+"px",e.style.transformOrigin=D,o){let q=Qe(/-anchor-gutter$/)?.value;e.style.marginTop=D==="bottom"?`calc(${q??"2px"} * -1)`:q??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),m,b;d.top+l+s>h.height?(m=d.top+c-s,e.style.transformOrigin="bottom",m<0&&(m=c)):(m=l+d.top+c,e.style.transformOrigin="top"),d.left+a>h.width?b=Math.max(0,d.left+p+u-a):b=d.left+p,e.style.top=m+"px",e.style.left=b+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);d<0?e.scrollTop=c+d:d+h>p&&(e.scrollTop=c+d-p+h)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Cd(){pi({variableName:Cn("scrollbar.width").name})}function _d(){hi({variableName:Cn("scrollbar.width").name})}var qi=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=En.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Yi=(()=>{class t extends G{autofocus=!1;focused=!1;platformId=f(Me);document=f(H);host=f(Y);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){xe(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=En.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[T]})}return t})();var P=(()=>{class t{el;renderer;pBind=S(void 0);_attrs=M(void 0);attrs=K(()=>this._attrs()||this.pBind());styles=K(()=>this.attrs()?.style);classes=K(()=>be(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,L(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=kn(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Oi(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(v(Y),v(Q))};static \u0275dir=_({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(Qn(o.styles()),z(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({})}return t})();var Xi=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Yr=`
    ${Xi}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Zr={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":C(i)&&String(i).length===1,"p-badge-dot":de(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Qi=(()=>{class t extends j{name="badge";style=Yr;classes=Zr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var Ji=new w("BADGE_INSTANCE");var wn=(()=>{class t extends G{componentName="Badge";$pcBadge=f(Ji,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:F});_componentStyle=f(Qi);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(ee("data-p",o.dataP),z(o.cn(o.cx("root"),o.styleClass())),Xn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([Qi,{provide:Ji,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T],decls:1,vars:1,template:function(n,o){n&1&&It(0),n&2&&Tt(o.value())},dependencies:[ue,De,Zi],encapsulation:2,changeDetection:0})}return t})(),eo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({imports:[wn,De,De]})}return t})();var Qr=["*"],Jr={root:"p-fluid"},to=(()=>{class t extends j{name="fluid";classes=Jr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var no=new w("FLUID_INSTANCE"),An=(()=>{class t extends G{componentName="Fluid";$pcFluid=f(no,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(to);static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&z(o.cx("root"))},features:[x([to,{provide:no,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T],ngContentSelectors:Qr,decls:1,vars:0,template:function(n,o){n&1&&(Ee(),Se(0))},dependencies:[ue],encapsulation:2,changeDetection:0})}return t})();var es=["*"],ts=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,io=(()=>{class t extends j{name="baseicon";css=ts;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oo=(()=>{class t extends G{spin=!1;_componentStyle=f(io);getClassNames(){return be("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&z(o.getClassNames())},inputs:{spin:[2,"spin","spin",F]},features:[x([io]),T],ngContentSelectors:es,decls:1,vars:0,template:function(n,o){n&1&&(Ee(),Se(0))},encapsulation:2,changeDetection:0})}return t})();var ns=["data-p-icon","spinner"],ro=(()=>{class t extends oo{pathId;onInit(){this.pathId="url(#"+Je()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["","data-p-icon","spinner"]],features:[T],attrs:ns,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(_t(),Xt(0,"g"),Jt(1,"path",0),Qt(),Xt(2,"defs")(3,"clipPath",1),Jt(4,"rect",2),Qt()()),n&2&&(ee("clip-path",o.pathId),W(3),Kn("id",o.pathId))},encapsulation:2})}return t})();var so=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var is=`
    ${so}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,os={root:"p-ink"},ao=(()=>{class t extends j{name="ripple";style=is;classes=os;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var lo=(()=>{class t extends G{componentName="Ripple";zone=f(jn);_componentStyle=f(ao);animationListener;mouseDownListener;timeout;constructor(){super(),L(()=>{xe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&ye(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!hn(n)&&!fn(n)){let a=Math.max(mi(this.el.nativeElement),Di(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=vi(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-fn(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-hn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&Ae(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&ye(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&ye(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&ye(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ci(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=_({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[x([ao]),T]})}return t})(),Pc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({})}return t})();var uo=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var rs=["content"],ss=["loadingicon"],as=["icon"],ls=["*"],bo=(t,i)=>({class:t,pt:i});function us(t,i){t&1&&zn(0)}function ds(t,i){if(t&1&&Ye(0,"span",7),t&2){let e=te(3);z(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),O("pBind",e.ptm("loadingIcon")),ee("aria-hidden",!0)}}function cs(t,i){if(t&1&&(_t(),Ye(0,"svg",8)),t&2){let e=te(3);z(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),O("pBind",e.ptm("loadingIcon"))("spin",!0),ee("aria-hidden",!0)}}function ps(t,i){if(t&1&&(wt(0),_e(1,ds,1,4,"span",3)(2,cs,1,5,"svg",6),At()),t&2){let e=te(2);W(),O("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),W(),O("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function hs(t,i){}function fs(t,i){if(t&1&&_e(0,hs,0,0,"ng-template",9),t&2){let e=te(2);O("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function gs(t,i){if(t&1&&(wt(0),_e(1,ps,3,2,"ng-container",2)(2,fs,1,1,null,5),At()),t&2){let e=te();W(),O("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),W(),O("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",en(3,bo,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function ms(t,i){if(t&1&&Ye(0,"span",7),t&2){let e=te(2);z(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),O("pBind",e.ptm("icon")),ee("data-p",e.dataIconP)}}function bs(t,i){}function ys(t,i){if(t&1&&_e(0,bs,0,0,"ng-template",9),t&2){let e=te(2);O("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function vs(t,i){if(t&1&&(wt(0),_e(1,ms,1,4,"span",3)(2,ys,1,1,null,5),At()),t&2){let e=te();W(),O("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),W(),O("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",en(3,bo,e.cx("icon"),e.ptm("icon")))}}function Ds(t,i){if(t&1&&(Yt(0,"span",7),It(1),Zt()),t&2){let e=te();z(e.cx("label")),O("pBind",e.ptm("label")),ee("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),W(),Tt(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Cs(t,i){if(t&1&&Ye(0,"p-badge",10),t&2){let e=te();O("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var _s={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ue=(()=>{class t extends j{name="button";style=uo;classes=_s;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var co=new w("BUTTON_INSTANCE"),po=new w("BUTTON_DIRECTIVE_INSTANCE"),ho=new w("BUTTON_LABEL_INSTANCE"),fo=new w("BUTTON_ICON_INSTANCE"),Ce={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},go=(()=>{class t extends G{ptButtonLabel=S();pButtonLabelPT=S();pButtonLabelUnstyled=S();$pcButtonLabel=f(ho,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=_({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&Oe("p-button-label",!o.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[x([Ue,{provide:ho,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T]})}return t})(),mo=(()=>{class t extends G{ptButtonIcon=S();pButtonIconPT=S();pButtonUnstyled=S();$pcButtonIcon=f(fo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=_({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&Oe("p-button-icon",!o.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[x([Ue,{provide:fo,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T]})}return t})(),sp=(()=>{class t extends G{$pcButtonDirective=f(po,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});_componentStyle=f(Ue);ptButtonDirective=S();pButtonPT=S();pButtonUnstyled=S();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),L(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),L(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=S(void 0,{transform:F});iconSignal=tn(mo);labelSignal=tn(go);isIconOnly=K(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ce);pcFluid=f(An,{optional:!0,host:!0,skipSelf:!0});isTextButton=K(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&Ae(this.htmlElement,this.getStyleClass().join(" ")),xe(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[Ce.button,Ce.component];return this.icon&&!this.label&&de(this.htmlElement.textContent)&&e.push(Ce.iconOnly),this.loading&&(e.push(Ce.disabled,Ce.loading),!this.icon&&this.label&&e.push(Ce.labelOnly),this.icon&&!this.label&&!de(this.htmlElement.textContent)&&e.push(Ce.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!ke(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=xt("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ke(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,o=!this.$unstyled()&&this.getIconClass(),r=xt("span",{class:this.cn(this.cx("icon"),n,o),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=ke(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=ke(this.htmlElement,'[data-pc-section="buttonicon"]'),n=ke(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=_({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&Yn(r,o.iconSignal,mo,5)(r,o.labelSignal,go,5),n&2&&Zn(2)},hostVars:4,hostBindings:function(n,o){n&2&&Oe("p-button-icon-only",!o.$unstyled()&&o.isIconOnly())("p-button-text",!o.$unstyled()&&o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",F],plain:[2,"plain","plain",F],raised:[2,"raised","raised",F],size:"size",outlined:[2,"outlined","outlined",F],rounded:[2,"rounded","rounded",F],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[x([Ue,{provide:po,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T]})}return t})(),Es=(()=>{class t extends G{componentName="Button";hostName="";$pcButton=f(co,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(P,{self:!0});_componentStyle=f(Ue);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=S(void 0,{transform:F});onClick=new me;onFocus=new me;onBlur=new me;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(An,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&qn(r,rs,5)(r,ss,5)(r,as,5)(r,xi,4),n&2){let s;Ze(s=Xe())&&(o.contentTemplate=s.first),Ze(s=Xe())&&(o.loadingIconTemplate=s.first),Ze(s=Xe())&&(o.iconTemplate=s.first),Ze(s=Xe())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",F],raised:[2,"raised","raised",F],rounded:[2,"rounded","rounded",F],text:[2,"text","text",F],plain:[2,"plain","plain",F],outlined:[2,"outlined","outlined",F],link:[2,"link","link",F],tabindex:[2,"tabindex","tabindex",nn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",F],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",F],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[x([Ue,{provide:co,useExisting:t},{provide:ce,useExisting:t}]),he([P]),T],ngContentSelectors:ls,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(Ee(),Yt(0,"button",0),Ft("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Se(1),_e(2,us,1,0,"ng-container",1)(3,gs,3,6,"ng-container",2)(4,vs,3,6,"ng-container",2)(5,Ds,2,6,"span",3)(6,Cs,1,4,"p-badge",4),Zt()),n&2&&(z(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),O("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),ee("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),W(2),O("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),W(),O("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),W(),O("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),W(),O("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),W(),O("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[ue,sn,ln,an,lo,Yi,ro,eo,wn,De,P],encapsulation:2,changeDetection:0})}return t})(),ap=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({imports:[ue,Es,De,De]})}return t})();var wo=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(v(Q),v(Y))};static \u0275dir=_({type:t})}return t})(),Ss=(()=>{class t extends wo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=_({type:t,features:[T]})}return t})(),Ao=new w("");var ws={provide:Ao,useExisting:Kt(()=>Fo),multi:!0};function As(){let t=we()?we().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Fs=new w(""),Fo=(()=>{class t extends wo{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!As())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(v(Q),v(Y),v(Fs,8))};static \u0275dir=_({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&Ft("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[x([ws]),T]})}return t})();var Is=new w(""),Ts=new w("");function Io(t){return t!=null}function To(t){return qt(t)?Bn(t):t}function Mo(t){let i={};return t.forEach(e=>{i=e!=null?g(g({},i),e):i}),Object.keys(i).length===0?null:i}function Oo(t,i){return i.map(e=>e(t))}function Ms(t){return!t.validate}function No(t){return t.map(i=>Ms(i)?i:e=>i.validate(e))}function Os(t){if(!t)return null;let i=t.filter(Io);return i.length==0?null:function(e){return Mo(Oo(e,i))}}function Lo(t){return t!=null?Os(No(t)):null}function Ns(t){if(!t)return null;let i=t.filter(Io);return i.length==0?null:function(e){let n=Oo(e,i).map(To);return $n(n).pipe(Vn(Mo))}}function Po(t){return t!=null?Ns(No(t)):null}function yo(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Ls(t){return t._rawValidators}function Ps(t){return t._rawAsyncValidators}function Fn(t){return t?Array.isArray(t)?t:[t]:[]}function jt(t,i){return Array.isArray(t)?t.includes(i):t===i}function vo(t,i){let e=Fn(i);return Fn(t).forEach(o=>{jt(e,o)||e.push(o)}),e}function Do(t,i){return Fn(i).filter(e=>!jt(t,e))}var Ht=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Lo(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Po(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},In=class extends Ht{name;get formDirective(){return null}get path(){return null}},rt=class extends Ht{_parent=null;name=null;valueAccessor=null},Tn=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Fp=(()=>{class t extends Tn{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(v(rt,2))};static \u0275dir=_({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Oe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[T]})}return t})();var tt="VALID",Ut="INVALID",je="PENDING",nt="DISABLED",Ie=class{},Wt=class extends Ie{value;source;constructor(i,e){super(),this.value=i,this.source=e}},it=class extends Ie{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ot=class extends Ie{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},He=class extends Ie{status;source;constructor(i,e){super(),this.status=i,this.source=e}};var Mn=class extends Ie{source;constructor(i){super(),this.source=i}};function xs(t){return(Gt(t)?t.validators:t)||null}function Rs(t){return Array.isArray(t)?Lo(t):t||null}function ks(t,i){return(Gt(i)?i.asyncValidators:t)||null}function Bs(t){return Array.isArray(t)?Po(t):t||null}function Gt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var On=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return le(this.statusReactive)}set status(i){le(()=>this.statusReactive.set(i))}_status=K(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===tt}get invalid(){return this.status===Ut}get pending(){return this.status==je}get disabled(){return this.status===nt}get enabled(){return this.status!==nt}errors;get pristine(){return le(this.pristineReactive)}set pristine(i){le(()=>this.pristineReactive.set(i))}_pristine=K(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return le(this.touchedReactive)}set touched(i){le(()=>this.touchedReactive.set(i))}_touched=K(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new ae;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(vo(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(vo(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Do(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Do(i,this._rawAsyncValidators))}hasValidator(i){return jt(this._rawValidators,i)}hasAsyncValidator(i){return jt(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched($(g({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ot(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new ot(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty($(g({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new it(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new it(!0,n))}markAsPending(i={}){this.status=je;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new He(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending($(g({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=nt,this.errors=null,this._forEachChild(o=>{o.disable($(g({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wt(this.value,n)),this._events.next(new He(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=tt,this._forEachChild(n=>{n.enable($(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors($(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===tt||this.status===je)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wt(this.value,e)),this._events.next(new He(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity($(g({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?nt:tt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=je,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=To(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new He(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new me,this.statusChanges=new me}_calculateStatus(){return this._allControlsDisabled()?nt:this.errors?Ut:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(je)?je:this._anyControlsHaveStatus(Ut)?Ut:tt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new it(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ot(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Gt(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Rs(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Bs(this._rawAsyncValidators)}};var xo=new w("",{factory:()=>Nn}),Nn="always";function Vs(t,i){return[...i.path,t]}function $s(t,i,e=Nn){js(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Hs(t,i),Gs(t,i),Ws(t,i),Us(t,i)}function Co(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Us(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function js(t,i){let e=Ls(t);i.validator!==null?t.setValidators(yo(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ps(t);i.asyncValidator!==null?t.setAsyncValidators(yo(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();Co(i._rawValidators,o),Co(i._rawAsyncValidators,o)}function Hs(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ro(t,i)})}function Ws(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ro(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Ro(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Gs(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function zs(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Ks(t){return Object.getPrototypeOf(t.constructor)===Ss}function qs(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Fo?e=r:Ks(r)?n=r:o=r}),o||n||e||null}function _o(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Eo(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ys=class extends On{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(xs(e),ks(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Gt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Eo(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Mn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){_o(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){_o(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Eo(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Zs={provide:rt,useExisting:Kt(()=>Xs)},So=Promise.resolve(),Xs=(()=>{class t extends rt{_changeDetectorRef;callSetDisabledState;control=new Ys;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new me;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=qs(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),zs(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$s(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){So.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&F(n);So.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Vs(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(v(In,9),v(Is,10),v(Ts,10),v(Ao,10),v(Ne,8),v(xo,8))};static \u0275dir=_({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[x([Zs]),T,Te]})}return t})();var Qs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({})}return t})();var Tp=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:xo,useValue:e.callSetDisabledState??Nn}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=k({imports:[Qs]})}return t})();export{we as a,tr as b,on as c,Le as d,nr as e,Pe as f,ri as g,si as h,sr as i,ar as j,di as k,sn as l,an as m,ln as n,ur as o,ue as p,dr as q,un as r,fr as s,xe as t,Kl as u,ci as v,Ae as w,ye as x,fi as y,gi as z,vr as A,Dr as B,Cr as C,tu as D,mi as E,nu as F,Sr as G,iu as H,xt as I,ou as J,wr as K,ke as L,ru as M,su as N,au as O,hn as P,lu as Q,vi as R,Di as S,fn as T,uu as U,du as V,cu as W,pu as X,hu as Y,_i as Z,fu as _,de as $,C as aa,Mi as ba,Oi as ca,yu as da,R as ea,vu as fa,Du as ga,Je as ha,wu as ia,Au as ja,xi as ka,De as la,Fu as ma,Mu as na,Cn as oa,j as pa,rd as qa,ce as ra,G as sa,P as ta,Zi as ua,oo as va,ro as wa,Cd as xa,_d as ya,qi as za,Yi as Aa,wn as Ba,eo as Ca,An as Da,lo as Ea,Pc as Fa,mo as Ga,sp as Ha,Es as Ia,ap as Ja,Ao as Ka,rt as La,Fp as Ma,Xs as Na,Tp as Oa};

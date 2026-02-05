import{C as ot,E as It,Ea as ct,Fa as Ft,Ia as Lt,Ja as St,L as Nt,M as Mt,N as H,Oa as At,R as rt,T as K,ca as st,ha as kt,ka as Et,la as lt,n as tt,p as z,pa as P,ra as V,sa as R,t as et,ta as b,ua as x,va as nt}from"./chunk-A23SKPT2.js";import{$ as W,Ab as Tt,Bb as y,Cb as T,Db as _t,Ea as l,Eb as Ct,Fb as xt,Jb as m,Kb as w,O,P as N,Q as ft,Qb as A,S as M,Sa as v,Ta as ht,U as o,Wa as k,Xa as h,Xb as Bt,Ya as j,Zb as p,_ as $,aa as B,ac as C,bc as Dt,cb as D,cc as Y,fb as E,gb as F,ja as G,jb as r,kb as c,kc as I,la as vt,lb as u,lc as wt,mb as U,oa as d,pb as Z,qa as mt,sb as J,tb as X,ub as gt,vb as g,wb as _,xb as L,yb as S,zb as yt}from"./chunk-NHEMQ547.js";var Xt=["data-p-icon","chevron-left"],Pt=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["","data-p-icon","chevron-left"]],features:[h],attrs:Xt,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(B(),Z(0,"path",0))},encapsulation:2})}return e})();var Yt=["data-p-icon","chevron-right"],Vt=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["","data-p-icon","chevron-right"]],features:[h],attrs:Yt,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(B(),Z(0,"path",0))},encapsulation:2})}return e})();var Rt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var Q=["*"],te=["previcon"],ee=["nexticon"],Ut=["content"],ne=["prevButton"],ie=["nextButton"],ae=["inkbar"],oe=["tabs"];function re(e,f){e&1&&J(0)}function se(e,f){if(e&1&&j(0,re,1,0,"ng-container",11),e&2){let t=_(2);r("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function le(e,f){e&1&&(B(),U(0,"svg",10))}function ce(e,f){if(e&1){let t=X();c(0,"button",9,3),g("click",function(){$(t);let n=_();return W(n.onPrevButtonClick())}),E(2,se,1,1,"ng-container")(3,le,1,0,":svg:svg",10),u()}if(e&2){let t=_();m(t.cx("prevButton")),r("pBind",t.ptm("prevButton")),D("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),F(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function de(e,f){e&1&&J(0)}function ue(e,f){if(e&1&&j(0,de,1,0,"ng-container",11),e&2){let t=_(2);r("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function pe(e,f){e&1&&(B(),U(0,"svg",12))}function be(e,f){if(e&1){let t=X();c(0,"button",9,4),g("click",function(){$(t);let n=_();return W(n.onNextButtonClick())}),E(2,ue,1,1,"ng-container")(3,pe,1,0,":svg:svg",12),u()}if(e&2){let t=_();m(t.cx("nextButton")),r("pBind",t.ptm("nextButton")),D("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),F(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function fe(e,f){e&1&&S(0)}function ve(e,f){e&1&&J(0)}function me(e,f){if(e&1&&j(0,ve,1,0,"ng-container",1),e&2){let t=_(),i=xt(1);r("ngTemplateOutlet",t.content()?t.content():i)}}var he={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},qt=(()=>{class e extends P{name="tabs";style=Rt;classes=he;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Ot=new M("TABS_INSTANCE"),q=(()=>{class e extends R{componentName="Tabs";$pcTabs=o(Ot,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Y(void 0);scrollable=C(!1,{transform:I});lazy=C(!1,{transform:I});selectOnFocus=C(!1,{transform:I});showNavigators=C(!0,{transform:I});tabindex=C(0,{transform:wt});id=G(kt("pn_id_"));_componentStyle=o(qt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(D("id",n.id()),m(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[A([qt,{provide:Ot,useExisting:e},{provide:V,useExisting:e}]),k([b]),h],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(L(),S(0))},dependencies:[z,x],encapsulation:2,changeDetection:0})}return e})(),ge={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},jt=(()=>{class e extends P{name="tab";classes=ge;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var ye={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},zt=(()=>{class e extends P{name="tablist";classes=ye;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Ht=new M("TABLIST_INSTANCE"),it=(()=>{class e extends R{componentName="TabList";$pcTabList=o(Ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=o(O(()=>q));isPrevButtonEnabled=G(!1);isNextButtonEnabled=G(!1);resizeObserver;showNavigators=p(()=>this.pcTabs.showNavigators());tabindex=p(()=>this.pcTabs.tabindex());scrollable=p(()=>this.pcTabs.scrollable());_componentStyle=o(zt);constructor(){super(),vt(()=>{this.pcTabs.value(),et(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&et(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=K(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=ot(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=K(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,s=n>=a?a:n;t.scrollLeft=ot(t)?-1*s:s}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,s=Math.abs(t.scrollLeft),at=K(t);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&Math.abs(s-n+at)>1)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=Nt(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=It(a)+"px",i.style.left=rt(a).left-rt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+K(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=v({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&yt(a,te,4)(a,ee,4)(a,Et,4),i&2){let s;y(s=T())&&(n.prevIconTemplate=s.first),y(s=T())&&(n.nextIconTemplate=s.first),y(s=T())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&Tt(Ut,5)(ne,5)(ie,5)(ae,5)(oe,5),i&2){let a;y(a=T())&&(n.content=a.first),y(a=T())&&(n.prevButton=a.first),y(a=T())&&(n.nextButton=a.first),y(a=T())&&(n.inkbar=a.first),y(a=T())&&(n.tabs=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&m(n.cx("root"))},features:[A([zt,{provide:Ht,useExisting:e},{provide:V,useExisting:e}]),k([b]),h],ngContentSelectors:Q,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let a=X();L(),E(0,ce,4,7,"button",5),c(1,"div",6,0),g("scroll",function(at){return $(a),W(n.onScroll(at))}),c(3,"div",7,1),S(5),U(6,"span",8,2),u()(),E(8,be,4,7,"button",5)}i&2&&(F(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),l(),m(n.cx("content")),r("pBind",n.ptm("content")),l(2),m(n.cx("tabList")),r("pBind",n.ptm("tabList")),l(3),m(n.cx("activeBar")),r("pBind",n.ptm("activeBar")),l(2),F(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[z,tt,Pt,Vt,Ft,ct,lt,x,b],encapsulation:2,changeDetection:0})}return e})(),Kt=new M("TAB_INSTANCE"),ut=(()=>{class e extends R{componentName="Tab";$pcTab=o(Kt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Y();disabled=C(!1,{transform:I});pcTabs=o(O(()=>q));pcTabList=o(O(()=>it));el=o(mt);_componentStyle=o(jt);ripple=p(()=>this.config.ripple());id=p(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=p(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=p(()=>st(this.pcTabs.value(),this.value()));tabindex=p(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?H(n,"data-p-disabled")||H(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?H(n,"data-p-disabled")||H(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){Mt(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){et(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&g("focus",function(s){return n.onFocus(s)})("click",function(s){return n.onClick(s)})("keydown",function(s){return n.onKeyDown(s)}),i&2&&(D("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),m(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[A([jt,{provide:Kt,useExisting:e},{provide:V,useExisting:e}]),k([ct,b]),h],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(L(),S(0))},dependencies:[z,lt,x],encapsulation:2,changeDetection:0})}return e})(),Te={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},Qt=(()=>{class e extends P{name="tabpanel";classes=Te;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var $t=new M("TABPANEL_INSTANCE"),pt=(()=>{class e extends R{componentName="TabPanel";$pcTabPanel=o($t,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(b,{self:!0});pcTabs=o(O(()=>q));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=C(!1,{transform:I});value=Y(void 0);content=Dt("content");id=p(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=p(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=p(()=>st(this.pcTabs.value(),this.value()));isLazyEnabled=p(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=p(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=o(Qt);static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabpanel"]],contentQueries:function(i,n,a){i&1&&_t(a,n.content,Ut,5),i&2&&Ct()},hostVars:7,hostBindings:function(i,n){i&2&&(gt("hidden",!n.active()),D("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),m(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[A([Qt,{provide:$t,useExisting:e},{provide:V,useExisting:e}]),k([b]),h],ngContentSelectors:Q,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(L(),j(0,fe,1,0,"ng-template",null,0,Bt),E(2,me,1,1,"ng-container")),i&2&&(l(2),F(n.shouldRender()?2:-1))},dependencies:[tt,x],encapsulation:2,changeDetection:0})}return e})(),_e={root:"p-tabpanels"},Wt=(()=>{class e extends P{name="tabpanels";classes=_e;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Gt=new M("TABPANELS_INSTANCE"),bt=(()=>{class e extends R{componentName="TabPanels";$pcTabPanels=o(Gt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(b,{self:!0});_componentStyle=o(Wt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(D("role","presentation"),m(n.cx("root")))},features:[A([Wt,{provide:Gt,useExisting:e},{provide:V,useExisting:e}]),k([b]),h],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(L(),S(0))},dependencies:[z,x],encapsulation:2,changeDetection:0})}return e})(),Zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ht({type:e});static \u0275inj=ft({imports:[q,bt,pt,it,ut,x,x]})}return e})();var Jt=class e{value=0;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["cv-projects-page"]],decls:24,vars:10,consts:[[1,"contaniner"],[1,"card"],[1,"flex","mb-2","gap-2","justify-end"],["rounded","true","styleClass","w-8 h-8 p-0","label","1",3,"onClick","outlined"],["rounded","true","styleClass","w-8 h-8 p-0","label","2",3,"onClick","outlined"],["rounded","true","styleClass","w-8 h-8 p-0","label","3",3,"onClick","outlined"],[3,"value"],[1,"m-0"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"p-button",3),g("onClick",function(){return i.value=0}),u(),c(4,"p-button",4),g("onClick",function(){return i.value=1}),u(),c(5,"p-button",5),g("onClick",function(){return i.value=2}),u()(),c(6,"p-tabs",6)(7,"p-tablist")(8,"p-tab",6),w(9,"Header I"),u(),c(10,"p-tab",6),w(11,"Header II"),u(),c(12,"p-tab",6),w(13,"Header III"),u()(),c(14,"p-tabpanels")(15,"p-tabpanel",6)(16,"p",7),w(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),u()(),c(18,"p-tabpanel",6)(19,"p",7),w(20," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),u()(),c(21,"p-tabpanel",6)(22,"p",7),w(23," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),u()()()()()()),t&2&&(l(3),r("outlined",i.value!==0),l(),r("outlined",i.value!==1),l(),r("outlined",i.value!==2),l(),r("value",i.value),l(2),r("value",0),l(2),r("value",1),l(2),r("value",2),l(3),r("value",0),l(3),r("value",1),l(3),r("value",2))},dependencies:[St,Lt,Zt,q,bt,pt,it,ut,At],encapsulation:2,changeDetection:0})};export{Jt as ProjectsPageComponent};

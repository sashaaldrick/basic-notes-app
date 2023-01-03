"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82251],{855712:function(e,o,t){var r=t(295649),n=t(25778),i=t(481936),a=t(827378),p=t(715064),l=t(398846),s=t(592426),u=t(25889),c=t(361747),d=t(313642),m=t(584231),f=t(352071),v=t(824246),Z=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],h=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function g(e){return"function"==typeof e?e():e}var b={},T=a.forwardRef(function(e,o){var t,s=e.anchorEl,d=e.children,h=e.component,b=e.direction,T=e.disablePortal,w=e.modifiers,y=e.open,P=e.ownerState,R=e.placement,x=e.popperOptions,M=e.popperRef,E=e.slotProps,S=e.slots,O=e.TransitionProps,C=(0,i.Z)(e,Z),k=a.useRef(null),L=(0,p.Z)(k,o),N=a.useRef(null),F=(0,p.Z)(N,M),B=a.useRef(F);(0,l.Z)(function(){B.current=F},[F]),a.useImperativeHandle(M,function(){return N.current},[]);var I=function(e,o){if("ltr"===o)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(R,b),W=a.useState(I),D=(0,n.Z)(W,2),j=D[0],A=D[1],U=a.useState(g(s)),z=(0,n.Z)(U,2),H=z[0],_=z[1];a.useEffect(function(){N.current&&N.current.forceUpdate()}),a.useEffect(function(){s&&_(g(s))},[s]),(0,l.Z)(function(){if(H&&y){var e=function(e){A(e.placement)},o=[{name:"preventOverflow",options:{altBoundary:T}},{name:"flip",options:{altBoundary:T}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(o){e(o.state)}}];null!=w&&(o=o.concat(w)),x&&null!=x.modifiers&&(o=o.concat(x.modifiers));var t=(0,u.fi)(H,k.current,(0,r.Z)((0,r.Z)({placement:I},x),{},{modifiers:o}));return B.current(t),function(){t.destroy(),B.current(null)}}},[H,T,w,y,x,I]);var V={placement:j};null!==O&&(V.TransitionProps=O);var q=(0,c.Z)({root:["root"]},m.V,{}),Q=null!==(t=null!=h?h:(void 0===S?{}:S).root)&&void 0!==t?t:"div",X=(0,f.Z)({elementType:Q,externalSlotProps:(void 0===E?{}:E).root,externalForwardedProps:C,additionalProps:{role:"tooltip",ref:L},ownerState:(0,r.Z)((0,r.Z)({},e),P),className:q.root});return(0,v.jsx)(Q,(0,r.Z)((0,r.Z)({},X),{},{children:"function"==typeof d?d(V):d}))}),w=a.forwardRef(function(e,o){var t,p=e.anchorEl,l=e.children,u=e.container,c=e.direction,m=e.disablePortal,f=void 0!==m&&m,Z=e.keepMounted,w=void 0!==Z&&Z,y=e.modifiers,P=e.open,R=e.placement,x=e.popperOptions,M=e.popperRef,E=e.style,S=e.transition,O=void 0!==S&&S,C=e.slotProps,k=e.slots,L=(0,i.Z)(e,h),N=a.useState(!0),F=(0,n.Z)(N,2),B=F[0],I=F[1];if(!w&&!P&&(!O||B))return null;if(u)t=u;else if(p){var W=g(p);t=W&&void 0!==W.nodeType?(0,s.Z)(W).body:(0,s.Z)(null).body}return(0,v.jsx)(d.Z,{disablePortal:f,container:t,children:(0,v.jsx)(T,(0,r.Z)((0,r.Z)({anchorEl:p,direction:void 0===c?"ltr":c,disablePortal:f,modifiers:y,ref:o,open:O?!B:P,placement:void 0===R?"bottom":R,popperOptions:void 0===x?b:x,popperRef:M,slotProps:void 0===C?{}:C,slots:void 0===k?{}:k},L),{},{style:(0,r.Z)({position:"fixed",top:0,left:0,display:!P&&w&&(!O||B)?"none":void 0},E),TransitionProps:O?{in:P,onEnter:function(){I(!1)},onExited:function(){I(!0)}}:void 0,children:l}))})});o.Z=w},584231:function(e,o,t){t.d(o,{V:function(){return n}});var r=t(750022);function n(e){return(0,r.Z)("MuiPopperUnstyled",e)}var i=(0,t(554825).Z)("MuiPopperUnstyled",["root"]);o.Z=i},266586:function(e,o,t){var r=t(295649),n=t(481936),i=t(855712),a=t(593557),p=t(827378),l=t(137341),s=t(576581),u=t(824246),c=["components","componentsProps","slots","slotProps"],d=(0,l.ZP)(i.Z,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,o){return o.root}})({}),m=p.forwardRef(function(e,o){var t,i=(0,a.Z)(),p=(0,s.Z)({props:e,name:"MuiPopper"}),l=p.components,m=p.componentsProps,f=p.slots,v=p.slotProps,Z=(0,n.Z)(p,c),h=null!==(t=null==f?void 0:f.root)&&void 0!==t?t:null==l?void 0:l.Root;return(0,u.jsx)(d,(0,r.Z)((0,r.Z)({direction:null==i?void 0:i.direction,slots:{root:h},slotProps:null!=v?v:m},Z),{},{ref:o}))});o.Z=m},682251:function(e,o,t){var r=t(25778),n=t(481936),i=t(957379),a=t(295649),p=t(827378),l=t(138944),s=t(361747),u=t(608754),c=t(279955),d=t(137341),m=t(34717),f=t(576581),v=t(167154),Z=t(573591),h=t(266586),g=t(972309),b=t(919970),T=t(311621),w=t(263729),y=t(407241),P=t(484274),R=t(824246),x=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],M=function(e){var o=e.classes,t=e.disableInteractive,r=e.arrow,n=e.touch,i=e.placement,a={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat((0,v.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,s.Z)(a,P.Q,o)},E=(0,d.ZP)(h.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,o){var t=e.ownerState;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})(function(e){var o,t=e.theme,r=e.ownerState,n=e.open;return(0,a.Z)((0,a.Z)((0,a.Z)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"}),!n&&{pointerEvents:"none"}),r.arrow&&(o={},(0,i.Z)(o,'&[data-popper-placement*="bottom"] .'.concat(P.Z.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,i.Z)(o,'&[data-popper-placement*="top"] .'.concat(P.Z.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,i.Z)(o,'&[data-popper-placement*="right"] .'.concat(P.Z.arrow),(0,a.Z)((0,a.Z)({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"}),{},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,i.Z)(o,'&[data-popper-placement*="left"] .'.concat(P.Z.arrow),(0,a.Z)((0,a.Z)({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"}),{},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),o))}),S=(0,d.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,o){var t=e.ownerState;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o["tooltipPlacement".concat((0,v.Z)(t.placement.split("-")[0]))]]}})(function(e){var o,t=e.theme,r=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,c.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},r.arrow&&{position:"relative",margin:0}),r.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat(Math.round(1e5*(16/14))/1e5,"em"),fontWeight:t.typography.fontWeightRegular}),{},(o={},(0,i.Z)(o,".".concat(P.Z.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},r.isRtl?(0,a.Z)({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},r.touch&&{marginRight:"24px"}))),(0,i.Z)(o,".".concat(P.Z.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},r.isRtl?(0,a.Z)({marginRight:"14px"},r.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}))),(0,i.Z)(o,".".concat(P.Z.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},r.touch&&{marginBottom:"24px"})),(0,i.Z)(o,".".concat(P.Z.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},r.touch&&{marginTop:"24px"})),o))}),O=(0,d.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,o){return o.arrow}})(function(e){var o=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:(0,c.Fq)(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}),C=!1,k=null;function L(e,o){return function(t){o&&o(t),e(t)}}var N=p.forwardRef(function(e,o){var t,i,s,c,d,v,P,N,F,B,I,W,D,j,A,U,z,H,_,V=(0,f.Z)({props:e,name:"MuiTooltip"}),q=V.arrow,Q=void 0!==q&&q,X=V.children,Y=(V.classes,V.components),G=void 0===Y?{}:Y,J=V.componentsProps,K=void 0===J?{}:J,$=V.describeChild,ee=V.disableFocusListener,eo=V.disableHoverListener,et=void 0!==eo&&eo,er=V.disableInteractive,en=V.disableTouchListener,ei=V.enterDelay,ea=void 0===ei?100:ei,ep=V.enterNextDelay,el=void 0===ep?0:ep,es=V.enterTouchDelay,eu=void 0===es?700:es,ec=V.followCursor,ed=void 0!==ec&&ec,em=V.id,ef=V.leaveDelay,ev=void 0===ef?0:ef,eZ=V.leaveTouchDelay,eh=void 0===eZ?1500:eZ,eg=V.onClose,eb=V.onOpen,eT=V.open,ew=V.placement,ey=void 0===ew?"bottom":ew,eP=V.PopperComponent,eR=V.PopperProps,ex=void 0===eR?{}:eR,eM=V.slotProps,eE=void 0===eM?{}:eM,eS=V.slots,eO=void 0===eS?{}:eS,eC=V.title,ek=V.TransitionComponent,eL=void 0===ek?Z.Z:ek,eN=V.TransitionProps,eF=(0,n.Z)(V,x),eB=(0,m.Z)(),eI="rtl"===eB.direction,eW=p.useState(),eD=(0,r.Z)(eW,2),ej=eD[0],eA=eD[1],eU=p.useState(null),ez=(0,r.Z)(eU,2),eH=ez[0],e_=ez[1],eV=p.useRef(!1),eq=void 0!==er&&er||ed,eQ=p.useRef(),eX=p.useRef(),eY=p.useRef(),eG=p.useRef(),eJ=(0,y.Z)({controlled:eT,default:!1,name:"Tooltip",state:"open"}),eK=(0,r.Z)(eJ,2),e$=eK[0],e0=eK[1],e1=e$,e2=(0,T.Z)(em),e4=p.useRef(),e7=p.useCallback(function(){void 0!==e4.current&&(document.body.style.WebkitUserSelect=e4.current,e4.current=void 0),clearTimeout(eG.current)},[]);p.useEffect(function(){return function(){clearTimeout(eQ.current),clearTimeout(eX.current),clearTimeout(eY.current),e7()}},[e7]);var e5=function(e){clearTimeout(k),C=!0,e0(!0),eb&&!e1&&eb(e)},e8=(0,g.Z)(function(e){clearTimeout(k),k=setTimeout(function(){C=!1},800+ev),e0(!1),eg&&e1&&eg(e),clearTimeout(eQ.current),eQ.current=setTimeout(function(){eV.current=!1},eB.transitions.duration.shortest)}),e6=function(e){eV.current&&"touchstart"!==e.type||(ej&&ej.removeAttribute("title"),clearTimeout(eX.current),clearTimeout(eY.current),ea||C&&el?eX.current=setTimeout(function(){e5(e)},C?el:ea):e5(e))},e3=function(e){clearTimeout(eX.current),clearTimeout(eY.current),eY.current=setTimeout(function(){e8(e)},ev)},e9=(0,w.Z)(),oe=e9.isFocusVisibleRef,oo=e9.onBlur,ot=e9.onFocus,or=e9.ref,on=p.useState(!1),oi=(0,r.Z)(on,2)[1],oa=function(e){oo(e),!1===oe.current&&(oi(!1),e3(e))},op=function(e){ej||eA(e.currentTarget),ot(e),!0===oe.current&&(oi(!0),e6(e))},ol=function(e){eV.current=!0;var o=X.props;o.onTouchStart&&o.onTouchStart(e)};p.useEffect(function(){if(e1)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&e8(e)}},[e8,e1]);var os=(0,b.Z)(X.ref,or,eA,o);eC||0===eC||(e1=!1);var ou=p.useRef({x:0,y:0}),oc=p.useRef(),od={},om="string"==typeof eC;void 0!==$&&$?(od.title=e1||!om||et?null:eC,od["aria-describedby"]=e1?e2:null):(od["aria-label"]=om?eC:null,od["aria-labelledby"]=e1&&!om?e2:null);var of=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},od),eF),X.props),{},{className:(0,l.default)(eF.className,X.props.className),onTouchStart:ol,ref:os},ed?{onMouseMove:function(e){var o=X.props;o.onMouseMove&&o.onMouseMove(e),ou.current={x:e.clientX,y:e.clientY},oc.current&&oc.current.update()}}:{}),ov={};void 0!==en&&en||(of.onTouchStart=function(e){ol(e),clearTimeout(eY.current),clearTimeout(eQ.current),e7(),e4.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eG.current=setTimeout(function(){document.body.style.WebkitUserSelect=e4.current,e6(e)},eu)},of.onTouchEnd=function(e){X.props.onTouchEnd&&X.props.onTouchEnd(e),e7(),clearTimeout(eY.current),eY.current=setTimeout(function(){e8(e)},eh)}),et||(of.onMouseOver=L(e6,of.onMouseOver),of.onMouseLeave=L(e3,of.onMouseLeave),eq||(ov.onMouseOver=e6,ov.onMouseLeave=e3)),void 0!==ee&&ee||(of.onFocus=L(op,of.onFocus),of.onBlur=L(oa,of.onBlur),eq||(ov.onFocus=op,ov.onBlur=oa));var oZ=p.useMemo(function(){var e,o=[{name:"arrow",enabled:Boolean(eH),options:{element:eH,padding:4}}];return null!==(e=ex.popperOptions)&&void 0!==e&&e.modifiers&&(o=o.concat(ex.popperOptions.modifiers)),(0,a.Z)((0,a.Z)({},ex.popperOptions),{},{modifiers:o})},[eH,ex]),oh=(0,a.Z)((0,a.Z)({},V),{},{isRtl:eI,arrow:Q,disableInteractive:eq,placement:ey,PopperComponentProp:eP,touch:eV.current}),og=M(oh),ob=null!==(t=null!==(i=eO.popper)&&void 0!==i?i:G.Popper)&&void 0!==t?t:E,oT=null!==(s=null!==(c=null!==(d=eO.transition)&&void 0!==d?d:G.Transition)&&void 0!==c?c:eL)&&void 0!==s?s:Z.Z,ow=null!==(v=null!==(P=eO.tooltip)&&void 0!==P?P:G.Tooltip)&&void 0!==v?v:S,oy=null!==(N=null!==(F=eO.arrow)&&void 0!==F?F:G.Arrow)&&void 0!==N?N:O,oP=(0,u.Z)(ob,(0,a.Z)((0,a.Z)((0,a.Z)({},ex),null!==(B=eE.popper)&&void 0!==B?B:K.popper),{},{className:(0,l.default)(og.popper,null==ex?void 0:ex.className,null===(I=null!==(W=eE.popper)&&void 0!==W?W:K.popper)||void 0===I?void 0:I.className)}),oh),oR=(0,u.Z)(oT,(0,a.Z)((0,a.Z)({},eN),null!==(D=eE.transition)&&void 0!==D?D:K.transition),oh),ox=(0,u.Z)(ow,(0,a.Z)((0,a.Z)({},null!==(j=eE.tooltip)&&void 0!==j?j:K.tooltip),{},{className:(0,l.default)(og.tooltip,null===(A=null!==(U=eE.tooltip)&&void 0!==U?U:K.tooltip)||void 0===A?void 0:A.className)}),oh),oM=(0,u.Z)(oy,(0,a.Z)((0,a.Z)({},null!==(z=eE.arrow)&&void 0!==z?z:K.arrow),{},{className:(0,l.default)(og.arrow,null===(H=null!==(_=eE.arrow)&&void 0!==_?_:K.arrow)||void 0===H?void 0:H.className)}),oh);return(0,R.jsxs)(p.Fragment,{children:[p.cloneElement(X,of),(0,R.jsx)(ob,(0,a.Z)((0,a.Z)((0,a.Z)({as:null!=eP?eP:h.Z,placement:ey,anchorEl:ed?{getBoundingClientRect:function(){return{top:ou.current.y,left:ou.current.x,right:ou.current.x,bottom:ou.current.y,width:0,height:0}}}:ej,popperRef:oc,open:!!ej&&e1,id:e2,transition:!0},ov),oP),{},{popperOptions:oZ,children:function(e){var o=e.TransitionProps;return(0,R.jsx)(oT,(0,a.Z)((0,a.Z)((0,a.Z)({timeout:eB.transitions.duration.shorter},o),oR),{},{"data-foo":"bar",children:(0,R.jsxs)(ow,(0,a.Z)((0,a.Z)({},ox),{},{children:[eC,Q?(0,R.jsx)(oy,(0,a.Z)((0,a.Z)({},oM),{},{ref:e_})):null]}))}))}}))]})});o.Z=N},484274:function(e,o,t){t.d(o,{Q:function(){return i}});var r=t(554825),n=t(750022);function i(e){return(0,n.Z)("MuiTooltip",e)}var a=(0,r.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);o.Z=a}}]);
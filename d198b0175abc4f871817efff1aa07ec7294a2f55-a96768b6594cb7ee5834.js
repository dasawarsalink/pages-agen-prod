/*! For license information please see d198b0175abc4f871817efff1aa07ec7294a2f55-a96768b6594cb7ee5834.js.LICENSE.txt */
"use strict";(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[490],{7808:function(e,t,a){a.d(t,{Z:function(){return h}});var o=a(5773),r=a(9645),n=a(3782),i=a(7378),l=(a(7972),a(8037)),s=a(582),c=a(4800),d=a(2201),p=(0,a(5296).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(7833);var m=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=(0,n.Z)(e,["classes"]);return i.createElement(u.Z,(0,o.Z)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(p,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var a=e.children,s=e.classes,d=e.className,p=e.component,u=void 0===p?"nav":p,g=e.expandText,h=void 0===g?"Show path":g,f=e.itemsAfterCollapse,y=void 0===f?1:f,v=e.itemsBeforeCollapse,b=void 0===v?1:v,Z=e.maxItems,x=void 0===Z?8:Z,C=e.separator,N=void 0===C?"/":C,w=(0,n.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),E=k[0],S=k[1],B=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,o.Z)({ref:t,component:u,color:"textSecondary",className:(0,l.Z)(s.root,d)},w),i.createElement("ol",{className:s.ol},function(e,t,a){return e.reduce((function(o,r,n){return n<e.length-1?o=o.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):o.push(r),o}),[])}(E||x&&B.length<=x?B:function(e){return b+y>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[i.createElement(m,{"aria-label":h,key:"ellipsis",onClick:function(e){S(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,r.Z)(e.slice(e.length-y,e.length)))}(B),s.separator,N)))})),h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},7576:function(e,t,a){var o=a(5773),r=a(3782),n=a(7378),i=a(8037),l=a(582),s=a(8815),c=n.forwardRef((function(e,t){var a=e.children,l=e.classes,c=e.className,d=e.component,p=void 0===d?"ul":d,u=e.dense,m=void 0!==u&&u,g=e.disablePadding,h=void 0!==g&&g,f=e.subheader,y=(0,r.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=n.useMemo((function(){return{dense:m}}),[m]);return n.createElement(s.Z.Provider,{value:v},n.createElement(p,(0,o.Z)({className:(0,i.Z)(l.root,c,m&&l.dense,!h&&l.padding,f&&l.subheader),ref:t},y),f,a))}));t.Z=(0,l.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(c)},8815:function(e,t,a){var o=a(7378).createContext({});t.Z=o},6408:function(e,t,a){var o=a(5773),r=a(3782),n=a(7378),i=a(8037),l=a(582),s=a(7833),c=a(7269),d=a(2799),p=a(8815),u=a(1542),m="undefined"==typeof window?n.useEffect:n.useLayoutEffect,g=n.forwardRef((function(e,t){var a=e.alignItems,l=void 0===a?"center":a,g=e.autoFocus,h=void 0!==g&&g,f=e.button,y=void 0!==f&&f,v=e.children,b=e.classes,Z=e.className,x=e.component,C=e.ContainerComponent,N=void 0===C?"li":C,w=e.ContainerProps,k=(w=void 0===w?{}:w).className,E=(0,r.Z)(w,["className"]),S=e.dense,B=void 0!==S&&S,I=e.disabled,A=void 0!==I&&I,R=e.disableGutters,M=void 0!==R&&R,P=e.divider,T=void 0!==P&&P,L=e.focusVisibleClassName,$=e.selected,V=void 0!==$&&$,_=(0,r.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=n.useContext(p.Z),W={dense:B||z.dense||!1,alignItems:l},F=n.useRef(null);m((function(){h&&F.current&&F.current.focus()}),[h]);var j=n.Children.toArray(v),D=j.length&&(0,c.Z)(j[j.length-1],["ListItemSecondaryAction"]),O=n.useCallback((function(e){F.current=u.findDOMNode(e)}),[]),G=(0,d.Z)(O,t),q=(0,o.Z)({className:(0,i.Z)(b.root,Z,W.dense&&b.dense,!M&&b.gutters,T&&b.divider,A&&b.disabled,y&&b.button,"center"!==l&&b.alignItemsFlexStart,D&&b.secondaryAction,V&&b.selected),disabled:A},_),H=x||"li";return y&&(q.component=x||"div",q.focusVisibleClassName=(0,i.Z)(b.focusVisible,L),H=s.Z),D?(H=q.component||x?H:"div","li"===N&&("li"===H?H="div":"li"===q.component&&(q.component="div")),n.createElement(p.Z.Provider,{value:W},n.createElement(N,(0,o.Z)({className:(0,i.Z)(b.container,k),ref:G},E),n.createElement(H,q,j),j.pop()))):n.createElement(p.Z.Provider,{value:W},n.createElement(H,(0,o.Z)({ref:G},q),j))}));t.Z=(0,l.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(g)},4800:function(e,t,a){var o=a(5773),r=a(3782),n=a(7378),i=a(8037),l=a(582),s=a(7405),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var a=e.align,l=void 0===a?"inherit":a,d=e.classes,p=e.className,u=e.color,m=void 0===u?"initial":u,g=e.component,h=e.display,f=void 0===h?"initial":h,y=e.gutterBottom,v=void 0!==y&&y,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,C=void 0!==x&&x,N=e.variant,w=void 0===N?"body1":N,k=e.variantMapping,E=void 0===k?c:k,S=(0,r.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=g||(C?"p":E[w]||c[w])||"span";return n.createElement(B,(0,o.Z)({className:(0,i.Z)(d.root,p,"inherit"!==w&&d[w],"initial"!==m&&d["color".concat((0,s.Z)(m))],Z&&d.noWrap,v&&d.gutterBottom,C&&d.paragraph,"inherit"!==l&&d["align".concat((0,s.Z)(l))],"initial"!==f&&d["display".concat((0,s.Z)(f))]),ref:t},S))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},1012:function(e,t){var a=60103,o=60106,r=60107,n=60108,i=60114,l=60109,s=60110,c=60112,d=60113,p=60120,u=60115,m=60116,g=60121,h=60122,f=60117,y=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;a=b("react.element"),o=b("react.portal"),r=b("react.fragment"),n=b("react.strict_mode"),i=b("react.profiler"),l=b("react.provider"),s=b("react.context"),c=b("react.forward_ref"),d=b("react.suspense"),p=b("react.suspense_list"),u=b("react.memo"),m=b("react.lazy"),g=b("react.block"),h=b("react.server.block"),f=b("react.fundamental"),y=b("react.debug_trace_mode"),v=b("react.legacy_hidden")}function Z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case r:case i:case n:case d:case p:return e;default:switch(e=e&&e.$$typeof){case s:case c:case m:case u:case l:return e;default:return t}}case o:return t}}}},7972:function(e,t,a){a(1012)}}]);
//# sourceMappingURL=d198b0175abc4f871817efff1aa07ec7294a2f55-a96768b6594cb7ee5834.js.map
(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[507],{1954:function(e,t,r){var o=r(1873).default;function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=i?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(a,c,l):a[c]=e[c]}return a.default=e,r&&r.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},1873:function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},7653:function(e,t,r){"use strict";var o=r(5773),n=r(3782),a=r(7378),i=r(8037),c=r(582),l=r(2201),u=r(7833),s=r(7405),p=a.forwardRef((function(e,t){var r=e.edge,c=void 0!==r&&r,l=e.children,p=e.classes,d=e.className,f=e.color,m=void 0===f?"default":f,g=e.disabled,v=void 0!==g&&g,h=e.disableFocusRipple,b=void 0!==h&&h,y=e.size,Z=void 0===y?"medium":y,x=(0,n.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(u.Z,(0,o.Z)({className:(0,i.Z)(p.root,d,"default"!==m&&p["color".concat((0,s.Z)(m))],v&&p.disabled,"small"===Z&&p["size".concat((0,s.Z)(Z))],{start:p.edgeStart,end:p.edgeEnd}[c]),centerRipple:!0,focusRipple:!b,disabled:v,ref:t},x),a.createElement("span",{className:p.label},l))}));t.Z=(0,c.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},2200:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return n.Z},createSvgIcon:function(){return a.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return s.Z},requirePropFactory:function(){return p},setRef:function(){return d.Z},unstable_useId:function(){return b},unsupportedProp:function(){return f},useControlled:function(){return m.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return y.Z}});var o=r(7405),n=r(9122),a=r(5296),i=r(8338);function c(e,t){return function(){return null}}var l=r(7269),u=r(9376),s=r(7284);function p(e){return function(){return null}}var d=r(8011);function f(e,t,r,o,n){return null}var m=r(6466),g=r(467),v=r(2799),h=r(7378);function b(e){var t=h.useState(e),r=t[0],o=t[1],n=e||r;return h.useEffect((function(){null==r&&o("mui-".concat(Math.round(1e5*Math.random())))}),[r]),n}var y=r(1511)},5241:function(e,t,r){"use strict";var o=r(7914),n=r(1954);t.Z=void 0;var a=n(r(7378)),i=(0,o(r(545)).default)(a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.Z=i},5530:function(e,t,r){"use strict";var o=r(7914),n=r(1954);t.Z=void 0;var a=n(r(7378)),i=(0,o(r(545)).default)(a.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message");t.Z=i},1034:function(e,t,r){"use strict";var o=r(7914),n=r(1954);t.Z=void 0;var a=n(r(7378)),i=(0,o(r(545)).default)(a.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.Z=i},545:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(2200)},4646:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(7378),n=r(5773),a=r(3782),i=r(8037),c=r(582),l=r(7405),u=r(3991),s=o.forwardRef((function(e,t){var r=e.classes,c=e.className,s=e.color,p=void 0===s?"primary":s,d=e.position,f=void 0===d?"fixed":d,m=(0,a.Z)(e,["classes","className","color","position"]);return o.createElement(u.Z,(0,n.Z)({square:!0,component:"header",elevation:4,className:(0,i.Z)(r.root,r["position".concat((0,l.Z)(f))],r["color".concat((0,l.Z)(p))],c,"fixed"===f&&"mui-fixed"),ref:t},m))})),p=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(s),d=r(4649),f=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,u=void 0===l?"div":l,s=e.disableGutters,p=void 0!==s&&s,d=e.variant,f=void 0===d?"regular":d,m=(0,a.Z)(e,["classes","className","component","disableGutters","variant"]);return o.createElement(u,(0,n.Z)({className:(0,i.Z)(r.root,r[f],c,!p&&r.gutters),ref:t},m))})),m=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,d.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(f),g=r(7653),v=r(1034),h=r(5530),b=r(5241),y=r(1495),Z=r(5414),x=function(){var e=function(e){return function(){(0,Z.navigate)(e)}};return o.createElement(p,{position:"sticky"},o.createElement(m,null,o.createElement(g.Z,{edge:"start",onClick:e("/user/"),color:"inherit","aria-label":"menu"},o.createElement("img",{src:y.Z,alt:"",height:"40px"})),o.createElement("div",{style:{flexGrow:1}}),!1,o.createElement(g.Z,{edge:"start",onClick:e("/user/mail"),color:"inherit","aria-label":"menu"},o.createElement(h.Z,{height:"40px"})),o.createElement(g.Z,{edge:"start",onClick:e("/user/notif"),color:"inherit","aria-label":"menu"},o.createElement(v.Z,{height:"40px"})),o.createElement(g.Z,{edge:"start",onClick:e("/user/profile"),color:"inherit","aria-label":"menu"},o.createElement(b.Z,{height:"40px"}))))}}}]);
//# sourceMappingURL=869b68a5a22785118c1073d81556dd39942809ec-caf662cb6c2a5a8d5799.js.map
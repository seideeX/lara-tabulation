import{r as m}from"./app-DMIFOAuK.js";var g={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function y(e){if(typeof e=="number")return{value:e,unit:"px"};var t,o=(e.match(/^[0-9.]*/)||"").toString();o.includes(".")?t=parseFloat(o):t=parseInt(o,10);var r=(e.match(/[^0-9]*$/)||"").toString();return g[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function d(e){var t=y(e);return"".concat(t.value).concat(t.unit)}var h=function(e,t,o){var r="react-spinners-".concat(e,"-").concat(o);if(typeof window>"u"||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var a=n.sheet,l=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return a&&a.insertRule(l,0),r},i=function(){return i=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)},b=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o},O=h("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function x(e){var t=e.loading,o=t===void 0?!0:t,r=e.color,n=r===void 0?"#000000":r,a=e.speedMultiplier,l=a===void 0?1:a,u=e.cssOverride,p=u===void 0?{}:u,c=e.size,s=c===void 0?35:c,f=b(e,["loading","color","speedMultiplier","cssOverride","size"]),v=i({background:"transparent !important",width:d(s),height:d(s),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(O," ").concat(.75/l,"s 0s infinite linear"),animationFillMode:"both"},p);return o?m.createElement("span",i({style:v},f)):null}export{x as C};

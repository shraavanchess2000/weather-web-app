var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/buttons/dual-stateful/example.jsx.js"]=function(e){function t(t){for(var n,r,u=t[0],o=t[1],d=t[2],c=0,f=[];c<u.length;c++)r=u[c],s[r]&&f.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(i&&i(t);f.length;)f.shift()();return a.push.apply(a,d||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,u=1;u<l.length;u++){var o=l[u];0!==s[o]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=l[0]))}return e}var n={},s={57:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},a=[];function r(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=n,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var i=o;return a.push([124,0]),l()}({0:function(e,t){e.exports=React},124:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.PressedText=t.DefaultText=t.DualStatefulButton=void 0;var n=o(l(0)),s=o(l(3)),a=o(l(4)),r=o(l(1)),u=l(8);function o(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return n.default.createElement("span",{className:"slds-text-not-pressed"},n.default.createElement(a.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"add"}),e.children)};d.propTypes={children:s.default.string.isRequired};var i=function(e){return n.default.createElement("span",{className:"slds-text-pressed"},n.default.createElement(a.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"check"}),e.children)};i.propTypes={children:s.default.string.isRequired};var c=function(e){var t=e.isDisabled,l=e.isPressed;return n.default.createElement(u.Button,{isNeutral:!0,className:(0,r.default)("slds-button_dual-stateful",{"slds-is-pressed":l}),disabled:t,"aria-live":"assertive"},n.default.createElement(d,null,"Follow"),n.default.createElement(i,null,"Following"))};c.propTypes={isDisabled:s.default.bool,isPressed:s.default.bool},t.DualStatefulButton=c,t.DefaultText=d,t.PressedText=i,t.default=n.default.createElement(c,null,n.default.createElement(d,null,"Follow"),n.default.createElement(i,null,"Following"));t.states=[{id:"disabled",label:"disabled",element:n.default.createElement(c,{isDisabled:!0},n.default.createElement(d,null,"Follow"),n.default.createElement(i,null,"Following"))}],t.examples=[{id:"pressed",label:"pressed",element:n.default.createElement(c,{isPressed:!0},n.default.createElement(d,null,"Follow"),n.default.createElement(i,null,"Following"))}]}});
var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/timepicker/base/example.jsx.js"]=function(e){function t(t){for(var n,a,u=t[0],c=t[1],r=t[2],d=0,m=[];d<u.length;d++)a=u[d],i[a]&&m.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);m.length;)m.shift()();return o.push.apply(o,r||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],n=!0,u=1;u<l.length;u++){var c=l[u];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=l[0]))}return e}var n={},i={175:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},o=[];function a(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=n,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var r=0;r<u.length;r++)t(u[r]);var s=c;return o.push([253,0]),l()}({0:function(e,t){e.exports=React},253:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),i=l(15);var o=function(e){return n.default.createElement(i.Listbox,{className:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-01",title:"6:00am",focused:e.optionFocused})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-02",title:"7:00am"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-04",title:"9:00am"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-05",title:"10:00am"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-06",title:"11:00am"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-07",title:"12:00pm"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-08",title:"1:00pm"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-09",title:"2:00pm"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-10",title:"3:00pm"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-11",title:"4:00pm"})),n.default.createElement(i.ListboxItem,null,n.default.createElement(i.Option,{id:"listbox-option-unique-id-12",title:"5:00pm"})))};t.Context=function(e){return n.default.createElement("div",{style:{height:"15rem"}},e.children)};t.default=n.default.createElement(i.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",placeholder:" ",listbox:n.default.createElement(o,null)});t.states=[{id:"focused",label:"Focused",element:n.default.createElement(i.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",placeholder:" ",listbox:n.default.createElement(o,null)})},{id:"open-item-focused",label:"Open - Item Focused",element:n.default.createElement(i.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",placeholder:" ",listbox:n.default.createElement(o,{optionFocused:!0}),"aria-activedescendant":"listbox-option-unique-id-01"})},{id:"time-selection",label:"Open - Time selected",element:n.default.createElement(i.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",placeholder:" ",value:"8:00am",listbox:n.default.createElement(o,{optionSelected:!0})})}]}});
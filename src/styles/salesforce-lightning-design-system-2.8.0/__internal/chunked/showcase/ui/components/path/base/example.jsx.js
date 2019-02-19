var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/path/base/example.jsx.js"]=function(e){function t(t){for(var l,c,r=t[0],o=t[1],d=t[2],u=0,p=[];u<r.length;u++)c=r[u],n[c]&&p.push(n[c][0]),n[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],l=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(l=!1)}l&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},n={115:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},i=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var s=o;return i.push([183,0]),a()}({0:function(e,t){e.exports=React},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PathCoaching=t.PathStep=t.PathTrack=t.Path=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),i=p(n),c=p(a(3)),r=p(a(1)),o=a(8),d=p(a(2)),s=p(a(4)),u=p(a(27));function p(e){return e&&e.__esModule?e:{default:e}}var f=t.Path=function(e){return i.default.createElement("div",{className:(0,r.default)("slds-path",{"slds-path_has-coaching":e.hasCoaching,"slds-is-expanded":e.coachingOpen})},e.children)};f.propTypes={hasCoaching:c.default.bool,coachingOpen:c.default.bool},f.defaultProps={hasCoaching:!1,coachingOpen:!1};var h=t.PathTrack=function(e){var t=e.hasCoaching,a=e.coachingOpen,l=e.hasOverflow,n=e.coachingId,c=e.stageName,s=e.actionButtonLabel;return i.default.createElement("div",{className:(0,r.default)("slds-grid slds-path__track",{"slds-has-overflow":l})},i.default.createElement("div",{className:"slds-grid slds-path__scroller-container"},t?i.default.createElement(d.default,{symbol:"chevronright",theme:"neutral",className:(0,r.default)("slds-path__trigger",{"slds-path__trigger_open":a}),assistiveText:"Show Details",title:"Toggle Sales Coaching","aria-expanded":a,"aria-controls":n}):null,i.default.createElement("div",{className:"slds-path__scroller",role:"application"},i.default.createElement("div",{className:"slds-path__scroller_inner"},i.default.createElement("ul",{className:"slds-path__nav",role:"listbox","aria-orientation":"horizontal"},e.children),l?i.default.createElement("div",{className:"slds-path__scroll-controls"},i.default.createElement(d.default,{symbol:"left",theme:"neutral",assistiveText:"Scroll left",title:"Scroll left",tabIndex:"-1"}),i.default.createElement(d.default,{symbol:"right",theme:"neutral",assistiveText:"Scroll right",title:"Scroll right",tabIndex:"-1"})):null))),i.default.createElement("div",{className:"slds-grid slds-path__action"},i.default.createElement("span",{className:"slds-path__stage-name"},"Stage: ",c),i.default.createElement(o.Button,{isBrand:!0,className:"slds-path__mark-complete"},s)))};h.propTypes={hasCoaching:c.default.bool,coachingOpen:c.default.bool,hasOverflow:c.default.bool,coachingId:c.default.string,stageName:c.default.string,actionButtonLabel:c.default.node},h.defaultProps={hasCoaching:!1,coachingOpen:!1,hasOverflow:!1,coachingId:"",stageName:"Unqualified",actionButtonLabel:i.default.createElement(n.Fragment,null,i.default.createElement(s.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"check","aria-hidden":"true"}),"Mark Status as Complete")};var m=t.PathStep=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={itemRef:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.setTooltipRef,l=this.state.itemRef;a&&l!==t.itemRef&&a(l)}},{key:"render",value:function(){var e=this,t=this.props,a=t.label,l=t.stepState,n=t.index,c=l.indexOf("active")>-1,o=l.indexOf("complete")>-1,d=l.indexOf("current")>-1,u=null;return o?u="Stage Complete":d&&(u="Current Stage:"),i.default.createElement("li",{className:(0,r.default)("slds-path__item",l.map(function(e){return"slds-is-"+e})),role:"presentation",ref:function(t){e.state.itemRef||e.setState({itemRef:t})}},i.default.createElement("a",{"aria-selected":c,className:"slds-path__link",href:"javascript:void(0);",id:"path-"+n,role:"option",tabIndex:c?0:-1},i.default.createElement("span",{className:"slds-path__stage"},i.default.createElement(s.default,{className:"slds-icon slds-icon_x-small",sprite:"utility",symbol:"check"}),u?i.default.createElement("span",{className:"slds-assistive-text"},u):null),i.default.createElement("span",{className:"slds-path__title"},a)))}}]),t}();m.propTypes={label:c.default.string,stepState:c.default.arrayOf(c.default.string),index:c.default.number},m.defaultProps={label:"Undefined",stepState:["incomplete"],index:0};var S=t.PathCoaching=function(e){var t=e.coachingId,a=e.isHidden,l=e.coachingData,n=e.pathGuidance;return i.default.createElement("div",{className:(0,r.default)("slds-path__content",{"slds-is-collapsed":a}),id:t},i.default.createElement("div",{className:"slds-path__coach slds-grid"},i.default.createElement("div",{className:"slds-path__keys"},i.default.createElement("div",{className:"slds-grid slds-grid_align-spread slds-path__coach-title"},i.default.createElement("h2",null,"Key Fields This Stage"),i.default.createElement(o.Button,{className:"slds-path__coach-edit slds-text-body_small"},"Edit")),i.default.createElement(u.default,{direction:"stacked",snapshot:l,isViewMode:!0,hasInlineEdit:!0})),i.default.createElement("div",{className:"slds-path__guidance"},i.default.createElement("h2",{className:"slds-path__coach-title"},"Guidance for Success"),i.default.createElement("div",{className:"slds-text-longform slds-path__guidance-content"},n))))};S.propTypes={coachingId:c.default.string,isHidden:c.default.bool,coachingData:c.default.object,pathGuidance:c.default.arrayOf(c.default.node)},S.defaultProps={coachingId:null,isHidden:!1,coachingData:{rows:[{fields:[{type:"text",label:"Expected Budget",value:"$10,000"}]},{fields:[{type:"text",label:"Lead Source",value:"Marketing and Web Referral"}]},{fields:[{type:"text",label:"Support Engineer",value:"Jane Authur"}]}]},pathGuidance:[i.default.createElement("p",{key:"guidance-1"},"Regularly cross-sell related products using"," ",i.default.createElement("a",{href:"javascript:void(0);"},"cross-sell tactics and principles"),"."),i.default.createElement("p",{key:"guidance-2"},"Prepare demo deck using the"," ",i.default.createElement("a",{href:"javascript:void(0);"},"latest template")," and review with Marketing and Sales teams. Review demo copy with Legal and Doc team."),i.default.createElement("p",{key:"guidance-3"},"Look up ",i.default.createElement("a",{href:"javascript:void(0);"},"needs analysis principles")," and review selling plan with Sales Engineer.")]}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),i=d(n),c=d(a(22)),r=a(30),o=a(182);function d(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateTooltipOffset=e.updateTooltipOffset.bind(e),e.setTooltipRef=e.setTooltipRef.bind(e),e.state={tooltipRef:null,tooltipLeft:0},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateTooltipOffset)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateTooltipOffset)}},{key:"componentDidUpdate",value:function(e,t){this.state.tooltipRef&&!t.tooltipRef&&this.updateTooltipOffset()}},{key:"updateTooltipOffset",value:function(){var e=this.state.tooltipRef,t=0;e&&(t=e.offsetLeft+e.offsetWidth/2),this.setState({tooltipLeft:t})}},{key:"setTooltipRef",value:function(e){this.setState({tooltipRef:e})}},{key:"render",value:function(){var e=this,t=this.state.tooltipLeft;return i.default.createElement(n.Fragment,null,i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,{actionButtonLabel:"Mark as Current Stage"},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:16}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:17}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["current"],index:18,setTooltipRef:function(t){return e.setTooltipRef(t)}}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["active"],index:19}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:20})))),i.default.createElement(r.Tooltip,{className:"slds-nubbin_top",style:{left:t+"px",transform:"translateX(-50%)",top:"4px"}},"3 Days in Unqualified"))}}]),t}();t.default=i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,null,i.default.createElement(o.PathStep,{label:"Contacted",stepState:["current","active"],index:1}),i.default.createElement(o.PathStep,{label:"Open",stepState:["incomplete"],index:2}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["incomplete"],index:3}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete"],index:4}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:5}))))},null);t.states=[{id:"later-stage",label:"In a later stage",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,null,i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:6}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:7}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["complete"],index:8}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["current","active"],index:9}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:10}))))},null)},{id:"different-stage-selected",label:"With different stage selected",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,{actionButtonLabel:"Mark as Current Stage"},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["current"],index:11}),i.default.createElement(o.PathStep,{label:"Open",stepState:["incomplete"],index:12}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["active"],index:13}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete"],index:14}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:15}))))},null)},{id:"with-visible-tooltip",label:"With visible tooltip",element:i.default.createElement(s,null)},{id:"with-coaching",label:"With coaching available",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,{hasCoaching:!0},i.default.createElement(o.PathTrack,{coachingId:"path-coaching-1",hasCoaching:!0},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:21}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:22}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["active","current"],index:23}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete"],index:24}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:25})),i.default.createElement(o.PathCoaching,{coachingId:"path-coaching-1",labelledBy:"path-23",isHidden:!0})))},null)},{id:"different-coaching",label:"With different stage selected - with coaching",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,{hasCoaching:!0,coachingOpen:!0},i.default.createElement(o.PathTrack,{coachingId:"path-coaching-2",hasCoaching:!0,coachingOpen:!0},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:26}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:27}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["current"],index:28}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete","active"],index:29}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:30})),i.default.createElement(o.PathCoaching,{coachingId:"path-coaching-2",labelledBy:"path-28"})))},null)},{id:"lost",label:"Lost",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,{actionButtonLabel:"Change Closed State"},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["incomplete"],index:36}),i.default.createElement(o.PathStep,{label:"Open",stepState:["incomplete"],index:37}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["incomplete"],index:38}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete"],index:39}),i.default.createElement(o.PathStep,{label:"Closed Lost",stepState:["lost","active","current"],index:40}))))},null)},{id:"won",label:"Won",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,{actionButtonLabel:"Change Closed State"},i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:31}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:32}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["complete"],index:33}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["complete"],index:34}),i.default.createElement(o.PathStep,{label:"Closed Won",stepState:["won","active","current"],index:35}))))},null)},{id:"with-overflow",label:"Path with overflow",element:i.default.createElement(function(){return i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,{hasOverflow:!0},i.default.createElement(o.PathStep,{label:"Prospecting",stepState:["complete"],index:41}),i.default.createElement(o.PathStep,{label:"Qualification",stepState:["complete"],index:42}),i.default.createElement(o.PathStep,{label:"Needs Analysis",stepState:["active","current"],index:43}),i.default.createElement(o.PathStep,{label:"Value Proposition",stepState:["incomplete"],index:44}),i.default.createElement(o.PathStep,{label:"Id. Decision Maker",stepState:["incomplete"],index:45}),i.default.createElement(o.PathStep,{label:"Perception Analysis",stepState:["incomplete"],index:46}),i.default.createElement(o.PathStep,{label:"Proposal / Pricing",stepState:["incomplete"],index:47}),i.default.createElement(o.PathStep,{label:"Negotiation / Review",stepState:["incomplete"],index:48}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:49}))))},null)},{id:"medium",label:"Medium viewport",element:i.default.createElement(function(){return i.default.createElement("div",{className:"slds-region_medium",style:{width:"700px"}},i.default.createElement(c.default,null,i.default.createElement(o.Path,null,i.default.createElement(o.PathTrack,null,i.default.createElement(o.PathStep,{label:"Contacted",stepState:["complete"],index:50}),i.default.createElement(o.PathStep,{label:"Open",stepState:["complete"],index:51}),i.default.createElement(o.PathStep,{label:"Unqualified",stepState:["active","current"],index:52}),i.default.createElement(o.PathStep,{label:"Nurturing",stepState:["incomplete"],index:53}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:54})))))},null)},{id:"medium-coaching",label:"Medium viewport with coaching",element:i.default.createElement(function(){return i.default.createElement("div",{className:"slds-region_medium",style:{width:"700px"}},i.default.createElement(c.default,null,i.default.createElement(o.Path,{hasCoaching:!0,coachingOpen:!0},i.default.createElement(o.PathTrack,{stageName:"Needs Analysis",coachingId:"path-coaching-2",hasCoaching:!0,coachingOpen:!0,hasOverflow:!0},i.default.createElement(o.PathStep,{label:"Prospecting",stepState:["complete"],index:55}),i.default.createElement(o.PathStep,{label:"Qualification",stepState:["complete"],index:56}),i.default.createElement(o.PathStep,{label:"Needs Analysis",stepState:["active","current"],index:57}),i.default.createElement(o.PathStep,{label:"Value Proposition",stepState:["incomplete"],index:58}),i.default.createElement(o.PathStep,{label:"Id. Decision Maker",stepState:["incomplete"],index:59}),i.default.createElement(o.PathStep,{label:"Perception Analysis",stepState:["incomplete"],index:60}),i.default.createElement(o.PathStep,{label:"Proposal / Pricing",stepState:["incomplete"],index:61}),i.default.createElement(o.PathStep,{label:"Negotiation / Review",stepState:["incomplete"],index:62}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:63})),i.default.createElement(o.PathCoaching,{coachingId:"path-coaching-2",labelledBy:"path-57"}))))},null)},{id:"small-coaching",label:"Small viewport",element:i.default.createElement(function(){return i.default.createElement("div",{className:"slds-region_small",style:{width:"360px"}},i.default.createElement(c.default,null,i.default.createElement(o.Path,{hasCoaching:!0,coachingOpen:!0},i.default.createElement(o.PathTrack,{stageName:"Needs Analysis",coachingId:"path-coaching-3",hasCoaching:!0,hasOverflow:!0,coachingOpen:!0},i.default.createElement(o.PathStep,{label:"Prospecting",stepState:["complete"],index:64}),i.default.createElement(o.PathStep,{label:"Qualification",stepState:["complete"],index:65}),i.default.createElement(o.PathStep,{label:"Needs Analysis",stepState:["active","current"],index:66}),i.default.createElement(o.PathStep,{label:"Value Proposition",stepState:["incomplete"],index:67}),i.default.createElement(o.PathStep,{label:"Id. Decision Maker",stepState:["incomplete"],index:68}),i.default.createElement(o.PathStep,{label:"Perception Analysis",stepState:["incomplete"],index:69}),i.default.createElement(o.PathStep,{label:"Proposal / Pricing",stepState:["incomplete"],index:70}),i.default.createElement(o.PathStep,{label:"Negotiation / Review",stepState:["incomplete"],index:71}),i.default.createElement(o.PathStep,{label:"Closed",stepState:["incomplete"],index:72})),i.default.createElement(o.PathCoaching,{coachingId:"path-coaching-3",labelledBy:"path-66"}))))},null)}]}});
(self.webpackChunk=self.webpackChunk||[]).push([[71448],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){return function(t){var r=c(t.components);return n.createElement(e,i({},t,{components:r}))}},c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,h=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(79973),a=r(67294),i=r(73727),o=r(52263),l=r(13919),d=r(10412),u=(0,a.createContext)({collectLink:function(){}}),s=r(44996),c=r(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,r,p=e.isNavLink,h=e.to,f=e.href,y=e.activeClassName,v=e.isActive,w=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,b=void 0===x||x,g=(0,n.Z)(e,m),N=(0,o.default)().siteConfig,q=N.trailingSlash,k=N.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(u),E=h||f,P=(0,l.Z)(E),j=null==E?void 0:E.replace("pathname://",""),Q=void 0!==j?(r=j,b&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;Q&&P&&(Q=(0,c.applyTrailingSlash)(Q,{trailingSlash:q,baseUrl:k}));var T=(0,a.useRef)(!1),R=p?i.OL:i.rU,A=d.default.canUseIntersectionObserver,D=(0,a.useRef)();(0,a.useEffect)((function(){return!A&&P&&null!=Q&&window.docusaurus.prefetch(Q),function(){A&&D.current&&D.current.disconnect()}}),[D,Q,A,P]);var U=null!==(t=null==Q?void 0:Q.startsWith("#"))&&void 0!==t&&t,M=!Q||!P||U;return Q&&P&&!U&&!w&&O.collectLink(Q),M?a.createElement("a",Object.assign({href:Q},E&&!P&&{target:"_blank",rel:"noopener noreferrer"},g)):a.createElement(R,Object.assign({},g,{onMouseEnter:function(){T.current||null==Q||(window.docusaurus.preload(Q),T.current=!0)},innerRef:function(e){var t,r;A&&e&&P&&(t=e,r=function(){null!=Q&&window.docusaurus.prefetch(Q)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),r())}))})),D.current.observe(t))},to:Q||""},p&&{isActive:v,activeClassName:y}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,d=i.absolute,u=void 0!==d&&d;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(36742),a=r(44256),i=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var d=function(){var e=i.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(l,null,i.createElement(u,null),i.createElement(d,null),i.createElement(s,null))},m=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(m,null)})}},21797:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>s,toc:()=>c,default:()=>p});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=r(68629),l=(r(44256),["components"]),d={id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",keywords:["preload","fetch","query","render-as-you-fetch","retain","query reference"]},u=void 0,s={unversionedId:"api-reference/hooks/load-query",id:"api-reference/hooks/load-query",isDocsHomePage:!1,title:"loadQuery",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",source:"@site/docs/api-reference/hooks/load-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/load-query/",permalink:"/docs/next/api-reference/load-query/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/hooks/load-query.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1654116716,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/",description:"API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference",keywords:["preload","fetch","query","render-as-you-fetch","retain","query reference"]},sidebar:"docs",previous:{title:"useQueryLoader",permalink:"/docs/next/api-reference/use-query-loader/"},next:{title:"useLazyLoadQuery",permalink:"/docs/next/api-reference/use-lazy-load-query/"}},c=[{value:"<code>loadQuery</code>",id:"loadquery",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"loadquery"},(0,i.mdx)("inlineCode",{parentName:"h2"},"loadQuery")),(0,i.mdx)("p",null,"This function is designed to be used with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),' hook to implement the "render-as-you-fetch".'),(0,i.mdx)("p",null,"Query references returned from ",(0,i.mdx)("inlineCode",{parentName:"p"},"loadQuery")," will leak data into the Relay store if ",(0,i.mdx)("inlineCode",{parentName:"p"},".dispose()")," is not called on them once they are no longer referenced. As such, prefer calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," when possible, which ensures that query references are disposed for you."),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery"))," docs for a more complete example."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const MyEnvironment = require('MyEnvironment');\nconst {loadQuery} = require('react-relay');\n\nconst query = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\n// Note: you should generally not call loadQuery at the top level.\n// Instead, it should be called in response to an event (such a route navigation,\n// click, etc.).\nconst queryReference = loadQuery(\n  MyEnvironment,\n  query,\n  {id: '4'},\n  {fetchPolicy: 'store-or-network'},\n);\n\n// later: pass queryReference to usePreloadedQuery()\n// Note that query reference should have .dispose() called on them,\n// which is missing in this example.\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environment"),": A Relay Environment instance on which to execute the request. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using ",(0,i.mdx)("a",{parentName:"li",href:"#userelayenvironment"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRelayEnvironment")),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query to fetch, specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal, or a preloadable concrete request, which can be acquired by requiring the file ",(0,i.mdx)("inlineCode",{parentName:"li"},"<name-of-query>$Parameters.graphql"),". Relay will only generate the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$Parameters")," file if the query is annotated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@preloadable"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and whether to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/availability-of-data"},"Garbage Collection")," guides):",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,i.mdx)("strong",{parentName:"li"},"(default)")," ",(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,i.mdx)("em",{parentName:"li"},"not")," be made."),(0,i.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,i.mdx)("li",{parentName:"ul"},'"network-only": ',(0,i.mdx)("em",{parentName:"li"},"will not")," reuse locally cached data, and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," Default value: ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,i.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,i.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions"),": ",(0,i.mdx)("em",{parentName:"li"},"[Optional]")," options object",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Options passed to an ",(0,i.mdx)("inlineCode",{parentName:"li"},"environmentProvider")," used in ",(0,i.mdx)("inlineCode",{parentName:"li"},"prepareSurfaceEntryPoint.js"),".")))),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TEnvironmentProviderOptions"),": The type of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions")," parameter.")),(0,i.mdx)("h3",{id:"return-value"},"Return Value"),(0,i.mdx)("p",null,"A query reference with the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dispose"),": a method that will release the query reference from being retained by the store. This can cause the data referenced by the query reference to be garbage collected.")),(0,i.mdx)("p",null,"The exact format of the return value is ",(0,i.mdx)("em",{parentName:"p"},"unstable and highly likely to change"),". We strongly recommend not using any other properties of the return value, as such code would be highly likely to break when upgrading to future versions of Relay. Instead, pass the result of ",(0,i.mdx)("inlineCode",{parentName:"p"},"loadQuery()")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),"."),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of ",(0,i.mdx)("inlineCode",{parentName:"li"},"preloadQuery_DEPRECATED"),", which would only write data to the store if the query was passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,i.mdx)("li",{parentName:"ul"},"the query reference returned from ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," will be retained by the relay store, preventing it the data from being garbage collected. Once you call ",(0,i.mdx)("inlineCode",{parentName:"li"},".dispose()")," on the query reference, it can be garbage collected."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will throw an error if it is called during React's render phase.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);
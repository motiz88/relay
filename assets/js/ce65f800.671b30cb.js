(self.webpackChunk=self.webpackChunk||[]).push([[10863],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>m,useMDXComponents:()=>d,withMDXComponents:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){return function(t){var r=d(t.components);return n.createElement(e,i({},t,{components:r}))}},d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,f=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(79973),a=r(67294),i=r(73727),o=r(52263),c=r(13919),l=r(10412),s=(0,a.createContext)({collectLink:function(){}}),u=r(44996),d=r(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const h=function(e){var t,r,h=e.isNavLink,f=e.to,m=e.href,v=e.activeClassName,w=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,k=(0,n.Z)(e,p),x=(0,o.default)().siteConfig,E=x.trailingSlash,O=x.baseUrl,R=(0,u.useBaseUrlUtils)().withBaseUrl,C=(0,a.useContext)(s),F=f||m,j=(0,c.Z)(F),S=null==F?void 0:F.replace("pathname://",""),B=void 0!==S?(r=S,y&&function(e){return e.startsWith("/")}(r)?R(r):r):void 0;B&&j&&(B=(0,d.applyTrailingSlash)(B,{trailingSlash:E,baseUrl:O}));var P=(0,a.useRef)(!1),U=h?i.OL:i.rU,L=l.default.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!L&&j&&null!=B&&window.docusaurus.prefetch(B),function(){L&&M.current&&M.current.disconnect()}}),[M,B,L,j]);var D=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,N=!B||!j||D;return B&&j&&!D&&!b&&C.collectLink(B),N?a.createElement("a",Object.assign({href:B},F&&!j&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(U,Object.assign({},k,{onMouseEnter:function(){P.current||null==B||(window.docusaurus.preload(B),P.current=!0)},innerRef:function(e){var t,r;L&&e&&j&&(t=e,r=function(){null!=B&&window.docusaurus.prefetch(B)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),r())}))})),M.current.observe(t))},to:B||""},h&&{isActive:w,activeClassName:v}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(36742),a=r(44256),i=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(c,null,i.createElement(s,null),i.createElement(l,null),i.createElement(u,null))},p=function(){return i.createElement(c,null,i.createElement(l,null),i.createElement(u,null))};const h=function(){return(0,a.fbContent)({internal:i.createElement(d,null),external:i.createElement(p,null)})}},43880:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>h});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=r(68629),c=["components"],l={id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},s=void 0,u={unversionedId:"principles-and-architecture/videos",id:"version-v12.0.0/principles-and-architecture/videos",isDocsHomePage:!1,title:"Videos",description:"Relay videos",source:"@site/versioned_docs/version-v12.0.0/principles-and-architecture/videos.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/videos/",permalink:"/docs/v12.0.0/principles-and-architecture/videos/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/principles-and-architecture/videos.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1647562825,formattedLastUpdatedAt:"3/18/2022",frontMatter:{id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},sidebar:"version-v12.0.0/docs",previous:{title:"Runtime Architecture",permalink:"/docs/v12.0.0/principles-and-architecture/runtime-architecture/"},next:{title:"Community Learning Resources",permalink:"/docs/v12.0.0/community-learning-resources/"}},d=[{value:"React Conf 2021",id:"react-conf-2021",children:[{value:"Re-introducing Relay | Robert Balicki",id:"re-introducing-relay--robert-balicki",children:[],level:3}],level:2},{value:"React Conf 2019",id:"react-conf-2019",children:[{value:"Data Fetching With Suspense In Relay | Joe Savona",id:"data-fetching-with-suspense-in-relay--joe-savona",children:[],level:3}],level:2},{value:"Facebook F8 2019",id:"facebook-f8-2019",children:[{value:"Building the new Facebook.com with React, GraphQL and Relay",id:"building-the-new-facebookcom-with-react-graphql-and-relay",children:[],level:3}],level:2},{value:"Facebook F8 2017",id:"facebook-f8-2017",children:[{value:"The Evolution of React and GraphQL at Facebook and Beyond",id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond",children:[],level:3}],level:2},{value:"Silicon Valley ReactJS Meetup",id:"silicon-valley-reactjs-meetup",children:[{value:"Relay Modern: simpler, faster, more predictable (slides)",id:"relay-modern-simpler-faster-more-predictable-slides",children:[],level:3},{value:"Zero to GraphQL in 30 minutes",id:"zero-to-graphql-in-30-minutes",children:[],level:3}],level:2},{value:"GraphQL Europe 2018",id:"graphql-europe-2018",children:[{value:"Data Masking in GraphQL Clients",id:"data-masking-in-graphql-clients",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"react-conf-2021"},"React Conf 2021"),(0,i.mdx)("h3",{id:"re-introducing-relay--robert-balicki"},"Re-introducing Relay | Robert Balicki"),(0,i.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/lhVGdErZuN4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,i.mdx)("h2",{id:"react-conf-2019"},"React Conf 2019"),(0,i.mdx)("h3",{id:"data-fetching-with-suspense-in-relay--joe-savona"},"Data Fetching With Suspense In Relay | Joe Savona"),(0,i.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/Tl0S7QkxFE4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,i.mdx)("h2",{id:"facebook-f8-2019"},"Facebook F8 2019"),(0,i.mdx)("h3",{id:"building-the-new-facebookcom-with-react-graphql-and-relay"},(0,i.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/"},"Building the new Facebook.com with React, GraphQL and Relay")),(0,i.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/WxPtYJRjLL0?start=215",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,width:"640",height:"360",frameBorder:"0"}),(0,i.mdx)("h2",{id:"facebook-f8-2017"},"Facebook F8 2017"),(0,i.mdx)("h3",{id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond"},(0,i.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/f8-2017/the-evolution-of-react-and-graphql-at-facebook-and-beyond/"},"The Evolution of React and GraphQL at Facebook and Beyond")),(0,i.mdx)("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers%2Fvideos%2F10154614710193553%2F&show_text=0&width=640",width:640,height:360,frameBorder:"0",allowFullScreen:!0}),(0,i.mdx)("h2",{id:"silicon-valley-reactjs-meetup"},(0,i.mdx)("a",{parentName:"h2",href:"http://www.meetup.com/Silicon-Valley-ReactJS-Meetup/"},"Silicon Valley ReactJS Meetup")),(0,i.mdx)("h3",{id:"relay-modern-simpler-faster-more-predictable-slides"},"Relay Modern: simpler, faster, more predictable (",(0,i.mdx)("a",{parentName:"h3",href:"https://speakerdeck.com/wincent/relay-2-simpler-faster-more-predictable"},"slides"),")"),(0,i.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/OEfUBN9dAI8",frameBorder:"0",allowFullScreen:!0}),(0,i.mdx)("h3",{id:"zero-to-graphql-in-30-minutes"},"Zero to GraphQL in 30 minutes"),(0,i.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/UBGzsb2UkeY",frameBorder:"0",allowFullScreen:!0}),(0,i.mdx)("h2",{id:"graphql-europe-2018"},(0,i.mdx)("a",{parentName:"h2",href:"https://www.graphql-europe.org/"},"GraphQL Europe 2018")),(0,i.mdx)("h3",{id:"data-masking-in-graphql-clients"},"Data Masking in GraphQL Clients"),(0,i.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/ww5UQ50oHok",frameBorder:"0",allowFullScreen:!0}),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);
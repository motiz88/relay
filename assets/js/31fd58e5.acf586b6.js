"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[78336],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){return function(t){var n=s(t.components);return a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(39960),r=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var d=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return o.createElement(l,null,o.createElement(u,null),o.createElement(d,null),o.createElement(c,null))},m=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(c,null))};const p=function(){return(0,r.fbContent)({internal:o.createElement(s,null),external:o.createElement(m,null)})}},19596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(68629),l=["components"],d={id:"use-lazy-load-query",title:"useLazyLoadQuery",slug:"/api-reference/use-lazy-load-query/",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",keywords:["lazy fetching","query","fetch"]},u=void 0,c={unversionedId:"api-reference/hooks/use-lazy-load-query",id:"version-v13.0.0/api-reference/hooks/use-lazy-load-query",title:"useLazyLoadQuery",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-lazy-load-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-lazy-load-query/",permalink:"/docs/v13.0.0/api-reference/use-lazy-load-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/hooks/use-lazy-load-query.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Rujin Cao",lastUpdatedAt:1663818425,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"use-lazy-load-query",title:"useLazyLoadQuery",slug:"/api-reference/use-lazy-load-query/",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",keywords:["lazy fetching","query","fetch"]},sidebar:"version-v13.0.0/docs",previous:{title:"loadQuery",permalink:"/docs/v13.0.0/api-reference/load-query/"},next:{title:"useFragment",permalink:"/docs/v13.0.0/api-reference/use-fragment/"}},s={},m=[{value:"<code>useLazyLoadQuery</code>",id:"uselazyloadquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Differences with <code>QueryRenderer</code>",id:"differences-with-queryrenderer",level:3}],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"uselazyloadquery"},(0,o.mdx)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),(0,o.mdx)("p",null,"Hook used to fetch a GraphQL query during render. This hook can trigger multiple nested or waterfalling round trips if used without caution, and waits until render to start a data fetch (when it can usually start a lot sooner than render), thereby degrading performance. Instead, prefer ",(0,o.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,o.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery")),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useLazyLoadQuery} = require('react-relay');\n\nfunction App() {\n  const data = useLazyLoadQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: 4},\n    {fetchPolicy: 'store-or-network'},\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/presence-of-data"},"Garbage Collection")," guides):",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"(default)"))," ",(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,o.mdx)("em",{parentName:"li"},"not")," be made."),(0,o.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,o.mdx)("li",{parentName:"ul"},'"network-only": ',(0,o.mdx)("em",{parentName:"li"},"will")," ",(0,o.mdx)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."),(0,o.mdx)("li",{parentName:"ul"},'"store-only": ',(0,o.mdx)("em",{parentName:"li"},"will")," ",(0,o.mdx)("em",{parentName:"li"},"only")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"never")," send a network request to fetch the query. In this case, the responsibility of fetching the query falls to the caller, but this policy could also be used to read and operate on data that is entirely ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/local-data-updates"},"local"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fetchKey"),": A ",(0,o.mdx)("inlineCode",{parentName:"li"},"fetchKey")," can be passed to force a re-evaluation of the current query and variables when the component re-renders, even if the variables didn't change, or even if the component isn't remounted (similarly to how passing a different ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," to a React component will cause it to remount). If the ",(0,o.mdx)("inlineCode",{parentName:"li"},"fetchKey")," is different from the one used in the previous render, the current query will be re-evaluated against the store, and it might be refetched depending on the current ",(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"," "))," Default value: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,o.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,o.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option.")))),(0,o.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,o.mdx)("h3",{id:"return-value"},"Return Value"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," above is: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{| user: ?{| name: ?string |} |}"),".")))),(0,o.mdx)("h3",{id:"behavior"},"Behavior"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"It is expected for ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to have been rendered under a ",(0,o.mdx)("a",{parentName:"li",href:"../relay-environment-provider"},(0,o.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", in order to access the correct Relay environment, otherwise an error will be thrown."),(0,o.mdx)("li",{parentName:"ul"},"Calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),"  will fetch and render the data for this query, and it may ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states"},(0,o.mdx)("em",{parentName:"a"},(0,o.mdx)("em",{parentName:"em"},"suspend")))," while the network request is in flight, depending on the specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),", and whether cached data is available, or if it needs to send and wait for a network request. If ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," causes the component to suspend, you'll need to make sure that there's a ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense")," ancestor wrapping this component in order to show the appropriate loading state.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))),(0,o.mdx)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),(0,o.mdx)("li",{parentName:"ul"},"After a component using ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has committed, re-rendering/updating the component will not cause the query to be fetched again.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"If the component is re-rendered with ",(0,o.mdx)("em",{parentName:"li"},"different query variables,")," that will cause the query to be fetched again with the new variables, and potentially re-render with different data."),(0,o.mdx)("li",{parentName:"ul"},"If the component ",(0,o.mdx)("em",{parentName:"li"},"unmounts and remounts"),", that will cause the current query and variables to be refetched (depending on the ",(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache).")))),(0,o.mdx)("h3",{id:"differences-with-queryrenderer"},"Differences with ",(0,o.mdx)("inlineCode",{parentName:"h3"},"QueryRenderer")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," no longer takes a Relay environment as a parameter, and thus no longer sets the environment in React Context, like ",(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," did. Instead, ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," should be used as a descendant of a ",(0,o.mdx)("a",{parentName:"li",href:"../relay-environment-provider"},(0,o.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", which now sets the Relay environment in Context. Usually, you should render a single ",(0,o.mdx)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of the application, to set a single Relay environment for the whole application."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," will use ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states"},"Suspense")," to allow developers to render loading states using Suspense boundaries, and will throw errors if network errors occur, which can be caught and rendered with Error Boundaries. This as opposed to providing error objects or null props to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," render function to indicate errors or loading states."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," fully supports fetch policies in order to reuse data that is cached in the Relay store instead of solely relying on the network response cache."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has better type safety guarantees for the data it returns, which was not possible with QueryRenderer since we couldn't parametrize the type of the data with a renderer api.")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,r=0;const o={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=r++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const r=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=o(n(47596)),t.uidocs=o(n(17483)),t.feedback=o(n(24855)),t.inpageeditor=o(n(27312));const i=["internal","external"];function l(e){return u(e),c()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=u,t.isInternal=c,t.hasEphemeralDiffNumber=function(){return Boolean(s())},t.getEphemeralDiffNumber=s,t.FbInternalOnly=function(e){return c()?e.children:null},t.OssOnly=function(e){return c()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const r=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:o}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const r=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);
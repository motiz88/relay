(self.webpackChunk=self.webpackChunk||[]).push([[93634],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},68629:(e,n,r)=>{"use strict";r.d(n,{Z:()=>d});var t=r(44256),a=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var l=function(){var e=a.useState(!1),n=e[0],r=e[1],t=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},p=function(){return a.createElement(i,null,a.createElement(s,null),a.createElement(l,null))},u=function(){return a.createElement(i,null,a.createElement(l,null))};const d=function(){return(0,t.fbContent)({internal:a.createElement(p,null),external:a.createElement(u,null)})}},29718:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>m});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),i=r(68629),l=["components"],s={id:"relay-hooks-and-legacy-container-apis",title:"Relay Hooks and Legacy Container APIs",slug:"/migration-and-compatibility/relay-hooks-and-legacy-container-apis/"},p=void 0,u={unversionedId:"migration-and-compatibility/relay-hooks-and-legacy-container-apis",id:"version-v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis",isDocsHomePage:!1,title:"Relay Hooks and Legacy Container APIs",description:"Compatibility between Relay Hooks and Containers",source:"@site/versioned_docs/version-v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/relay-hooks-and-legacy-container-apis/",permalink:"/docs/v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1638804627,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"relay-hooks-and-legacy-container-apis",title:"Relay Hooks and Legacy Container APIs",slug:"/migration-and-compatibility/relay-hooks-and-legacy-container-apis/"},sidebar:"version-v11.0.0/docs",previous:{title:"Suspense Compatibility",permalink:"/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/"},next:{title:"Relay DevTools",permalink:"/docs/v11.0.0/debugging/relay-devtools/"}},d=[{value:"Compatibility between Relay Hooks and Containers",id:"compatibility-between-relay-hooks-and-containers",children:[]},{value:"Migrating existing container-based code",id:"migrating-existing-container-based-code",children:[{value:"<code>QueryRenderer</code> \u2192 <code>useLazyLoadQuery</code>",id:"queryrenderer-\u2192-uselazyloadquery",children:[]},{value:"<code>QueryRenderer</code> \u2192 <code>useQueryLoader</code> + <code>usePreloadedQuery</code>",id:"queryrenderer-\u2192-usequeryloader--usepreloadedquery",children:[]},{value:"Fragment Container \u2192 <code>useFragment</code>",id:"fragment-container-\u2192-usefragment",children:[]},{value:"Refetch Container \u2192 <code>useRefetchableFragment</code>",id:"refetch-container-\u2192-userefetchablefragment",children:[]},{value:"Pagination Container \u2192 <code>usePaginationFragment</code>",id:"pagination-container-\u2192-usepaginationfragment",children:[]},{value:"QueryRenderer \u2192 useEntryPointLoader + EntryPointContainer",id:"queryrenderer-\u2192-useentrypointloader--entrypointcontainer",children:[]},{value:"commitMutation \u2192 useMutation",id:"commitmutation-\u2192-usemutation",children:[]},{value:"requestSubscription \u2192 useSubscription",id:"requestsubscription-\u2192-usesubscription",children:[]}]}],c={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"compatibility-between-relay-hooks-and-containers"},"Compatibility between Relay Hooks and Containers"),(0,o.kt)("p",null,"Relay Hooks are fully compatible with Relay's ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/legacy-apis/"},"container-based APIs"),", meaning that containers can render components that use Hooks, and vice-versa."),(0,o.kt)("p",null,"This means that you can adopt Relay Hooks incrementally, either by using them exclusively for new code, or by migrating specific parts of your app, without affecting the rest of your existing application."),(0,o.kt)("h2",{id:"migrating-existing-container-based-code"},"Migrating existing container-based code"),(0,o.kt)("p",null,"As we've mentioned, migrating existing code to Relay Hooks is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not"))," required, and ",(0,o.kt)("strong",{parentName:"p"},"container-based code will continue to work"),"."),(0,o.kt)("p",null,"However, in this section we will go over common migration patterns you can follow if you do choose to migrate container-based code to Relay Hooks."),(0,o.kt)("h3",{id:"queryrenderer-\u2192-uselazyloadquery"},(0,o.kt)("inlineCode",{parentName:"h3"},"QueryRenderer")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useLazyLoadQuery")),(0,o.kt)("p",null,"Converting from a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," to the ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-lazy-load-query/"},(0,o.kt)("inlineCode",{parentName:"a"},"useLazyLoadQuery"))," Hook is the most straightforward conversion, and will have a similar behavior of fetching the specified query ",(0,o.kt)("em",{parentName:"p"},"during render.")),(0,o.kt)("p",null,"To convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", you need to take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Render a ",(0,o.kt)("a",{parentName:"li",href:"../../api-reference/relay-environment-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider"))," where the QueryRenderer was, or above it. Usually, we recommend rendering the ",(0,o.kt)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of your app:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<RelayEnvironmentProvider environment={MyAppEnvironment}>\n  <App />\n</RelayEnvironmentProvider>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Convert the ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),":")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nexport default function Home() {\n  return (\n    <QueryRenderer\n      environment={MyAppEnvironment}\n      query={graphql`\n        query HomeQuery($id: ID!) {\n          user(id: $id) {\n            name\n          }\n        }\n      `}\n      variables={{id: 4}}\n      render={(props, error) => {\n        if (error) {\n          return <Error />;\n        }\n        if (!props) {\n          return <Loading />;\n        }\n        return <h1>{props.user?.name}</h1>\n      }}\n    />\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:"),"\nFetch and render the query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, useLazyLoadQuery} from 'react-relay';\n\nexport default function Home() {\n  const data = useLazyLoadQuery(\n    graphql`\n      query HomeQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: 4},\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../guided-tour/rendering/loading-states/"},"Loading states")," and ",(0,o.kt)("a",{parentName:"p",href:"../../guided-tour/rendering/error-states/"},"error states")," are handled by Suspense and Error Boundaries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<ErrorBoundary renderError={Error}>\n  <Suspense fallback={<Loading />}>\n    <Home />\n  </Suspense>\n</ErrorBoundary>\n")),(0,o.kt)("h3",{id:"queryrenderer-\u2192-usequeryloader--usepreloadedquery"},(0,o.kt)("inlineCode",{parentName:"h3"},"QueryRenderer")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useQueryLoader")," + ",(0,o.kt)("inlineCode",{parentName:"h3"},"usePreloadedQuery")),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", using ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-query-loader/"},(0,o.kt)("inlineCode",{parentName:"a"},"useQueryLoader"))," in combination with ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-preloaded-query/"},(0,o.kt)("inlineCode",{parentName:"a"},"usePreloadedQuery"))," will start fetching the data ",(0,o.kt)("em",{parentName:"p"},"ahead"),' of render, following the "render-as-you-fetch" pattern. This means that the data fetch will start sooner, and potentially speed up the time it takes to show content to users.'),(0,o.kt)("p",null,"To make best use of this pattern, query loading is usually integrated at the router level, or other parts of your UI infra. To see a full example, see our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/issue-tracker/src/routes.js"},(0,o.kt)("inlineCode",{parentName:"a"},"issue-tracker"))," example app."),(0,o.kt)("p",null,"To convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueryLoader"),", you need to take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Render a ",(0,o.kt)("a",{parentName:"li",href:"../../api-reference/relay-environment-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider"))," where the QueryRenderer was, or above it. Usually, we recommend rendering the ",(0,o.kt)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of your app:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<RelayEnvironmentProvider environment={MyAppEnvironment}>\n  <App />\n</RelayEnvironmentProvider>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Convert the ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"useQueryLoader")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery"),":")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nexport default function UserPopover() {\n  return (\n    <QueryRenderer\n      environment={MyAppEnvironment}\n      query={graphql`\n        query UserPopoverQuery($id: ID!) {\n          user(id: $id) {\n            name\n          }\n        }\n      `}\n      variables={{id: 4}}\n      render={(props, error) => {\n        if (error) {\n          return <Error />;\n        }\n        if (!props) {\n          return <Loading />;\n        }\n        return <h1>{props.user?.name}</h1>\n      }}\n    />\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:"),"\nRender the preloaded query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, usePreloadedQuery} from 'react-relay';\n\nexport default function UserPopover(props) {\n  const data = usePreloadedQuery(\n    graphql`\n      query UserPopoverQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    props.queryRef,\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),(0,o.kt)("p",null,"Load the query with ",(0,o.kt)("inlineCode",{parentName:"p"},"loadQuery")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueryLoader"),". This part of the code would usually be integrated in your routing, or other parts of your UI infra:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {useQueryLoader} from 'react-relay';\n\n// Import the query defined in the UserPopover component\nimport UserPopoverQuery from '__generated__/UserPopoverQuery.graphql';\n\n// This is *NOT* a real-world example, only used\n// to illustrate usage.\n\nexport default function UserPopoverButton(props) {\n  const [queryRef, loadQuery] = useQueryLoader(UserPopoverQuery)\n\n  const handleClick = useCallback(() => {\n    // Load the query in the event handler, onClick\n    loadQuery({id: props.userID})\n  }, [loadQuery, props.userID]);\n\n  return (\n    <>\n      <Button onClick={handleClick} />\n      {queryRef != null ?\n        <Popover>\n\n          {/* Loading and error states are handled by\n          Suspense and Error Boundaries */}\n          <ErrorBoundary renderError={Error}>\n            <Suspense fallback={<Loading />}>\n\n              {/*Pass the queryRef*/}\n              <UserPopover queryRef={queryRef} />\n\n            </Suspense>\n          </ErrorBoundary>\n        </Popover>\n        : null\n      }\n    </>\n  );\n}\n")),(0,o.kt)("h3",{id:"fragment-container-\u2192-usefragment"},"Fragment Container \u2192 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useFragment")),(0,o.kt)("p",null,"Fragment Containers will map directly into a ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-fragment/"},(0,o.kt)("inlineCode",{parentName:"a"},"useFragment"))," call:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, createFragmentContainer} from 'react-relay';\n\nfunction UserComponent(props: Props) {\n  const user = props.user;\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <div>\n        <img src={user.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n\nexport default createFragmentContainer(UserComponent, {\n  user: graphql`\n    fragment UserComponent_user on User {\n      name\n      age\n      profile_picture(scale: 2) {\n        uri\n      }\n    }\n  `,\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, useFragment} from 'react-relay';\n\nexport default function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>\n        <img src={data.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n")),(0,o.kt)("h3",{id:"refetch-container-\u2192-userefetchablefragment"},"Refetch Container \u2192 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useRefetchableFragment")),(0,o.kt)("p",null,"The refetch API for ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-refetchable-fragment/"},(0,o.kt)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," has been simplified and reduced compared to the former Refetch Container. Migration will require mapping inputs into the new API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, createRefetchContainer} from 'react-relay';\n\nfunction CommentBody(props: Props) {\n  const relay = props.relay;\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => relay.refetch(\n          {lang: 'SPANISH'}, // fragmentVariables\n          null,  // renderVariables\n          error => { ... },\n          {force: true}\n        )}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n\nexport default createRefetchContainer(\n  CommentBody,\n  {\n    user: graphql`\n      fragment CommentBody_comment on Comment {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n  },\n\n  // This option is no longer required, the refetch query\n  // will automatically be generated by Relay using the @refetchable\n  // directive.\n  graphql`\n    query AppQuery($id: ID!, lang: Lang) {\n      node(id: $id) {\n        ...CommentBody_comment\n      }\n    }\n  `,\n);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, useRefetchableFragment} from 'react-relay';\n\nexport default function CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const handleClick = useCallback(() => {\n    refetch({lang: 'SPANISH'});\n  }, [refetch]);\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={handleClick}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n")),(0,o.kt)("h3",{id:"pagination-container-\u2192-usepaginationfragment"},"Pagination Container \u2192 ",(0,o.kt)("inlineCode",{parentName:"h3"},"usePaginationFragment")),(0,o.kt)("p",null,"The pagination API for ",(0,o.kt)("a",{parentName:"p",href:"../../api-reference/use-pagination-fragment/"},(0,o.kt)("inlineCode",{parentName:"a"},"usePaginationFragment"))," has been greatly simplified and reduced compared to the former PaginationContainer. Migration will require mapping inputs into the new API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'React\';\nimport {graphql, createPaginationContainer} from \'react-relay\';\n\nclass UserContainerComponent extends React.Component {\n  render(): React.Node {\n    const isLoading = this.props.relay.isLoading() || this.state.loading;\n    const hasMore = this.props.relay.hasMore();\n\n    return (\n      <>\n        <FriendsList friends={this.props.user?.friends} />\n        <Button\n          onClick={() => this.loadMore()}\n          disabled={!hasMore || isLoading}>\n          Load More\n          {isLoading && <InlineSpinner />}\n        </Button>\n      </>\n    );\n  }\n\n  loadMore() {\n    if (\n      !this.props.relay.hasMore() ||\n      this.props.relay.isLoading() ||\n      this.state.loading\n    ) {\n      return;\n    }\n\n    this.setState({loading: true});\n\n    this.props.relay.loadMore(5, () => this.setState({loading: false}));\n  }\n}\n\nexport default createPaginationContainer(\n  UserContainerComponent,\n  {\n    user: graphql`\n      fragment UserContainerComponent_user on User\n      @argumentDefinitions(count: {type: "Int!"}, cursor: {type: "ID"})\n      @refetchable(queryName: "UserComponentRefetchQuery") {\n        friends(first: $count, after: $cursor)\n          @connection(key: "UserComponent_user_friends") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    `,\n  },\n  {\n    // This option is no longer necessary, usePaginationFragment supports\n    // bi-directional pagination out of the box.\n    direction: \'forward\',\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getConnectionFromProps(props: Props) {\n      return props.user?.friends;\n    },\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getFragmentVariables(vars, count) {\n      return {...vars, count};\n    },\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getVariables(props: Props, {count, cursor}) {\n      return {\n        cursor,\n        count,\n      };\n    },\n\n    // This option is no longer required, the pagination query\n    // will automatically be generated by Relay using the @refetchable\n    // directive.\n    query: graphql`\n      query UserContainerComponentQuery {\n        viewer {\n          actor {\n            ... on User {\n              ...UserContainerComponent_user @arguments(count: 10)\n            }\n          }\n        }\n      }\n    `,\n  },\n);\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'React';\nimport {graphql, usePaginationFragment} from 'react-relay';\n\nexport default function UserComponent(props: Props) {\n  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment(\n    graphql`\n      fragment UserComponent_user on User\n      @refetchable(queryName: \"UserComponentRefetchQuery\") {\n        friends(first: $count, after: $after)\n          @connection(key: \"UserComponent_user_friends\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const handleClick = useCallback(() => {\n    loadNext(5)\n  }, [loadNext])\n\n  return (\n    <>\n      <FriendsList friends={data?.friends?.edges} />\n      <Button onClick={handleClick} disabled={!hasNext || isLoadingNext}>\n        Load More\n        {isLoadingNext && <InlineSpinner />}\n      </Button>\n    </>\n  );\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"queryrenderer-\u2192-useentrypointloader--entrypointcontainer"},"QueryRenderer \u2192 useEntryPointLoader + EntryPointContainer"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"commitmutation-\u2192-usemutation"},"commitMutation \u2192 useMutation"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"requestsubscription-\u2192-usesubscription"},"requestSubscription \u2192 useSubscription"),(0,o.kt)("p",null,"TODO"),(0,o.kt)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);
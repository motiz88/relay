(self.webpackChunk=self.webpackChunk||[]).push([[27616],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(44256),a=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var d=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},l=function(){return a.createElement(i,null,a.createElement(c,null),a.createElement(d,null))},s=function(){return a.createElement(i,null,a.createElement(d,null))};const p=function(){return(0,r.fbContent)({internal:a.createElement(l,null),external:a.createElement(s,null)})}},69283:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>g});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(68629),d=(n(44256),["components"]),c={id:"store",title:"RelayModernStore",slug:"/api-reference/store/"},l=void 0,s={unversionedId:"api-reference/relay-runtime/store",id:"version-v11.0.0/api-reference/relay-runtime/store",isDocsHomePage:!1,title:"RelayModernStore",description:"The Relay Store can be used to programmatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.",source:"@site/versioned_docs/version-v11.0.0/api-reference/relay-runtime/store.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/store/",permalink:"/docs/v11.0.0/api-reference/store/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/relay-runtime/store.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1638804627,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"store",title:"RelayModernStore",slug:"/api-reference/store/"},sidebar:"version-v11.0.0/docs",previous:{title:"fetchQuery",permalink:"/docs/v11.0.0/api-reference/fetch-query/"},next:{title:"commitMutation",permalink:"/docs/v11.0.0/api-reference/commit-mutation/"}},p=[{value:"RecordSourceSelectorProxy",id:"recordsourceselectorproxy",children:[{value:"<code>create(dataID: string, typeName: string): RecordProxy</code>",id:"createdataid-string-typename-string-recordproxy",children:[]},{value:"<code>delete(dataID: string): void</code>",id:"deletedataid-string-void",children:[]},{value:"<code>get(dataID: string): ?RecordProxy</code>",id:"getdataid-string-recordproxy",children:[]},{value:"<code>getRoot(): RecordProxy</code>",id:"getroot-recordproxy",children:[]},{value:"<code>getRootField(fieldName: string): ?RecordProxy</code>",id:"getrootfieldfieldname-string-recordproxy",children:[]},{value:"<code>getPluralRootField(fieldName: string): ?Array&lt;?RecordProxy&gt;</code>",id:"getpluralrootfieldfieldname-string-arrayrecordproxy",children:[]},{value:"<code>invalidateStore(): void</code>",id:"invalidatestore-void",children:[]}]},{value:"RecordProxy",id:"recordproxy",children:[{value:"<code>getDataID(): string</code>",id:"getdataid-string",children:[]},{value:"<code>getType(): string</code>",id:"gettype-string",children:[]},{value:"<code>getValue(name: string, arguments?: ?Object): mixed</code>",id:"getvaluename-string-arguments-object-mixed",children:[]},{value:"<code>getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy</code>",id:"getlinkedrecordname-string-arguments-object-recordproxy",children:[]},{value:"<code>getLinkedRecords(name: string, arguments?: ?Object): ?Array&lt;?RecordProxy&gt;</code>",id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy",children:[]},{value:"<code>getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)</code>",id:"getorcreatelinkedrecordname-string-typename-string-arguments-object",children:[]},{value:"<code>setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy</code>",id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy",children:[]},{value:"<code>copyFieldsFrom(sourceRecord: RecordProxy): void</code>",id:"copyfieldsfromsourcerecord-recordproxy-void",children:[]},{value:"<code>setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)</code>",id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object",children:[]},{value:"<code>setLinkedRecords(records: Array&lt;RecordProxy&gt;, name: string, variables?: ?Object)</code>",id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object",children:[]},{value:"<code>invalidateRecord(): void</code>",id:"invalidaterecord-void",children:[]}]},{value:"ConnectionHandler",id:"connectionhandler",children:[{value:"<code>getConnection(record: RecordProxy, key: string, filters?: ?Object)</code>",id:"getconnectionrecord-recordproxy-key-string-filters-object",children:[]},{value:"Edge creation and insertion",id:"edge-creation-and-insertion",children:[]},{value:"<code>deleteNode(connection: RecordProxy, nodeID: string): void</code>",id:"deletenodeconnection-recordproxy-nodeid-string-void",children:[]}]}],u={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Relay Store can be used to programmatically update client-side data inside ",(0,o.kt)("a",{parentName:"p",href:"../../guided-tour/updating-data/graphql-mutations/"},(0,o.kt)("inlineCode",{parentName:"a"},"updater")," functions"),". The following is a reference of the Relay Store interface."),(0,o.kt)("p",null,"Table of Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recordsourceselectorproxy"},"RecordSourceSelectorProxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recordproxy"},"RecordProxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#connectionhandler"},"ConnectionHandler"))),(0,o.kt)("h2",{id:"recordsourceselectorproxy"},"RecordSourceSelectorProxy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," is the type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," that ",(0,o.kt)("a",{parentName:"p",href:"../../guided-tour/updating-data/graphql-mutations/"},(0,o.kt)("inlineCode",{parentName:"a"},"updater")," functions")," receive as an argument. The following is the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface RecordSourceSelectorProxy {\n  create(dataID: string, typeName: string): RecordProxy;\n  delete(dataID: string): void;\n  get(dataID: string): ?RecordProxy;\n  getRoot(): RecordProxy;\n  getRootField(fieldName: string): ?RecordProxy;\n  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;\n  invalidateStore(): void;\n}\n")),(0,o.kt)("h3",{id:"createdataid-string-typename-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"create(dataID: string, typeName: string): RecordProxy")),(0,o.kt)("p",null,"Creates a new record in the store given a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"typeName")," as defined by the GraphQL schema. Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the newly created record."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.create(dataID, 'Todo');\n")),(0,o.kt)("h3",{id:"deletedataid-string-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"delete(dataID: string): void")),(0,o.kt)("p",null,"Deletes a record from the store given its ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID"),"."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"store.delete(dataID);\n")),(0,o.kt)("h3",{id:"getdataid-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"get(dataID: string): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a record from the store given its ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID"),". Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(dataID);\n")),(0,o.kt)("h3",{id:"getroot-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getRoot(): RecordProxy")),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," representing the root of the GraphQL document."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Represents root query\nconst root = store.getRoot();\n")),(0,o.kt)("h3",{id:"getrootfieldfieldname-string-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getRootField(fieldName: string): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a root field from the store given the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.kt)("h4",{id:"example-4"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const viewer = store.getRootField('viewer');\n")),(0,o.kt)("h3",{id:"getpluralrootfieldfieldname-string-arrayrecordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getPluralRootField(fieldName: string): ?Array<?RecordProxy>")),(0,o.kt)("p",null,"Retrieves a root field that represents a collection from the store given the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns an array of ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxies")),"."),(0,o.kt)("h4",{id:"example-5"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"nodes(first: 10) {\n  # ...\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const nodes = store.getPluralRootField('nodes');\n")),(0,o.kt)("h3",{id:"invalidatestore-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"invalidateStore(): void")),(0,o.kt)("p",null,"Globally invalidates the Relay store. This will cause any data that was written to the store before invalidation occurred to be considered stale, and will be considered to require refetch the next time a query is checked with ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.kt)("h4",{id:"example-6"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"store.invalidateStore();\n")),(0,o.kt)("p",null,"After global invalidation, any query that is checked before refetching it will be considered stale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.kt)("h2",{id:"recordproxy"},"RecordProxy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy")," serves as an interface to mutate records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface RecordProxy {\n  copyFieldsFrom(sourceRecord: RecordProxy): void;\n  getDataID(): string;\n  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;\n  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;\n  getOrCreateLinkedRecord(\n    name: string,\n    typeName: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  getType(): string;\n  getValue(name: string, arguments?: ?Object): mixed;\n  setLinkedRecord(\n    record: RecordProxy,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setLinkedRecords(\n    records: Array<?RecordProxy>,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;\n  invalidateRecord(): void;\n}\n")),(0,o.kt)("h3",{id:"getdataid-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"getDataID(): string")),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataID")," of the current record."),(0,o.kt)("h4",{id:"example-7"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const id = record.getDataID();\n")),(0,o.kt)("h3",{id:"gettype-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"getType(): string")),(0,o.kt)("p",null,"Gets the type of the current record, as defined by the GraphQL schema."),(0,o.kt)("h4",{id:"example-8"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const type = user.getType();  // User\n\n")),(0,o.kt)("h3",{id:"getvaluename-string-arguments-object-mixed"},(0,o.kt)("inlineCode",{parentName:"h3"},"getValue(name: string, arguments?: ?Object): mixed")),(0,o.kt)("p",null,"Gets the value of a field in the current record given the field name."),(0,o.kt)("h4",{id:"example-9"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name');\n")),(0,o.kt)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.kt)("h4",{id:"example-10"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name(arg: $arg)\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"getlinkedrecordname-string-arguments-object-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy")),(0,o.kt)("p",null,"Retrieves a record associated with the current record given the field name, as defined by the GraphQL document. Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.kt)("h4",{id:"example-11"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n    name\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h4",{id:"example-12"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer(arg: $arg) {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>")),(0,o.kt)("p",null,"Retrieves the set of records associated with the current record given the field name, as defined by the GraphQL document. Returns an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxies"),"."),(0,o.kt)("h4",{id:"example-13"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecords('nodes');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h4",{id:"example-14"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes(first: $count) {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecords('nodes', {count: 10});\n")),(0,o.kt)("h3",{id:"getorcreatelinkedrecordname-string-typename-string-arguments-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)")),(0,o.kt)("p",null,"Retrieves a record associated with the current record given the field name, as defined by the GraphQL document. If the linked record does not exist, it will be created given the type name. Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.kt)("h4",{id:"example-15"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist\n\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy"},(0,o.kt)("inlineCode",{parentName:"h3"},"setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy")),(0,o.kt)("p",null,"Mutates the current record by setting a new value on the specified field. Returns the mutated record."),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name');\n")),(0,o.kt)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name', {arg: 'value'});\n")),(0,o.kt)("h3",{id:"copyfieldsfromsourcerecord-recordproxy-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"copyFieldsFrom(sourceRecord: RecordProxy): void")),(0,o.kt)("p",null,"Mutates the current record by copying the fields over from the passed in record ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceRecord"),"."),(0,o.kt)("h4",{id:"example-16"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(id1);\nconst otherRecord = store.get(id2);\nrecord.copyFieldsFrom(otherRecord); // Mutates `record`\n\n")),(0,o.kt)("h3",{id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)")),(0,o.kt)("p",null,"Mutates the current record by setting a new linked record on the given field name."),(0,o.kt)("h4",{id:"example-17"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = store.create(/* ... */);\nrootField.setLinkedRecord(newViewer, 'viewer');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)")),(0,o.kt)("p",null,"Mutates the current record by setting a new set of linked records on the given field name."),(0,o.kt)("h4",{id:"example-18"},"Example"),(0,o.kt)("p",null,"Given the GraphQL document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newNode = store.create(/* ... */);\nconst newNodes = [...rootField.getLinkedRecords('nodes'), newNode];\nrootField.setLinkedRecords(newNodes, 'nodes');\n")),(0,o.kt)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.kt)("h3",{id:"invalidaterecord-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"invalidateRecord(): void")),(0,o.kt)("p",null,"Invalidates the record. This will cause any query that references this record to be considered stale until the next time it is refetched, and will be considered to require a refetch the next time such a query is checked with ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.kt)("h4",{id:"example-19"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get('4');\nrecord.invalidateRecord();\n")),(0,o.kt)("p",null,"After invalidating a record, any query that references the invalidated record and that is checked before refetching it will be considered stale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.kt)("h2",{id:"connectionhandler"},"ConnectionHandler"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," is a utility module exposed by ",(0,o.kt)("inlineCode",{parentName:"p"},"relay-runtime")," that aids in the manipulation of connections. ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," exposes the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface ConnectionHandler {\n  getConnection(\n    record: RecordProxy,\n    key: string,\n    filters?: ?Object,\n  ): ?RecordProxy,\n  createEdge(\n    store: RecordSourceProxy,\n    connection: RecordProxy,\n    node: RecordProxy,\n    edgeType: string,\n  ): RecordProxy,\n  insertEdgeBefore(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  insertEdgeAfter(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  deleteNode(connection: RecordProxy, nodeID: string): void\n}\n")),(0,o.kt)("h3",{id:"getconnectionrecord-recordproxy-key-string-filters-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"getConnection(record: RecordProxy, key: string, filters?: ?Object)")),(0,o.kt)("p",null,"Given a record and a connection key, and optionally a set of filters, ",(0,o.kt)("inlineCode",{parentName:"p"},"getConnection")," retrieves a ",(0,o.kt)("a",{parentName:"p",href:"#recordproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordProxy"))," that represents a connection that was annotated with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,o.kt)("p",null,"First, let's take a look at a plain connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"fragment FriendsFragment on User {\n  friends(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Accessing a plain connection field like this is the same as other regular fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = user && user.getLinkedRecord('friends');\n\n// Access fields on the connection:\nconst edges = friends && friends.getLinkedRecords('edges');\n")),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"../use-pagination-fragment/"},"usePaginationFragment"),", we usually annotate the actual connection field with ",(0,o.kt)("inlineCode",{parentName:"p"},"@connection")," to tell Relay which part needs to be paginated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsFragment on User {\n  friends(first: 10, orderby: "firstname") @connection(\n    key: "FriendsFragment_friends",\n  ) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"For connections like the above, ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionHandler")," helps us find the record:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {ConnectionHandler} from 'relay-runtime';\n\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(\n user,                        // parent record\n 'FriendsFragment_friends',   // connection key\n {orderby: 'firstname'}       // 'filters' that is used to identify the connection\n);\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n")),(0,o.kt)("h3",{id:"edge-creation-and-insertion"},"Edge creation and insertion"),(0,o.kt)("h4",{id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)")),(0,o.kt)("p",null,"Creates an edge given a ",(0,o.kt)("a",{parentName:"p",href:"#recordsourceselectorproxy"},(0,o.kt)("inlineCode",{parentName:"a"},"store")),", a connection, the edge node, and the edge type."),(0,o.kt)("h4",{id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.kt)("p",null,"Given a connection, inserts the edge at the beginning of the connection, or before the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.kt)("h4",{id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.kt)("p",null,"Given a connection, inserts the edge at the end of the connection, or after the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.kt)("h4",{id:"example-20"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');\nconst newFriend = store.get(newFriendId);\nconst edge = ConnectionHandler.createEdge(store, friends, newFriend, 'UserEdge');\n\n// No cursor provided, append the edge at the end.\nConnectionHandler.insertEdgeAfter(friends, edge);\n\n// No cursor provided, insert the edge at the front:\nConnectionHandler.insertEdgeBefore(friends, edge);\n")),(0,o.kt)("h3",{id:"deletenodeconnection-recordproxy-nodeid-string-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteNode(connection: RecordProxy, nodeID: string): void")),(0,o.kt)("p",null,"Given a connection, deletes any edges whose node id matches the given id."),(0,o.kt)("h4",{id:"example-21"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');\nConnectionHandler.deleteNode(friends, idToDelete);\n")),(0,o.kt)(i.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);
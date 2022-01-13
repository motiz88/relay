(self.webpackChunk=self.webpackChunk||[]).push([[98615],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38378:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>m,default:()=>u});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"type-emission",title:"Type Emission"},l=void 0,s={unversionedId:"type-emission",id:"version-v1.6.2/type-emission",isDocsHomePage:!1,title:"Type Emission",description:"As part of its normal work, relay-compiler will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that relay-compiler generates to describe your operations and fragments.",source:"@site/versioned_docs/version-v1.6.2/Modern-TypeEmission.md",sourceDirName:".",slug:"/type-emission",permalink:"/docs/v1.6.2/type-emission",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.2/Modern-TypeEmission.md",version:"v1.6.2",lastUpdatedBy:"Felipe Gon\xe7alves",lastUpdatedAt:1642111811,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"type-emission",title:"Type Emission"}},m=[{value:"Operation input data",id:"operation-input-data",children:[]},{value:"Operation/Fragment selection-set data",id:"operationfragment-selection-set-data",children:[]},{value:"Fragment references",id:"fragment-references",children:[]},{value:"Single artifact directory",id:"single-artifact-directory",children:[{value:"Background information",id:"background-information",children:[]}]},{value:"Language plugins",id:"language-plugins",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As part of its normal work, ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-compiler")," will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-compiler")," generates to describe your operations and fragments."),(0,i.kt)("p",null,"Regardless of your choice of language, all language plugins will emit roughly the same sort of type-information, but be sure to read the documentation for other ",(0,i.kt)("a",{parentName:"p",href:"#language-plugins"},"language plugins")," to learn about their specifics."),(0,i.kt)("h3",{id:"operation-input-data"},"Operation input data"),(0,i.kt)("p",null,"The shape of the variables object used for query, mutation, or subscription operations."),(0,i.kt)("p",null,"In this example the emitted type-information would require the variables object to contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," key with a non-null string."),(0,i.kt)("h4",{id:"flow"},"Flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {|\n *   +artistID: string\n * |}\n */\nimport type { ExampleQueryVariables } from \"__generated__/ExampleQuery.graphql\"\n\nconst variables: ExampleQueryVariables = {\n  artistID: 'banksy',\n}\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `}\n  variables={variables}\n/>\n\n")),(0,i.kt)("h4",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n * }\n */\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `}\n  variables={{\n    artistID: 'banksy',\n  }}\n/>\n\n")),(0,i.kt)("h3",{id:"operationfragment-selection-set-data"},"Operation/Fragment selection-set data"),(0,i.kt)("p",null,"The shape of the data selected in a operation or fragment, following the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1.6.2/thinking-in-relay#data-masking"},"data-masking")," rules. That is, excluding any data selected by fragment spreads, unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(mask: false)")," directive is used."),(0,i.kt)("p",null,"In this example the emitted type-information describes the response data available to the operation\u2019s render function."),(0,i.kt)("h4",{id:"flow-1"},"Flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleQueryResponse = {|\n *   +artist: ?{|\n *     +name: string\n *   |}\n * |}\n */\nimport type { ExampleQueryResponse } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        name\n      }\n    }\n  `}\n  render={({ props }: { props?: ExampleQueryResponse }) => {\n    if (props) {\n      return props.artist && <div>{props.artist.name} is great!</div>\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),(0,i.kt)("h4",{id:"typescript-1"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        name\n      }\n    }\n  `}\n  render={({ props }) => {\n    if (props) {\n      return props.artist && <div>{props.artist.name} is great!</div>\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),(0,i.kt)("p",null,"Similarly, in this example the emitted type-information describes the prop data that the container expects to receive."),(0,i.kt)("h4",{id:"flow-2"},"Flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleFragment_artist = {|\n *   +name: string\n * |}\n */\nimport type { ExampleFragment_artist } from "__generated__/ExampleFragment_artist.graphql"\n\nexport const ExampleFragment = createFragmentContainer(\n  (props: { artist: ExampleFragment_artist }) => (\n    <div>About the artist: {props.artist.biography}</div>\n  ),\n  {\n    artist: graphql`\n      fragment ExampleFragment_artist on Artist {\n        biography\n      }\n    `\n  }\n)\n\n')),(0,i.kt)("h4",{id:"typescript-2"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleFragment_artist = {\n *   readonly name: string\n * }\n */\nimport { ExampleFragment_artist } from "__generated__/ExampleFragment_artist.graphql"\n\nexport const ExampleFragment = createFragmentContainer(\n  (props: { artist: ExampleFragment_artist }) => (\n    <div>About the artist: {props.artist.biography}</div>\n  ),\n  {\n    artist: graphql`\n      fragment ExampleFragment_artist on Artist {\n        biography\n      }\n    `,\n  }\n)\n\n')),(0,i.kt)("h3",{id:"fragment-references"},"Fragment references"),(0,i.kt)("p",null,"The opaque identifier described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1.6.2/thinking-in-relay#data-masking"},"data-masking")," that a child container expects to receive from its parent, which represents the child container\u2019s fragment spread inside the parent\u2019s fragment."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please read ",(0,i.kt)("a",{parentName:"em",href:"#single-artifact-directory"},"this important caveat")," about actually enabling type-safe fragment reference checking.")),(0,i.kt)("p",null,"Consider a component that composes the above fragment container example. In this example, the emitted type-information of the child container receives a unique opaque identifier type, called a fragment reference, which the type-information emitted for the parent\u2019s fragment references in the location where the child\u2019s fragment is spread. Thus ensuring that the child\u2019s fragment is spread into the parent\u2019s fragment ",(0,i.kt)("em",{parentName:"p"},"and")," the correct fragment reference is passed to the child container at runtime."),(0,i.kt)("h4",{id:"flow-3"},"Flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * import type { FragmentReference } from "relay-runtime";\n * declare export opaque type ExampleFragment_artist$ref: FragmentReference;\n * export type ExampleFragment_artist = {|\n *   +name: string,\n *   +$refType: ExampleFragment_artist$ref,\n * |};\n */\nimport { ExampleFragment } from "./ExampleFragment"\n\n/**\n * import type { ExampleFragment_artist$ref } from "ExampleFragment_artist.graphql";\n * export type ExampleQueryResponse = {|\n *   +artist: ?{|\n *     +$fragmentRefs: ExampleFragment_artist$ref,\n *   |}\n * |};\n */\nimport type { ExampleQueryResponse } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        ...ExampleFragment_artist\n      }\n    }\n  `}\n  render={({ props }: { props?: ExampleQueryResponse }) => {\n    if (props) {\n      // Here only `props.artist` is an object typed as the appropriate prop\n      // for the `artist` prop of the `ExampleFragment` container.\n      return <ExampleFragment artist={props.artist} />\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),(0,i.kt)("h4",{id:"typescript-3"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * declare const _ExampleFragment_artist$ref: unique symbol;\n * export type ExampleFragment_artist$ref = typeof _ExampleFragment_artist$ref;\n * export type ExampleFragment_artist = {\n *   readonly name: string\n *   readonly " $refType": ExampleFragment_artist$ref\n * }\n */\nimport { ExampleFragment } from "./ExampleFragment"\n\n/**\n * import { ExampleFragment_artist$ref } from "ExampleFragment_artist.graphql";\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly " $fragmentRefs": ExampleFragment_artist$ref\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        ...ExampleFragment_artist\n      }\n    }\n  `}\n  render={({ props }) => {\n    if (props) {\n      // Here only `props.artist` is an object typed as the appropriate prop\n      // for the `artist` prop of the `ExampleFragment` container.\n      return props.artist && <ExampleFragment artist={props.artist} />\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),(0,i.kt)("h2",{id:"single-artifact-directory"},"Single artifact directory"),(0,i.kt)("p",null,"An important caveat to note is that by default strict fragment reference type-information will ",(0,i.kt)("em",{parentName:"p"},"not")," be emitted, instead they will be typed as ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," and would allow you to pass in any data to the child container."),(0,i.kt)("p",null,"To enable this feature, you will have to tell the compiler to store all the artifacts in a single directory, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ relay-compiler --artifactDirectory ./src/__generated__ [\u2026]\n\n")),(0,i.kt)("p",null,"\u2026and additionally inform the babel plugin in your ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc")," config where to look for the artifacts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "plugins": [\n    ["relay", { "artifactDirectory": "./src/__generated__" }]\n  ]\n}\n')),(0,i.kt)("p",null,"It is recommended to alias this directory in your module resolution configuration such that you don\u2019t need to specify relative paths in your source files. This is what is also done in the above examples, where artifacts are imported from a ",(0,i.kt)("inlineCode",{parentName:"p"},"__generated__")," alias, rather than relative paths like ",(0,i.kt)("inlineCode",{parentName:"p"},"../../../../__generated__"),"."),(0,i.kt)("h3",{id:"background-information"},"Background information"),(0,i.kt)("p",null,"The reason is that ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-compiler")," and its artifact emission is stateless. Meaning that it does not keep track of locations of original source files and where the compiler previously saved the accompanying artifact on disk. Thus, if the compiler were to emit artifacts that try to import fragment reference types from ",(0,i.kt)("em",{parentName:"p"},"other")," artifacts, the compiler would:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"first need to know where on disk that other artifact exists;"),(0,i.kt)("li",{parentName:"ul"},"and update imports when the other artifact changes location on disk.")),(0,i.kt)("p",null,"Facebook uses a module system called ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/dan_abramov/status/758655309212704768"},"Haste"),", in which all source files are considered in a flat namespace. This means that an import declaration does not need to specify the path to another module and thus there is no need for the compiler to ever consider the above issues. I.e. an import only needs to specify the basename of the module filename and Haste takes care of actually finding the right module at import time. Outside of Facebook, however, usage of the Haste module system is non-existent nor encouraged, thus the decision to not import fragment reference types but instead type them as ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,i.kt)("p",null,"At its simplest, we can consider Haste as a single directory that contains all module files, thus all module imports always being safe to import using relative sibling paths. This is what is achieved by the single artifact directory feature. Rather than co-locating artifacts with their source files, all artifacts are stored in a single directory, allowing the compiler to emit imports of fragment reference types."),(0,i.kt)("h2",{id:"language-plugins"},"Language plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Flow: This is the default and builtin language plugin. You can explicitly enable it like so:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ relay-compiler --language javascript [\u2026]\n\n")))),(0,i.kt)("p",null,"By default, Flow types are emitted inside of comments to avoid forcing your project to use Flow. Flow types inside of comments is perfectly valid Flow, however, some editors and IDEs (like WebStorm/IDEA) do not understand Flow unless it's in plain source code. In order to solve that, there's a language plugin maintained by the community that replicates the functionality of the default builtin plugin, but emits the Flow types as plain source and not inside comments. Installation and usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n  $ yarn add --dev relay-compiler-language-js-flow-uncommented\n  $ relay-compiler --language js-flow-uncommented [\u2026]\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-compiler-language-typescript"},"TypeScript"),": This is a language plugin for the TypeScript language maintained by the community. Install and enable it like so:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ yarn add --dev relay-compiler-language-typescript @types/react-relay @types/relay-runtime\n$ relay-compiler --language typescript [\u2026]\n\n")))),(0,i.kt)("p",null,"If you are looking to create your own language plugin, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-compiler")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/main/packages/relay-compiler/language/RelayLanguagePluginInterface.js"},"language plugin interface"),"."))}u.isMDXComponent=!0}}]);
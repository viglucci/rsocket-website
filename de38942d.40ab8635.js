(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(96)),a={},c={unversionedId:"getting-started/examples/Dependencies/Kotlin",id:"getting-started/examples/Dependencies/Kotlin",isDocsHomePage:!1,title:"Kotlin",description:"`kotlin",source:"@site/..\\website-docs\\getting-started\\examples\\Dependencies\\Kotlin.mdx",slug:"/getting-started/examples/Dependencies/Kotlin",permalink:"/rsocket-website/docs/getting-started/examples/Dependencies/Kotlin",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/website-docs/../website-docs/getting-started/examples/Dependencies/Kotlin.mdx",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1611889365},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"// build.grade\n\nrepositories {\n  jcenter()\n}\n\ndependencies {\n  implementation 'io.rsocket.kotlin:rsocket-core:0.12.0'\n  implementation 'io.rsocket.kotlin:rsocket-transport-ktor:0.12.0'\n\n//  client feature for ktor\n//    implementation 'io.rsocket.kotlin:rsocket-transport-ktor-client:0.12.0'\n\n//  server feature for ktor\n//    implementation 'io.rsocket.kotlin:rsocket-transport-ktor-server:0.12.0'\n\n//  one of ktor engines to work with websockets\n//  client engines\n//    implementation 'io.ktor:ktor-client-js:1.4.3' //js\n//    implementation 'io.ktor:ktor-client-cio:1.4.3' //jvm\n//    implementation 'io.ktor:ktor-client-okhttp:1.4.3' //jvm\n\n//  server engines (jvm only)\n//    implementation 'io.ktor:ktor-server-cio:1.4.3'\n//    implementation 'io.ktor:ktor-server-netty:1.4.3'\n//    implementation 'io.ktor:ktor-server-jetty:1.4.3'\n//    implementation 'io.ktor:ktor-server-tomcat:1.4.3'\n}\n")))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[760],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9210:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.platformIcon,n=e.title;return r.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},r.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),r.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}},6192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9210),s=["components"],c={id:"db_size",title:"Increasing Storage size",sidebar_label:"Storage space increase"},l=void 0,d={unversionedId:"advanced/db_size",id:"advanced/db_size",isDocsHomePage:!1,title:"Increasing Storage size",description:"Supported platforms:",source:"@site/docs/advanced/IncreaseDbSize.md",sourceDirName:"advanced",slug:"/advanced/db_size",permalink:"/async-storage/docs/advanced/db_size",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/IncreaseDbSize.md",version:"current",frontMatter:{id:"db_size",title:"Increasing Storage size",sidebar_label:"Storage space increase"},sidebar:"docs",previous:{title:"Dedicated Executor",permalink:"/async-storage/docs/advanced/executor"},next:{title:"Troubleshooting",permalink:"/async-storage/docs/help/troubleshooting"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Increase limit",id:"increase-limit",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported platforms:")),(0,o.kt)(i.Z,{title:"Android",platformIcon:"icon_android.svg",mdxType:"PlatformSupport"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": This feature is obsolete when ",(0,o.kt)("a",{parentName:"p",href:"/async-storage/docs/advanced/next"},"Next storage feature is enabled"),"."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Current Async Storage's size is set to 6MB. Going over this limit causes ",(0,o.kt)("inlineCode",{parentName:"p"},"database or disk is full")," error. This 6MB limit is a sane limit to protect the user from the app storing too much data in the database. This also protects the database from filling up the disk cache and becoming malformed (endTransaction() calls will throw an exception, not rollback, and leave the db malformed). You have to be aware of that risk when increasing the database size. We recommend to ensure that your app does not write more data to AsyncStorage than space is left on disk. Since AsyncStorage is based on SQLite on Android you also have to be aware of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.sqlite.org/limits.html"},"SQLite limits"),"."),(0,o.kt)("h2",{id:"increase-limit"},"Increase limit"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncStorage_db_size_in_MB")," property to your ",(0,o.kt)("inlineCode",{parentName:"p"},"android/gradle.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"AsyncStorage_db_size_in_MB=10\n")),(0,o.kt)("p",null,"Now you can define the new size in MB. In this example, the new limit is 10 MB."))}m.isMDXComponent=!0}}]);
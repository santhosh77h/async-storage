"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[647],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9210:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.platformIcon,n=e.title;return r.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},r.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),r.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}},5983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=n(9210),i=["components"],p={id:"backup",title:"Database backup exclusion",sidebar_label:"iCloud backup"},l=void 0,u={unversionedId:"advanced/backup",id:"advanced/backup",isDocsHomePage:!1,title:"Database backup exclusion",description:"Supported platforms:",source:"@site/docs/advanced/Backup.md",sourceDirName:"advanced",slug:"/advanced/backup",permalink:"/async-storage/docs/advanced/backup",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/Backup.md",version:"current",frontMatter:{id:"backup",title:"Database backup exclusion",sidebar_label:"iCloud backup"},sidebar:"docs",previous:{title:"Brownfield integration",permalink:"/async-storage/docs/advanced/brownfield"},next:{title:"Dedicated Executor",permalink:"/async-storage/docs/advanced/executor"}},s=[],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported platforms:")),(0,o.kt)(c.Z,{title:"iOS/MacOS",platformIcon:"icon_ios.svg",mdxType:"PlatformSupport"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Async Storage stores data in ",(0,o.kt)("inlineCode",{parentName:"p"},"Application Support")," directory, which is backed up by iCloud by default.",(0,o.kt)("br",{parentName:"p"}),"\n","This can lead to unintentional behavior where data is persisted even after an app re-installation."),(0,o.kt)("p",null,"Async Storage disables that feature by default. "),(0,o.kt)("p",null,"In order to enable iCloud backup, open your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist")," in Xcode and add ",(0,o.kt)("strong",{parentName:"p"},"boolean")," entry called ",(0,o.kt)("strong",{parentName:"p"},"RCTAsyncStorageExcludeFromBackup")," and set its value to ",(0,o.kt)("strong",{parentName:"p"},"NO")," (NO as no for exclusion)."),(0,o.kt)("p",null,"Alternatively, you can open ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist")," in editor and add new entry: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"+   <key>RCTAsyncStorageExcludeFromBackup</key>\n+   <false/>\n")))}f.isMDXComponent=!0}}]);
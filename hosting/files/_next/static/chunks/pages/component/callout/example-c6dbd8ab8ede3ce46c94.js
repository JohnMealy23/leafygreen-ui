_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{KQAK:function(e,t,n){e.exports=function(e,t,n,r){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(t);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u={small:14,default:16,large:20,xlarge:24};function s(){var e=c(["\n    flex-shrink: 0;\n  "]);return s=function(){return e},e}function f(){var e=c(["\n    color: ",";\n  "]);return f=function(){return e},e}var b=r.IdAllocator.create("Checkmark"),p=function(t){var r,o,l,c=t.className,p=t.size,d=void 0===p?16:p,O=t.title,h=t.titleId,y=t.fill,m=i(t,["className","size","title","titleId","fill"]),v=e.useMemo((function(){return h||b.generate()}),[h]),j=n.css(f(),y),g=n.css(s());return O=function(e,t){return!1===t?null:null==t||!0===t?"".concat("Checkmark".replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"):t}(0,O),e.createElement("svg",a({className:n.cx((r={},o=j,l=null!=y,o in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,r),g,c),height:"number"==typeof d?d:u[d],width:"number"==typeof d?d:u[d]},m,{viewBox:"0 0 16 16",role:"img","aria-labelledby":v}),void 0===O?e.createElement("title",{id:v},"Glyphs / Checkmark"):O?e.createElement("title",{id:v},O):null,e.createElement("desc",null,"Created with Sketch."),e.createElement("g",{id:"Glyphs-/-Checkmark",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M6.94974747,10.363961 L13.3137085,4 L14.7279221,5.41421356 L8.36396103,11.7781746 L6.94974747,13.1923882 L2,8.24264069 L3.41421356,6.82842712 L6.94974747,10.363961 Z",fill:"currentColor"})))};return p.displayName="Checkmark",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(n("mXGw"),n("W0B4"),n("5MD+"),n("QmRY"))},M4ZN:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),l=n("+xY2"),a=n("W0B4"),i=n.n(a),c=n("5MD+"),u=n("G0rA"),s=n("jGqM");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(){var e=b(["\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n    box-shadow: ",", ",";\n  }\n\n  &:hover {\n    border: 1px solid ",";\n    box-shadow: ",";\n\n    &:focus {\n      box-shadow: ",", ",";\n    }\n  }\n"]);return p=function(){return e},e}function d(){var e=b(["\n  position: relative;\n  background-color: white;\n  border: 1px solid ",";\n  border-radius: 7px;\n  box-shadow: ",";\n  transition: border 300ms ease-in-out, box-shadow 300ms ease-in-out;\n"]);return d=function(){return e},e}var O="clickable",h="0 4px 10px -4px ".concat(Object(l.b)(.7,u.uiColors.black)),y="0 2px 6px -2px ".concat(Object(l.b)(.4,u.uiColors.black)),m="0 0 0 3px ".concat(u.uiColors.blue.light1),v=Object(c.css)(d(),u.uiColors.gray.light2,h),j=Object(c.css)(p(),h,m,u.uiColors.gray.light2,y,y,m),g=function(e){var t,n,r,l=e.className,a=e.contentStyle,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","contentStyle"]);return void 0===a&&("onClick"in i&&void 0!==i.onClick||"href"in i&&i.href)&&(a=O),o.a.createElement(s.default,f({className:Object(c.cx)(v,(t={},n=j,r=a===O,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),l)},i))};g.displayName="Card",g.propTypes={className:i.a.string},t.a=g},mkTQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/callout/example",function(){return n("xn52")}])},xn52:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("rePB"),o=n("Ff2n"),l=n("oYCi"),a=(n("mXGw"),n("hD99")),i=n("hnBo");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={variant:{type:"select",default:a.a.Note,options:Object.values(a.a),label:"Variant"},children:{type:"text",default:"If you are running your mongod instance with the default host (localhost) and port (27017), you can leave those parameters out when running mongo shell.",label:"Children"},title:{type:"boolean",default:!1,label:"Title"}};function f(){return Object(l.jsx)(i.a,{knobsConfig:s,children:function(e){var t=e.title,n=Object(o.a)(e,["title"]);return Object(l.jsx)(a.b,u(u({},n),{},{title:t?"This is a title":void 0}))}})}}},[["mkTQ",0,1,2,11,13]]]);
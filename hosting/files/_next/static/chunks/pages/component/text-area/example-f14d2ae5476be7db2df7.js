_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"5iLb":function(e,t,r){"use strict";r.r(t),r.d(t,"breakpoints",(function(){return a})),r.d(t,"fontFamilies",(function(){return o})),r.d(t,"spacing",(function(){return n}));var n={1:4,2:8,3:16,4:24,5:32,6:64,7:88},o={default:"Akzidenz, 'Helvetica Neue', Helvetica, Arial, sans-serif",code:"'Source Code Pro', Menlo, monospace"},a={Mobile:320,Tablet:768,Desktop:1024,XLDesktop:1440}},"6EpC":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var n=r("rePB"),o=r("oYCi"),a=(r("mXGw"),r("4aY/")),i=r("hnBo");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l={label:{type:"text",default:"Name",label:"Label"},description:{type:"text",default:"This is the name of your function. You can use this name to call your function from a client.",label:"Description"},disabled:{type:"boolean",default:!1,label:"Disabled"},state:{type:"select",options:Object.values(a.a),default:a.a.None,label:"State"},darkMode:{type:"boolean",default:!1,label:"Dark Mode"},errorMessage:{type:"text",default:"Not a valid name, please try again",label:"Error Message"}};function u(){return Object(o.jsx)(i.a,{knobsConfig:l,children:function(e){return Object(o.jsx)(a.b,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},KQAK:function(e,t,r){e.exports=function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u={small:14,default:16,large:20,xlarge:24};function s(){var e=l(["\n    flex-shrink: 0;\n  "]);return s=function(){return e},e}function f(){var e=l(["\n    color: ",";\n  "]);return f=function(){return e},e}var b=n.IdAllocator.create("Checkmark"),d=function(t){var n,o,a,l=t.className,d=t.size,p=void 0===d?16:d,y=t.title,m=t.titleId,v=t.fill,O=c(t,["className","size","title","titleId","fill"]),h=e.useMemo((function(){return m||b.generate()}),[m]),j=r.css(f(),v),g=r.css(s());return y=function(e,t){return!1===t?null:null==t||!0===t?"".concat("Checkmark".replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"):t}(0,y),e.createElement("svg",i({className:r.cx((n={},o=j,a=null!=v,o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,n),g,l),height:"number"==typeof p?p:u[p],width:"number"==typeof p?p:u[p]},O,{viewBox:"0 0 16 16",role:"img","aria-labelledby":h}),void 0===y?e.createElement("title",{id:h},"Glyphs / Checkmark"):y?e.createElement("title",{id:h},y):null,e.createElement("desc",null,"Created with Sketch."),e.createElement("g",{id:"Glyphs-/-Checkmark",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M6.94974747,10.363961 L13.3137085,4 L14.7279221,5.41421356 L8.36396103,11.7781746 L6.94974747,13.1923882 L2,8.24264069 L3.41421356,6.82842712 L6.94974747,10.363961 Z",fill:"currentColor"})))};return d.displayName="Checkmark",d.isGlyph=!0,d.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("QmRY"))},M4ZN:function(e,t,r){"use strict";var n=r("mXGw"),o=r.n(n),a=r("+xY2"),i=r("W0B4"),c=r.n(i),l=r("5MD+"),u=r("G0rA"),s=r("jGqM");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=b(["\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n    box-shadow: ",", ",";\n  }\n\n  &:hover {\n    border: 1px solid ",";\n    box-shadow: ",";\n\n    &:focus {\n      box-shadow: ",", ",";\n    }\n  }\n"]);return d=function(){return e},e}function p(){var e=b(["\n  position: relative;\n  background-color: white;\n  border: 1px solid ",";\n  border-radius: 7px;\n  box-shadow: ",";\n  transition: border 300ms ease-in-out, box-shadow 300ms ease-in-out;\n"]);return p=function(){return e},e}var y="clickable",m="0 4px 10px -4px ".concat(Object(a.b)(.7,u.uiColors.black)),v="0 2px 6px -2px ".concat(Object(a.b)(.4,u.uiColors.black)),O="0 0 0 3px ".concat(u.uiColors.blue.light1),h=Object(l.css)(p(),u.uiColors.gray.light2,m),j=Object(l.css)(d(),m,O,u.uiColors.gray.light2,v,v,O),g=function(e){var t,r,n,a=e.className,i=e.contentStyle,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["className","contentStyle"]);return void 0===i&&("onClick"in c&&void 0!==c.onClick||"href"in c&&c.href)&&(i=y),o.a.createElement(s.default,f({className:Object(l.cx)(h,(t={},r=j,n=i===y,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t),a)},c))};g.displayName="Card",g.propTypes={className:c.a.string},t.a=g},h4VS:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return n}))},"kI+E":function(e,t,r){"use strict";r.r(t),r.d(t,"useBaseFontSize",(function(){return y})),r.d(t,"useUsingKeyboardContext",(function(){return b}));var n=r("mXGw"),o=r.n(n),a=r("W0B4"),i=r.n(a),c=r("WM7k");function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object(n.createContext)({usingKeyboard:!0,setUsingKeyboard:function(){}}),f={tab:9,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40};function b(){return Object(n.useContext)(s)}function d(e){var t=e.children,r=l(Object(n.useState)(!1),2),a=r[0],i=r[1];Object(c.b)("mousedown",(function(){return i(!1)}),{enabled:a}),Object(c.b)("keydown",(function(e){var t=e.keyCode;Object.values(f).includes(t)&&i(!0)}),{enabled:!a});var u=Object(n.useMemo)((function(){return{usingKeyboard:a,setUsingKeyboard:i}}),[a]);return o.a.createElement(s.Provider,{value:u},t)}d.displayName="UsingKeyboardProvider",d.propTypes={children:i.a.node};var p=Object(n.createContext)(14);function y(){return Object(n.useContext)(p)}function m(e){var t=e.children,r=e.baseFontSize,n=void 0===r?14:r;return o.a.createElement(p.Provider,{value:n},t)}function v(e){var t=e.children,r=e.baseFontSize;return o.a.createElement(d,null,o.a.createElement(m,{baseFontSize:r},t))}m.displayName="TypographyProvider",m.propTypes={children:i.a.node,baseFontSize:i.a.number},v.displayName="LeafyGreenProvider",v.propTypes={children:i.a.node},t.default=v},"m+TI":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/text-area/example",function(){return r("6EpC")}])}},[["m+TI",0,1,2,11]]]);
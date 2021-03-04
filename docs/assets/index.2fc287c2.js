import{g as e,n,v as t,f as r,s as a,a as u,_ as o,d as i,r as c,b as l,c as f,e as d,h as s,i as v,m,j as p,k as g,l as h,o as E,p as b,q as w,t as O,u as k,R,w as y,x,y as C,z as N}from"./vendor.c0627c76.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,u)=>{const o=new URL(e,r);if(self[n].moduleMap[o])return t(self[n].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${n}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){u(new Error(`Failed to import: ${e}`)),a(c)},onload(){t(self[n].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[n].moduleMap={}}}("/assets/");function A(e){return"application/json"===e.type}function D(e,n){var t=new FileReader;t.readAsText(e,"UTF-8"),t.onload=function(e){return o(n,e.target.result)}}function S(e){return i(JSON.parse(e))}function j(e){e.stopPropagation(),e.preventDefault()}function L(e,n){return{value:n,expr:void 0!==e?t(e):void 0,readOnly:!1,width:void 0}}var U={make:L,makeRO:function(e){var n=L(void 0,e);return{value:n.value,expr:n.expr,readOnly:!0,width:n.width}},empty:function(e){return{value:" ",expr:void 0,readOnly:!1,width:100}},emptyRO:function(e){return{value:" ",expr:void 0,readOnly:!0,width:100}}};function M(e){var n=e.split(".");return 1===n.length?e:d(n,0,n.length-1|0).join("")}function I(e,n,r){var a=void 0===n||n,u=document.createElement("a"),o=document.body;if(void 0!==u&&void 0!==o){var i=t(o),c=t(u);c.setAttribute("style","display: none"),c.setAttribute("href",r),c.setAttribute("download",e),a&&c.setAttribute("target","_blank"),i.appendChild(c),c.click(),i.removeChild(c)}}function _(n,t,a){var u=v(m(n,(function(e){return[e.id,e.defaultMessage]}))),o=p(e(t,0),[],(function(e){return s(e,[U.makeRO(M(a))])})),i=m(g(t,1),(function(n){var t=p(r(e(n,0),(function(e){return h(u,e.value)})),U.empty(void 0),(function(e){return U.make(void 0,e)}));return s(n,[t])}));return s([o],i)}function F(o){var i=function(o){var i=[[]],c=new RegExp('(;|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^;\r\n]*))',"gi");return function(l){for(;;){var f=c.exec(o);if(null===f)return;var d=e(f,1);void 0!==d&&";"!==n(t(d))&&i.push([]);var s=e(f,2),v=void 0!==s?r(n(t(s)),(function(e){return e.replace(/[""]+/g,'"')})):r(e(f,3),(function(e){return null==e?void 0:a(e)}));u(e(i,i.length-1|0),[]).push(u(v,""))}}(),i}(o),c=p(e(i,1),[],(function(e){return m(e,U.makeRO)})),l=m(g(i,2),(function(e){return E(e,(function(e,n){return e>0?U.make(void 0,n):U.makeRO(n)}))}));return s([c],l)}function J(n,t){return b(u(e(n,0),[]),(function(e){return e.value===t}))}var $=function(e,n){var t=n.row,r=n.col,a=f(f(e,t),r);return l(f(e,t),r,{value:n.value,expr:a.expr,readOnly:a.readOnly,width:a.width})};function P(e,n,t){return n?function(e,n){return e+" "+n}(e,t):e}var T=function(e){var n=e.sourceAvailable,t=e.children;return c.createElement("div",{className:P("Content",n,"with-margin")},t)};var V=function(e){var n=e.disabled,t=e.onClick,r=e.children,a=void 0!==n&&n,u=P("SidebarButton",a,"disabled");return c.createElement("button",{className:u,disabled:a,onClick:t},r)};var q=function(e){var n=e.sourceAvailable,t=e.children;return n?c.createElement("aside",{className:"Sidebar"},t):null};var B=function(e){var n=e.sourceAvailable,t=e.dragging;return n||t?null:c.createElement("div",{className:"NoDataView"},c.createElement("span",void 0,"No data."),c.createElement("span",void 0,"Please drag a JSON language file or CSV here."))};function H(e){var n=e.title,t=e.onDrop,r=function(e){var n=c.useState((function(){return!1})),t=n[1],r=n[0];return[r,function(e){if(j(e),!r)return o(t,(function(e){return!0}))}]}();return c.createElement("div",{className:P("HoverHighlight",r[0],"dragging"),onDragOver:r[1],onDrop:t},n)}var z=function(e){var n=e.dragging,t=e.sourceAvailable,r=e.onDragLeave,a=e.handleDrop;return n?c.createElement("div",{className:"ImportOverlay",onDragLeave:r},c.createElement(H,{title:"Insert source language file here",onDrop:function(e){return k(a,e,0)}}),t?c.createElement(H,{title:"Insert target language file here",onDrop:function(e){return k(a,e,1)}}):null):null};var G=function(n){var t=c.useState((function(){return[]})),r=t[1],a=t[0],i=function(e){var n=c.useState((function(){return!1})),t=n[1],r=n[0];return[r,t,function(e){if(j(e),!r)return o(t,(function(e){return!0}))},function(e){if(j(e),r)return o(t,(function(e){return!1}))}]}(),l=i[1],f=i[0],d=0!==a.length,v=function(e){if(window.confirm("Remove source?"))return o(r,(function(e){return[]}))},h=function(n){var t=JSON.stringify(function(n,t){var r=J(n,t),a=g(n,1);return void 0!==r?w(a,(function(n){var t=e(n,0),a=e(n,r);if(void 0!==t&&void 0!==a)return{id:t.value,defaultMessage:a.value}})):[]}(a,n),null,2);return I(n+".json",void 0,"data:text/json;charset=utf-8,"+encodeURIComponent(t))};return c.createElement("div",{className:"App",onDragOver:i[2]},c.createElement(T,{sourceAvailable:d,children:null},c.createElement(R,{data:a,valueRenderer:function(e){return e.value},sheetRenderer:function(n){return c.createElement("table",{className:n.className},c.createElement("thead",void 0,c.createElement("tr",void 0,E(u(e(a,0),[]),(function(e,n){return c.createElement("th",{key:String(e)},e>0?c.createElement(c.Fragment,void 0,c.createElement("button",{onClick:function(e){return h(n.value)}},"Export as JSON")," ",c.createElement("button",{onClick:function(e){var t=n.value;if(window.confirm('Delete column "'+t+'"?'))return o(r,(function(e){return function(e,n){var t=J(e,n);return void 0!==t?m(e,(function(e){return w(E(e,(function(e,n){return t===e?void 0:n})),(function(e){return e}))})):e}(a,t)}))}},"Remove")):c.createElement("button",{onClick:v},"Remove source"))})))),c.createElement("tbody",void 0,n.children))},onCellsChanged:function(e){var n=a.slice(0);return x(e,(function(e){return $(n,e)})),o(r,(function(e){return n}))}}),c.createElement(B,{sourceAvailable:d,dragging:f}),c.createElement(z,{dragging:f,sourceAvailable:d,onDragLeave:i[3],handleDrop:function(n,t){j(n);var u=function(e){return e.nativeEvent.dataTransfer.files}(n);if(1===u.length){var i=e(u,0);void 0!==i&&(t?A(i)&&D(i,(function(e){return o(r,(function(n){return p(S(e),a,(function(e){return _(e,a,i.name)}))}))})):A(i)?D(i,(function(e){return o(r,(function(n){return p(S(e),a,(function(e){return function(e,n){var t=m(e,(function(e){return[U.makeRO(e.id),U.make(void 0,e.defaultMessage)]}));return s([[U.makeRO("ID"),U.makeRO(M(n))]],t)}(e,i.name)}))}))})):"text/csv"===i.type&&D(i,(function(e){return o(r,(function(n){return F(e)}))})))}return o(l,(function(e){return!1}))}})),c.createElement(q,{sourceAvailable:d,children:null},c.createElement(V,{onClick:function(e){var n,t=(n="Enter file name for target",O(window.prompt(n)));return y(t,(function(e){return o(r,(function(n){return _([],a,e)}))}))},children:"Add column"}),c.createElement(V,{onClick:function(e){var n=m(a,(function(e){return m(e,(function(e){return'"'+e.value+'"'})).join(";")})).join("\n");return I("export.csv",void 0,"data:text/csv;charset=utf-8,\ufeff"+encodeURI(n))},children:"Export CSV"}),c.createElement(V,{onClick:function(n){return C(u(e(a,0),[]),(function(e,n){if(e>0)return h(n.value)}))},children:"Export all JSON"})))};y(n(document.querySelector("#root")),(function(e){N.render(c.createElement(G,{}),e)}));
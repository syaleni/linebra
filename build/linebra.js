!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("linebra",[],t):"object"==typeof exports?exports.linebra=t():e.linebra=t()}(this,(function(){return(()=>{"use strict";var e={715:(e,t,n)=>{n.r(t),n.d(t,{areaByVertices:()=>i,centroidByVertices:()=>c,convDegToRad:()=>r,convRadToDeg:()=>o,lineSlopeInterceptForm:()=>x,linesIntersection:()=>s,transCoordsByAxesRot:()=>u,transCoordsByMovingO:()=>y,vertexOnLine:()=>f});const r=function(e){return e*Math.PI/180},o=function(e){return 180*e/Math.PI},i=function(e){let t=0;const n=e.length;for(let r=0;r<n-1;r++)t+=e[r].x*e[r+1].y-e[r].y*e[r+1].x;return t+=e[n-1].x*e[0].y-e[n-1].y*e[0].x,Math.abs(t/2)},c=function(e){const t={x:0,y:0};return e.forEach((e=>{t.x+=e.x,t.y+=e.y})),{x:t.x/e.length,y:t.y/e.length}},y=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},u=function(e,t){const n=r(t);return{x:e.x*Math.cos(n)+e.y*Math.sin(n),y:-1*e.x*Math.sin(n)+e.y*Math.cos(n)}},x=function(e){if(e[1].x===e[0].x&&e[1].y===e[0].y)return{m:void 0,c:void 0};if(e[1].x===e[0].x)return{m:1/0,c:e[1].x};const t=(e[1].y-e[0].y)/(e[1].x-e[0].x);return{m:t,c:e[1].y-t*e[1].x}},s=function(e,t){if(e.m===t.m)return{x:void 0,y:void 0};if(!isFinite(e.m))return{x:e.c,y:t.m*e.c+t.c};if(!isFinite(t.m))return{x:t.c,y:e.m*t.c+e.c};const n=(t.c-e.c)/(e.m-t.m);return{x:n,y:e.m*n+e.c}},f=function(e,t,n){let r;return r=isFinite(e.m)?t.y-(e.m*t.x+e.c):t.x-e.c,Math.round(r*10**n)/10**n==0}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(715)})()}));
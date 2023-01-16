/*! For license information please see chunk.756.6ec7abb46a54c6df407f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[756],{953:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>_,afterRead:()=>g,afterWrite:()=>A,applyStyles:()=>D,arrow:()=>J,auto:()=>s,basePlacements:()=>u,beforeMain:()=>w,beforeRead:()=>m,beforeWrite:()=>x,bottom:()=>o,clippingParents:()=>l,computeStyles:()=>ne,createPopper:()=>Re,createPopperBase:()=>ke,createPopperLite:()=>De,detectOverflow:()=>me,end:()=>f,eventListeners:()=>oe,flip:()=>ye,hide:()=>Oe,left:()=>a,main:()=>O,modifierPhases:()=>T,offset:()=>_e,placements:()=>b,popper:()=>d,popperGenerator:()=>Pe,popperOffsets:()=>xe,preventOverflow:()=>Ee,read:()=>y,reference:()=>h,right:()=>i,start:()=>c,top:()=>r,variationPlacements:()=>v,viewport:()=>p,write:()=>E})
var r="top",o="bottom",i="right",a="left",s="auto",u=[r,o,i,a],c="start",f="end",l="clippingParents",p="viewport",d="popper",h="reference",v=u.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+f])}),[]),b=[].concat(u,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+f])}),[]),m="beforeRead",y="read",g="afterRead",w="beforeMain",O="main",_="afterMain",x="beforeWrite",E="write",A="afterWrite",T=[m,y,g,w,O,_,x,E,A]
function j(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function P(e){return e instanceof S(e).Element||e instanceof Element}function k(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function R(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}const D={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
k(o)&&j(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
k(r)&&j(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function N(e){return e.split("-")[0]}var F=Math.max,C=Math.min,M=Math.round
function L(){var e=navigator.userAgentData
return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function I(){return!/^((?!chrome|android).)*safari/i.test(L())}function B(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),o=1,i=1
t&&k(e)&&(o=e.offsetWidth>0&&M(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&M(r.height)/e.offsetHeight||1)
var a=(P(e)?S(e):window).visualViewport,s=!I()&&n,u=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,l=r.height/i
return{width:f,height:l,top:c,right:u+f,bottom:c+l,left:u,x:u,y:c}}function W(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function G(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&R(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function q(e){return S(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(j(e))>=0}function U(e){return((P(e)?e.ownerDocument:e.document)||window.document).documentElement}function V(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||U(e)}function z(e){return k(e)&&"fixed"!==q(e).position?e.offsetParent:null}function Y(e){for(var t=S(e),n=z(e);n&&H(n)&&"static"===q(n).position;)n=z(n)
return n&&("html"===j(n)||"body"===j(n)&&"static"===q(n).position)?t:n||function(e){var t=/firefox/i.test(L())
if(/Trident/i.test(L())&&k(e)&&"fixed"===q(e).position)return null
var n=V(e)
for(R(n)&&(n=n.host);k(n)&&["html","body"].indexOf(j(n))<0;){var r=q(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e,t,n){return F(e,C(t,n))}function Z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,c=e.options,f=n.elements.arrow,l=n.modifiersData.popperOffsets,p=N(n.placement),d=K(p),h=[a,i].indexOf(p)>=0?"height":"width"
if(f&&l){var v=function(e,t){return Z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,u))}(c.padding,n),b=W(f),m="y"===d?r:a,y="y"===d?o:i,g=n.rects.reference[h]+n.rects.reference[d]-l[d]-n.rects.popper[h],w=l[d]-n.rects.reference[d],O=Y(f),_=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,x=g/2-w/2,E=v[m],A=_-b[h]-v[y],T=_/2-b[h]/2+x,j=$(E,T,A),S=d
n.modifiersData[s]=((t={})[S]=j,t.centerOffset=j-T,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&G(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function Q(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,n=e.popper,s=e.popperRect,u=e.placement,c=e.variation,l=e.offsets,p=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,b=e.isFixed,m=l.x,y=void 0===m?0:m,g=l.y,w=void 0===g?0:g,O="function"==typeof v?v({x:y,y:w}):{x:y,y:w}
y=O.x,w=O.y
var _=l.hasOwnProperty("x"),x=l.hasOwnProperty("y"),E=a,A=r,T=window
if(h){var j=Y(n),P="clientHeight",k="clientWidth"
j===S(n)&&"static"!==q(j=U(n)).position&&"absolute"===p&&(P="scrollHeight",k="scrollWidth"),(u===r||(u===a||u===i)&&c===f)&&(A=o,w-=(b&&j===T&&T.visualViewport?T.visualViewport.height:j[P])-s.height,w*=d?1:-1),u!==a&&(u!==r&&u!==o||c!==f)||(E=i,y-=(b&&j===T&&T.visualViewport?T.visualViewport.width:j[k])-s.width,y*=d?1:-1)}var R,D=Object.assign({position:p},h&&ee),N=!0===v?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1
return{x:M(t*r)/r||0,y:M(n*r)/r||0}}({x:y,y:w}):{x:y,y:w}
return y=N.x,w=N.y,d?Object.assign({},D,((R={})[A]=x?"0":"",R[E]=_?"0":"",R.transform=(T.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",R)):Object.assign({},D,((t={})[A]=x?w+"px":"",t[E]=_?y+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,c={placement:N(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var re={passive:!0}
const oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=S(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,re)})),s&&u.addEventListener("resize",n.update,re),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),s&&u.removeEventListener("resize",n.update,re)}},data:{}}
var ie={left:"right",right:"left",bottom:"top",top:"bottom"}
function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"}
function ue(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e){var t=S(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fe(e){return B(U(e)).left+ce(e).scrollLeft}function le(e){var t=q(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function pe(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:k(e)&&le(e)?e:pe(V(e))}function de(e,t){var n
void 0===t&&(t=[])
var r=pe(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=S(r),a=o?[i].concat(i.visualViewport||[],le(r)?r:[]):r,s=t.concat(a)
return o?s:s.concat(de(V(a)))}function he(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ve(e,t,n){return t===p?he(function(e,t){var n=S(e),r=U(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0
if(o){i=o.width,a=o.height
var c=I();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+fe(e),y:u}}(e,n)):P(t)?function(e,t){var n=B(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):he(function(e){var t,n=U(e),r=ce(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+fe(e),u=-r.scrollTop
return"rtl"===q(o||n).direction&&(s+=F(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}(U(e)))}function be(e){var t,n=e.reference,s=e.element,u=e.placement,l=u?N(u):null,p=u?Q(u):null,d=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2
switch(l){case r:t={x:d,y:n.y-s.height}
break
case o:t={x:d,y:n.y+n.height}
break
case i:t={x:n.x+n.width,y:h}
break
case a:t={x:n.x-s.width,y:h}
break
default:t={x:n.x,y:n.y}}var v=l?K(l):null
if(null!=v){var b="y"===v?"height":"width"
switch(p){case c:t[v]=t[v]-(n[b]/2-s[b]/2)
break
case f:t[v]=t[v]+(n[b]/2-s[b]/2)}}return t}function me(e,t){void 0===t&&(t={})
var n=t,a=n.placement,s=void 0===a?e.placement:a,c=n.strategy,f=void 0===c?e.strategy:c,v=n.boundary,b=void 0===v?l:v,m=n.rootBoundary,y=void 0===m?p:m,g=n.elementContext,w=void 0===g?d:g,O=n.altBoundary,_=void 0!==O&&O,x=n.padding,E=void 0===x?0:x,A=Z("number"!=typeof E?E:X(E,u)),T=w===d?h:d,S=e.rects.popper,R=e.elements[_?T:w],D=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=de(V(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0&&k(e)?Y(e):e
return P(n)?t.filter((function(e){return P(e)&&G(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ve(e,n,r)
return t.top=F(o.top,t.top),t.right=C(o.right,t.right),t.bottom=C(o.bottom,t.bottom),t.left=F(o.left,t.left),t}),ve(e,a,r))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(P(R)?R:R.contextElement||U(e.elements.popper),b,y,f),N=B(e.elements.reference),M=be({reference:N,element:S,strategy:"absolute",placement:s}),L=he(Object.assign({},S,M)),I=w===d?L:N,W={top:D.top-I.top+A.top,bottom:I.bottom-D.bottom+A.bottom,left:D.left-I.left+A.left,right:I.right-D.right+A.right},H=e.modifiersData.offset
if(w===d&&H){var z=H[s]
Object.keys(W).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x"
W[e]+=z[n]*t}))}return W}const ye={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,f=e.name
if(!t.modifiersData[f]._skip){for(var l=n.mainAxis,p=void 0===l||l,d=n.altAxis,h=void 0===d||d,m=n.fallbackPlacements,y=n.padding,g=n.boundary,w=n.rootBoundary,O=n.altBoundary,_=n.flipVariations,x=void 0===_||_,E=n.allowedAutoPlacements,A=t.options.placement,T=N(A),j=m||(T!==A&&x?function(e){if(N(e)===s)return[]
var t=ae(e)
return[ue(e),t,ue(t)]}(A):[ae(A)]),S=[A].concat(j).reduce((function(e,n){return e.concat(N(n)===s?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?b:c,l=Q(r),p=l?s?v:v.filter((function(e){return Q(e)===l})):u,d=p.filter((function(e){return f.indexOf(e)>=0}))
0===d.length&&(d=p)
var h=d.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[N(n)],t}),{})
return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:g,rootBoundary:w,padding:y,flipVariations:x,allowedAutoPlacements:E}):n)}),[]),P=t.rects.reference,k=t.rects.popper,R=new Map,D=!0,F=S[0],C=0;C<S.length;C++){var M=S[C],L=N(M),I=Q(M)===c,B=[r,o].indexOf(L)>=0,W=B?"width":"height",G=me(t,{placement:M,boundary:g,rootBoundary:w,altBoundary:O,padding:y}),q=B?I?i:a:I?o:r
P[W]>k[W]&&(q=ae(q))
var H=ae(q),U=[]
if(p&&U.push(G[L]<=0),h&&U.push(G[q]<=0,G[H]<=0),U.every((function(e){return e}))){F=M,D=!1
break}R.set(M,U)}if(D)for(var V=function(e){var t=S.find((function(t){var n=R.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return F=t,"break"},z=x?3:1;z>0&&"break"!==V(z);z--);t.placement!==F&&(t.modifiersData[f]._skip=!0,t.placement=F,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ge(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function we(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}const Oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),u=ge(a,r),c=ge(s,o,i),f=we(u),l=we(c)
t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},_e={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,s=n.offset,u=void 0===s?[0,0]:s,c=b.reduce((function(e,n){return e[n]=function(e,t,n){var o=N(e),s=[a,r].indexOf(o)>=0?-1:1,u="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=u[0],f=u[1]
return c=c||0,f=(f||0)*s,[a,i].indexOf(o)>=0?{x:f,y:c}:{x:c,y:f}}(n,t.rects,u),e}),{}),f=c[t.placement],l=f.x,p=f.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=c}},xe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=be({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,u=n.mainAxis,f=void 0===u||u,l=n.altAxis,p=void 0!==l&&l,d=n.boundary,h=n.rootBoundary,v=n.altBoundary,b=n.padding,m=n.tether,y=void 0===m||m,g=n.tetherOffset,w=void 0===g?0:g,O=me(t,{boundary:d,rootBoundary:h,padding:b,altBoundary:v}),_=N(t.placement),x=Q(t.placement),E=!x,A=K(_),T="x"===A?"y":"x",j=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,k="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,R="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0}
if(j){if(f){var L,I="y"===A?r:a,B="y"===A?o:i,G="y"===A?"height":"width",q=j[A],H=q+O[I],U=q-O[B],V=y?-P[G]/2:0,z=x===c?S[G]:P[G],Z=x===c?-P[G]:-S[G],X=t.elements.arrow,J=y&&X?W(X):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[I],ne=ee[B],re=$(0,S[G],J[G]),oe=E?S[G]/2-V-re-te-R.mainAxis:z-re-te-R.mainAxis,ie=E?-S[G]/2+V+re+ne+R.mainAxis:Z+re+ne+R.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),se=ae?"y"===A?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(L=null==D?void 0:D[A])?L:0,ce=q+ie-ue,fe=$(y?C(H,q+oe-ue-se):H,q,y?F(U,ce):U)
j[A]=fe,M[A]=fe-q}if(p){var le,pe="x"===A?r:a,de="x"===A?o:i,he=j[T],ve="y"===T?"height":"width",be=he+O[pe],ye=he-O[de],ge=-1!==[r,a].indexOf(_),we=null!=(le=null==D?void 0:D[T])?le:0,Oe=ge?be:he-S[ve]-P[ve]-we+R.altAxis,_e=ge?he+S[ve]+P[ve]-we-R.altAxis:ye,xe=y&&ge?function(e,t,n){var r=$(e,t,n)
return r>n?n:r}(Oe,he,_e):$(y?Oe:be,he,y?_e:ye)
j[T]=xe,M[T]=xe-he}t.modifiersData[s]=M}},requiresIfExists:["offset"]}
function Ae(e,t,n){void 0===n&&(n=!1)
var r,o,i=k(t),a=k(t)&&function(e){var t=e.getBoundingClientRect(),n=M(t.width)/e.offsetWidth||1,r=M(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),s=U(t),u=B(e,a,n),c={scrollLeft:0,scrollTop:0},f={x:0,y:0}
return(i||!i&&!n)&&(("body"!==j(t)||le(s))&&(c=(r=t)!==S(r)&&k(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ce(r)),k(t)?((f=B(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=fe(s))),{x:u.left+c.scrollLeft-f.x,y:u.top+c.scrollTop-f.y,width:u.width,height:u.height}}function Te(e){var t=new Map,n=new Set,r=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var je={placement:"bottom",modifiers:[],strategy:"absolute"}
function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Pe(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?je:o
return function(e,t,n){void 0===n&&(n=i)
var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,f={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n
l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:P(e)?de(e):e.contextElement?de(e.contextElement):[],popper:de(t)}
var a,c,p=function(e){var t=Te(e)
return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:s,name:t,instance:f,options:r})
u.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper
if(Se(t,n)){s.rects={reference:Ae(t,Y(n),"fixed"===s.options.strategy),popper:W(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,u=void 0===a?{}:a,l=o.name
"function"==typeof i&&(s=i({state:s,options:u,name:l,instance:f})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),c=!0}}
if(!Se(e,t))return f
function l(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var ke=Pe(),Re=Pe({defaultModifiers:[oe,xe,ne,D,_e,ye,Ee,J,Oe]}),De=Pe({defaultModifiers:[oe,xe,ne,D]})},969:(e,t,n)=>{function r(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}n.r(t),n.d(t,{EventTarget:()=>o,Promise:()=>k,all:()=>I,allSettled:()=>W,asap:()=>ie,async:()=>_e,cast:()=>Oe,configure:()=>a,default:()=>je,defer:()=>K,denodeify:()=>F,filter:()=>ne,hash:()=>U,hashSettled:()=>z,map:()=>Z,off:()=>Ee,on:()=>xe,race:()=>G,reject:()=>J,resolve:()=>X,rethrow:()=>Y})
var o={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=r(this),o=n[e]
o||(o=n[e]=[]),-1===o.indexOf(t)&&o.push(t)},off:function(e,t){var n=r(this)
if(t){var o=n[e],i=o.indexOf(t);-1!==i&&o.splice(i,1)}else n[e]=[]},trigger:function(e,t,n){var o=r(this)[e]
if(o)for(var i=0;i<o.length;i++)(0,o[i])(t,n)}},i={instrument:!1}
function a(e,t){if(2!==arguments.length)return i[e]
i[e]=t}o.mixin(i)
var s=[]
function u(e,t,n){1===s.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:i["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<s.length;e++){var t=s[e],n=t.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),i.trigger(t.name,t.payload)}s.length=0}),50)}function c(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(f,t)
return y(n,e),n}function f(){}var l=void 0,p={error:null}
function d(e){try{return e.then}catch(e){return p.error=e,p}}var h=void 0
function v(){try{var e=h
return h=null,e.apply(this,arguments)}catch(e){return p.error=e,p}}function b(e){return h=e,v}function m(e,t,n){if(t.constructor===e.constructor&&n===A&&e.constructor.resolve===c)!function(e,t){1===t._state?w(e,t._result):2===t._state?(t._onError=null,O(e,t._result)):_(t,void 0,(function(n){t===n?w(e,n):y(e,n)}),(function(t){return O(e,t)}))}(e,t)
else if(n===p){var r=p.error
p.error=null,O(e,r)}else"function"==typeof n?function(e,t,n){i.async((function(e){var r=!1,o=b(n).call(t,(function(n){r||(r=!0,t===n?w(e,n):y(e,n))}),(function(t){r||(r=!0,O(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!r&&o===p){r=!0
var i=p.error
p.error=null,O(e,i)}}),e)}(e,t,n):w(e,t)}function y(e,t){var n,r
e===t?w(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?w(e,t):m(e,t,d(t)))}function g(e){e._onError&&e._onError(e._result),x(e)}function w(e,t){e._state===l&&(e._result=t,e._state=1,0===e._subscribers.length?i.instrument&&u("fulfilled",e):i.async(x,e))}function O(e,t){e._state===l&&(e._state=2,e._result=t,i.async(g,e))}function _(e,t,n,r){var o=e._subscribers,a=o.length
e._onError=null,o[a]=t,o[a+1]=n,o[a+2]=r,0===a&&e._state&&i.async(x,e)}function x(e){var t=e._subscribers,n=e._state
if(i.instrument&&u(1===n?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,o=void 0,a=e._result,s=0;s<t.length;s+=3)r=t[s],o=t[s+n],r?E(n,r,o,a):o(a)
e._subscribers.length=0}}function E(e,t,n,r){var o,i="function"==typeof n
if(o=i?b(n)(r):r,t._state!==l);else if(o===t)O(t,new TypeError("A promises callback cannot return that same promise."))
else if(o===p){var a=p.error
p.error=null,O(t,a)}else i?y(t,o):1===e?w(t,o):2===e&&O(t,o)}function A(e,t,n){var r=this,o=r._state
if(1===o&&!e||2===o&&!t)return i.instrument&&u("chained",r,r),r
r._onError=null
var a=new r.constructor(f,n),s=r._result
if(i.instrument&&u("chained",r,a),o===l)_(r,a,e,t)
else{var c=1===o?e:t
i.async((function(){return E(o,a,c,s)}))}return a}var T=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(f,r),this._abortOnReject=n,this._isUsingOwnPromise=e===k,this._isUsingOwnResolve=e.resolve===c,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,n=this.promise,r=0;n._state===l&&r<t;r++)this._eachEntry(e[r],r,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
w(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var o=d(e)
if(o===A&&e._state!==l)e._onError=null,this._settledAt(e._state,t,e._result,n)
else if("function"!=typeof o)this._settledAt(1,t,e,n)
else if(this._isUsingOwnPromise){var i=new r(f)
m(i,e,o),this._willSettleAt(i,t,n)}else this._willSettleAt(new r((function(t){return t(e)})),t,n)}else this._willSettleAt(r.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(1,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var o=this.promise
o._state===l&&(this._abortOnReject&&2===e?O(o,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n,r){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
_(e,void 0,(function(e){return r._settledAt(1,t,e,n)}),(function(e){return r._settledAt(2,t,e,n)}))},e}()
function j(e,t,n){this._remaining--,this._result[t]=1===e?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var S="rsvp_"+Date.now()+"-",P=0,k=function(){function e(t,n){this._id=P++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],i.instrument&&u("created",this),f!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t((function(t){n||(n=!0,y(e,t))}),(function(t){n||(n=!0,O(e,t))}))}catch(t){O(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
i.after((function(){t._onError&&i.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this,r=n.constructor
return"function"==typeof e?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}()
function R(e,t){for(var n={},r=e.length,o=new Array(r),i=0;i<r;i++)o[i]=e[i]
for(var a=0;a<t.length;a++)n[t[a]]=o[a+1]
return n}function D(e){for(var t=e.length,n=new Array(t-1),r=1;r<t;r++)n[r-1]=e[r]
return n}function N(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function F(e,t){var n=function(){for(var n=arguments.length,r=new Array(n+1),o=!1,i=0;i<n;++i){var a=arguments[i]
if(!o){if((o=L(a))===p){var s=p.error
p.error=null
var u=new k(f)
return O(u,s),u}o&&!0!==o&&(a=N(o,a))}r[i]=a}var c=new k(f)
return r[n]=function(e,n){e?O(c,e):void 0===t?y(c,n):!0===t?y(c,D(arguments)):Array.isArray(t)?y(c,R(arguments,t)):y(c,n)},o?M(c,r,e,this):C(c,r,e,this)}
return n.__proto__=e,n}function C(e,t,n,r){if(b(n).apply(r,t)===p){var o=p.error
p.error=null,O(e,o)}return e}function M(e,t,n,r){return k.all(t).then((function(t){return C(e,t,n,r)}))}function L(e){return null!==e&&"object"==typeof e&&(e.constructor===k||d(e))}function I(e,t){return k.all(e,t)}k.cast=c,k.all=function(e,t){return Array.isArray(e)?new T(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},k.race=function(e,t){var n=new this(f,t)
if(!Array.isArray(e))return O(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===l&&r<e.length;r++)_(this.resolve(e[r]),void 0,(function(e){return y(n,e)}),(function(e){return O(n,e)}))
return n},k.resolve=c,k.reject=function(e,t){var n=new this(f,t)
return O(n,e),n},k.prototype._guidKey=S,k.prototype.then=A
var B=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(T)
function W(e,t){return Array.isArray(e)?new B(k,e,t).promise:k.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function G(e,t){return k.race(e,t)}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}B.prototype._setResultAt=j
var H=function(e){function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3]
return q(this,e.call(this,t,n,r,o))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),n=t.length,r=this.promise
this._remaining=n
for(var o=void 0,i=void 0,a=0;r._state===l&&a<n;a++)i=e[o=t[a]],this._eachEntry(i,o,!0)
this._checkFullfillment()},t}(T)
function U(e,t){return k.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("Promise.hash must be called with an object")
return new H(k,e,t).promise}))}var V=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(H)
function z(e,t){return k.resolve(e,t).then((function(e){if(null===e||"object"!=typeof e)throw new TypeError("hashSettled must be called with an object")
return new V(k,e,!1,t).promise}))}function Y(e){throw setTimeout((function(){throw e})),e}function K(e){var t={resolve:void 0,reject:void 0}
return t.promise=new k((function(e,n){t.resolve=e,t.reject=n}),e),t}V.prototype._setResultAt=j
var $=function(e){function t(t,n,r,o){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!0,o,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,n,r,o){var i=t.length||0
this.length=i,this._remaining=i,this._result=new Array(i),this._mapFn=o,this._enumerate(t)},t.prototype._setResultAt=function(e,t,n,r){if(r){var o=b(this._mapFn)(n,t)
o===p?this._settledAt(2,t,o.error,!1):this._eachEntry(o,t,!1)}else this._remaining--,this._result[t]=n},t}(T)
function Z(e,t,n){return"function"!=typeof t?k.reject(new TypeError("map expects a function as a second argument"),n):k.resolve(e,n).then((function(e){if(!Array.isArray(e))throw new TypeError("map must be called with an array")
return new $(k,e,t,n).promise}))}function X(e,t){return k.resolve(e,t)}function J(e,t){return k.reject(e,t)}function Q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ee={},te=function(e){function t(){return Q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==ee}))
w(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,n,r){if(r){this._result[t]=n
var o=b(this._mapFn)(n,t)
o===p?this._settledAt(2,t,o.error,!1):this._eachEntry(o,t,!1)}else this._remaining--,n||(this._result[t]=ee)},t}($)
function ne(e,t,n){return"function"!=typeof t?k.reject(new TypeError("filter expects function as a second argument"),n):k.resolve(e,n).then((function(e){if(!Array.isArray(e))throw new TypeError("filter must be called with an array")
return new te(k,e,t,n).promise}))}var re=0,oe=void 0
function ie(e,t){pe[re]=e,pe[re+1]=t,2===(re+=2)&&we()}var ae="undefined"!=typeof window?window:void 0,se=ae||{},ue=se.MutationObserver||se.WebKitMutationObserver,ce="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),fe="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function le(){return function(){return setTimeout(de,1)}}var pe=new Array(1e3)
function de(){for(var e=0;e<re;e+=2)(0,pe[e])(pe[e+1]),pe[e]=void 0,pe[e+1]=void 0
re=0}var he,ve,be,me,ye,ge,we=void 0
ce?(ye=process.nextTick,ge=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(ge)&&"0"===ge[1]&&"10"===ge[2]&&(ye=setImmediate),we=function(){return ye(de)}):ue?(ve=0,be=new ue(de),me=document.createTextNode(""),be.observe(me,{characterData:!0}),we=function(){return me.data=ve=++ve%2}):fe?((he=new MessageChannel).port1.onmessage=de,we=function(){return he.port2.postMessage(0)}):we=void 0===ae?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(oe=e.runOnLoop||e.runOnContext)?function(){oe(de)}:le()}catch(e){return le()}}():le(),i.async=ie,i.after=function(e){return setTimeout(e,0)}
var Oe=X,_e=function(e,t){return i.async(e,t)}
function xe(){i.on.apply(i,arguments)}function Ee(){i.off.apply(i,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ae=window.__PROMISE_INSTRUMENTATION__
for(var Te in a("instrument",!0),Ae)Ae.hasOwnProperty(Te)&&xe(Te,Ae[Te])}const je={asap:ie,cast:Oe,Promise:k,EventTarget:o,all:I,allSettled:W,race:G,hash:U,hashSettled:z,rethrow:Y,defer:K,denodeify:F,configure:a,on:xe,off:Ee,resolve:X,reject:J,map:Z,async:_e,filter:ne}},836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F})
var r=n(927),o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),a="undefined"==typeof Element,s=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i))
return t&&s.call(e,i)&&r.unshift(e),r.filter(n)},f=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var u=a.shift()
if("SLOT"===u.tagName){var c=u.assignedElements(),f=e(c.length?c:u.children,!0,r)
r.flatten?o.push.apply(o,f):o.push({scope:u,candidates:f})}else{s.call(u,i)&&r.filter(u)&&(n||!t.includes(u))&&o.push(u)
var l=u.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(u),p=!r.shadowRootFilter||r.shadowRootFilter(u)
if(l&&p){var d=e(!0===l?u.children:l.children,!0,r)
r.flatten?o.push.apply(o,d):o.push({scope:u,candidates:d})}else a.unshift.apply(a,u.children)}}return o},l=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},v=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var o=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(o,"details:not([open]) *"))return!0
var i=u(e).host,a=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var c=e;e;){var f=e.parentElement,l=u(e)
if(f&&!f.shadowRoot&&!0===r(f))return h(e)
e=e.assignedSlot?e.assignedSlot:f||l===e.ownerDocument?f:l.host}e=c}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!s.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},b=function(e,t){return!(function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!o||o===e}(e)}(t)||l(t)<0||!v(e,t))},m=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],r=[]
return t.forEach((function(t,o){var i=!!t.scope,a=i?t.scope:t,s=l(a,i),u=i?e(t.candidates):a
0===s?i?n.push.apply(n,u):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:u})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=function(e,t){var n
return n=(t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:b.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:m}):c(e,t.includeContainer,b.bind(null,t)),y(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,i)&&b(t,e)},O=o.concat("iframe").join(","),_=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,O)&&v(t,e)}
function x(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?x(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T,j=(T=[],{activateTrap:function(e){if(T.length>0){var t=T[T.length-1]
t!==e&&t.pause()}var n=T.indexOf(e);-1===n||T.splice(n,1),T.push(e)},deactivateTrap:function(e){var t=T.indexOf(e);-1!==t&&T.splice(t,1),T.length>0&&T[T.length-1].unpause()}}),S=function(e){return setTimeout(e,0)},P=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},R=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},D=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=E({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},s=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},u=function(e){var t=o[e]
if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a]
t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},l=function(){var e=u("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(r.activeElement)>=0)e=r.activeElement
else{var t=i.tabbableGroups[0]
e=t&&t.firstTabbableNode||u("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,r=g(e,o.tabbableOptions),i=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?f([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(t,n.includeContainer,v.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(t){return t===e}))
if(!(n<0))return t?i.slice(n+1).find((function(e){return w(e,o.tabbableOptions)})):i.slice(0,n).reverse().find((function(e){return w(e,o.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(l()))},h=function(e){var t=u("setReturnFocus",e)
return t||!1!==t&&e},b=function(e){var t=R(e)
s(t)>=0||(k(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!_(t,o.tabbableOptions)}):k(o.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=R(e),n=s(t)>=0
n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(i.mostRecentlyFocusedNode||l()))},y=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==k(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=R(e)
p()
var n=null
if(i.tabbableGroups.length>0){var r=s(t),a=r>=0?i.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=P(i.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(c<0&&(a.container===t||_(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(c=r),c>=0){var f=0===c?i.tabbableGroups.length-1:c-1
n=i.tabbableGroups[f].lastTabbableNode}}else{var l=P(i.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(l<0&&(a.container===t||_(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!a.nextTabbableNode(t))&&(l=r),l>=0){var h=l===i.tabbableGroups.length-1?0:l+1
n=i.tabbableGroups[h].firstTabbableNode}}}else n=u("fallbackFocus")
n&&(e.preventDefault(),d(n))}(e)},O=function(e){var t=R(e)
s(t)>=0||k(o.clickOutsideDeactivates,e)||k(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(i.active)return j.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?S((function(){d(l())})):d(l()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",b,{capture:!0,passive:!1}),r.addEventListener("touchstart",b,{capture:!0,passive:!1}),r.addEventListener("click",O,{capture:!0,passive:!1}),r.addEventListener("keydown",y,{capture:!0,passive:!1}),n},A=function(){if(i.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0),r.removeEventListener("click",O,!0),r.removeEventListener("keydown",y,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this
var t=a(e,"onActivate"),n=a(e,"onPostActivate"),o=a(e,"checkCanFocusTrap")
o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var s=function(){o&&p(),x(),n&&n()}
return o?(o(i.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!i.active)return this
var t=E({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,A(),i.active=!1,i.paused=!1,j.deactivateTrap(n)
var r=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),u=a(t,"checkCanReturnFocus"),c=a(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var f=function(){S((function(){c&&d(h(i.nodeFocusedBeforeActivation)),s&&s()}))}
return c&&u?(u(h(i.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,A()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),x(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&p(),this}}).updateContainerElements(e),n}
let N
try{N=(0,r.capabilities)("3.22")}catch{N=(0,r.capabilities)("3.13")}var F=(0,r.setModifierManager)((()=>({capabilities:N,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,n){let{named:{isActive:r,isPaused:o,shouldSelfFocus:i,focusTrapOptions:a,_createFocusTrap:s}}=n
e.focusTrapOptions={...a}||{},void 0!==r&&(e.isActive=r),void 0!==o&&(e.isPaused=o),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let u=D
s&&(u=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=u(t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,t){let{named:n}=t
const r=n.focusTrapOptions||{}
if(e.isActive&&!n.isActive){const{returnFocusOnDeactivate:t}=r,n=void 0===t
e.focusTrap.deactivate({returnFocus:n})}else!e.isActive&&n.isActive&&e.focusTrap.activate()
e.isPaused&&!n.isPaused?e.focusTrap.unpause():!e.isPaused&&n.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=r,void 0!==n.isActive&&(e.isActive=n.isActive),void 0!==n.isPaused&&(e.isPaused=n.isPaused)},destroyModifier(e){let{focusTrap:t}=e
t.deactivate()}})),class{})},339:(e,t,n)=>{n.r(t),n.d(t,{setup:()=>c})
var r=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n])
if(i)for(var n of i(t))a.call(t,n)&&s(e,n,t[n])
return e}
function c(e){function t(e){return new RegExp(`\\b(?:${e.split(" ").join("|")})\\b`)}let n="[-+*/_~!@$%^=<>{}\\w]+",r=/[A-Za-z0-9]+/,o=p.either(r,/[a-zA-Z0-9]+\.[a-zA-Z0-9-]+/,p.concat(r,/::/,/-?/,r)),i=/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,a=new RegExp(p.either(/"[^{"]+/,/"/,/'[^{']+/,/'/,/"[^"]+"/,/'[^']+'/)),s={"parameter argument property":{pattern:/@[\w\d-_]+/}},c={punctuation:[{pattern:/[!#%&:()*+,.\/;<=>\[\\\]^`{|}~]+/},{pattern:/^=/,alias:"attr-equals"},{pattern:/\/?>/}]},f={"function-name":[{pattern:new RegExp("(\\()"+n),lookbehind:!0},{pattern:new RegExp("(\\{\\{\\{?)"+n),lookbehind:!0}]},l={builtin:t(["action on","outlet yield","log debugger","let each each-in if else unless"].join(" ")),keyword:t(["has-block concat fn component helper modifier get hash query-params","true false undefined null"].join(" ")),operator:t(["eq neq","gt gte le lte","and or not","as"].join(" "))},d={function:{greedy:!0,pattern:/\([\S-_\d]+\b/,inside:u(u(u({},c),f),l)}},h={"this-expression":{pattern:/this\.[\S]+/,lookbehind:!0,greedy:!0,inside:u(u({},c),{namespace:/this/,property:/[\S]+/})}},v={"member-expression":{pattern:/[\S]+\.[\S]+/,lookbehind:!0,greedy:!0,inside:u(u({},c),{constant:/[\S]+/,property:/[\S]+/})}},b=u(u(u(u(u(u(u(u(u({},d),c),h),v),s),{number:i,boolean:/\b(?:true|false)\b/}),l),f),{"attr-name":/^[^=]+=/,string:a,variable:/\b[A-Za-z0-9_-]+\b/}),m={mustache:{pattern:/\{\{\{?\/?[^}]+?\}?\}\}/,lookbehind:!0,alias:"punctuation",greedy:!0,inside:u(u({},{"sub-expression":{alias:"punctuation",pattern:/\([^)]+\)/,lookbehind:!0,greedy:!0,inside:b}}),b)}},y={string:{pattern:a,inside:m}}
b.string=y.string
let g=e.languages.markup
if(!g)throw new Error("prism-markup is required")
e.languages.glimmer=u(u({comment:[{pattern:/\{\{!--[\s\S]*?--\}\}/},{pattern:/\{\{![\s\S]*?\}\}/}],number:i},m),{tag:u(u({},g.tag),{inside:u(u(u(u(u({number:i},s),m),{tag:u(u({},g.tag.inside.tag),{inside:u(u({},c),{"class-name":new RegExp(o)})}),"attr-name":{pattern:/\b[^=\b]+=/,inside:u(u(u(u({},y),c),s),m)}}),c),y)})})}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((e=>l(e))).join("")}function l(e){return e?"string"==typeof e?e:e.source:null}var p={lookahead:function(e){return f("(?=",e,")")},either:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return"("+t.map((e=>l(e))).join("|")+")"},optional:function(e){return f("(",e,")?")},concat:f}}}])

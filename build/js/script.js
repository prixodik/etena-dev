/* components */
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map


/*!


 * VERSION: 2.0.2


 * DATE: 2018-08-27


 * UPDATES AND DOCS AT: http://greensock.com


 * 


 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin


 *


 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.


 * This work is subject to the terms at http://greensock.com/standard-license or for


 * Club GreenSock members, the software agreement that was issued with your membership.


 * 


 * @author: Jack Doyle, jack@greensock.com


 **/


var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="2.0.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="2.0.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&(j=Math.max(0,Math.min(e.totalDuration(),(this.rawTime()-e._startTime)*e._timeScale)),Math.abs(j-e._totalTime)>1e-5&&e.render(j,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.0.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),


c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.0.2",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=("undefined"!=typeof window?window:O.defaultView||{getComputedStyle:function(){}}).getComputedStyle,_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u;


};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,"rotationZ"in A&&(A.rotation=A.rotationZ),E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",-1!==E.indexOf("%")&&(m.width=_(a,"width"),m.height=_(a,"height")),O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-10,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,Y){k||j.wake();var c=this.vars.useFrames?X:Y;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&$(),this.render(a,b,!1),K.length&&$())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio;


},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?W[H.defaultOverwrite]:"number"==typeof i?i>>0:W[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=_(f,this,!1),1===i&&this._siblings[e].length>1&&ba(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=_(b,this,!1),1===i&&this._siblings.length>1&&ba(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)V[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!S[c]||S[c]&&S[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.0.2",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},Q=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=P(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},R=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:P},S=H._plugins={},T=R.tweenLookup={},U=0,V=R.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},W={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},X=E._rootFramesTimeline=new G,Y=E._rootTimeline=new G,Z=30,$=R.lazyRender=function(){var a,b=K.length;for(L={};--b>-1;)a=K[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);K.length=0};Y._startTime=j.time,X._startTime=j.frame,Y._active=X._active=!0,setTimeout($,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&$(),Y.render((j.time-Y._startTime)*Y._timeScale,!1,!1),X.render((j.frame-X._startTime)*X._timeScale,!1,!1),K.length&&$(),j.frame>=Z){Z=j.frame+(parseInt(H.autoSleep,10)||120);for(c in T){for(b=T[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete T[c]}if(c=Y._first,(!c||c._paused)&&H.autoSleep&&!X._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var _=function(a,b,c){var d,e,f=a._gsTweenID;if(T[f||(a._gsTweenID=f="t"+U++)]||(T[f]={target:a,tweens:[]}),b&&(d=T[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return T[f].tweens},aa=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ba=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ca(b,0,o),0===ca(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!aa(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ca=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)V[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&$(),this.vars.css||b.style&&b!==a&&b.nodeType&&S.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],V[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(S[g]&&(j=new S[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=Q.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ba(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===n&&"isPause"!==this.data)&&j!==a&&(c=!0,j>n&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:n);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==n||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:n)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,m=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,K.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===n&&g!==n&&(this._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!aa(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){return this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(Math.min(0,-this._delay))),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=_(d[c],this,!0);else this._siblings=_(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=_(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var da=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=da.prototype},!0);if(i=da.prototype,da.version="1.19.0",da.API=2,i._firstPT=null,i._addTween=Q,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},da.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===da.API&&(S[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){da.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new da(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,da.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function t(){var e,t,n;v&&u&&(e=R.type.Array(u)?u:f.slice(0),u=!1,t=d,0!=(n=(d=l.scrollPos())-t)&&(h=0<n?"FORWARD":i),h===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)}))}function r(){n=R.rAF(t)}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){0<c.refreshInterval&&(o=window.setTimeout(E,c.refreshInterval))},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(e){"resize"==e.type&&(g=y(),h=s),!0!==u&&(u=!0,r())},E=function(){if(!p&&g!=y()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(t)}f.forEach(function(e,t){e.refresh()}),m()};this._options=c;function x(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t}return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){l.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==l)e.addTo(l);else if(!~f.indexOf(e))for(var t in f.push(e),f=x(f),e.on("shift.controller_sort",function(){f=x(f)}),c.globalSceneOptions)e[t]&&e[t].call(e,c.globalSceneOptions[t]);return l},this.removeScene=function(e){var t;return R.type.Array(e)?e.forEach(function(e,t){l.removeScene(e)}):-1<(t=f.indexOf(e))&&(e.off("shift.controller_sort"),f.splice(t,1),e.remove()),l},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){l.updateScene(e,n)}):n?e.update(!0):!0!==u&&e instanceof _.Scene&&(~(u=u||[]).indexOf(e)||u.push(e),u=x(u),r()),l},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(e,t){if(R.type.Number(e))S.call(c.container,e,t);else if(e instanceof _.Scene)e.controller()===l&&l.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))S=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=c.vertical?"top":"left",o=R.get.offset(c.container),i=R.get.offset(n);p||(o[r]-=l.scrollPos()),l.scrollTo(i[r]-o[r],t)}}return l},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(w=e),l):w.call(l)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:d,scrollDirection:h,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(e){window.clearTimeout(o);for(var t=f.length;t--;)f[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in c)a.hasOwnProperty(e)||delete c[e];if(c.container=R.get.elements(c.container)[0],!c.container)throw"ScrollMagic.Controller init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var t=parseInt(c.refreshInterval,10);c.refreshInterval=R.type.Number(t)?t:a.refreshInterval,m()}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(e,o){return R.type.Function(o)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:o}))}),d},this.off=function(e,i){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],o=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||o!==r.namespace&&"*"!==o||i&&i!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){var t,r,o,i;return e&&(t=e.trim().split("."),r=t[0],o=t[1],(i=s[r])&&i.forEach(function(e,t){o&&o!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})),d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),i(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",S),e=l,l=void 0,e.removeScene(d),d.trigger("remove")),d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){var t,n;return l&&(e?l.enabled()&&o?(t=l.info("scrollPos"),n=0<h.duration?(t-a.start)/(a.end-a.start):t>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:t}),d.progress(n)):m&&p===f&&T(!0):l.updateScene(d,!1)),d},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(e){var t;!n||x(t="duration",n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),o=R.get.offset(r.container),i=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(o[i]-=l.scrollPos()),t=s[i]-o[i]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){var e;if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n=n&&void 0,0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),~D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&T(),t&&A()}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function C(){l&&m&&p===f&&!l.info("isDocument")&&T()}function F(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&A()}function L(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var T=function(e){var t,n,r,o,i,s;m&&l&&(t=l.info(),n=w.spacer.firstChild,e||p!==f?(r={position:w.inFlow?"relative":"absolute",top:0,left:0},o=R.css(n,"position")!=r.position,w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))||p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),o&&A()):("fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),A()),i=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10,i[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:i.top,left:i.left})))},A=function(){var e,t,n,r,o;m&&l&&w.inFlow&&(e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),o={},w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(o["min-width"]=R.get.width(t?m:n,!0,!0),o.width=e?o["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(o["min-height"]=R.get.height(t?n:m,!0,!r),o.height=e?o["min-height"]:"auto"),w.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*g,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,o))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var o="absolute"!=R.css(m,"position"),i=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!o&&t.pushFollowers&&(t.pushFollowers=!1);var a,l=m.parentNode.insertBefore(document.createElement("div"),m),c=R.extend(i,{position:o?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return o||R.extend(c,R.css(m,["width","height"])),R.css(l,c),l.setAttribute(P,""),R.addClass(l,t.spacerClass),w={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&o&&R.isMarginCollapseType(i.display)},pushFollowers:t.pushFollowers,inFlow:o},m.___origStyle||(m.___origStyle={},a=m.style,r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=a[e]||""})),w.relSize.width&&R.css(l,{width:s.width}),w.relSize.height&&R.css(l,{height:s.height}),l.appendChild(m),R.css(m,{position:o?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",C),window.addEventListener("resize",C),window.addEventListener("resize",F),m.addEventListener("mousewheel",L),m.addEventListener("DOMMouseScroll",L),T(),d},this.removePin=function(e){var t,n,r;return m&&(p===f&&T(!0),!e&&l||((t=w.spacer.firstChild).hasAttribute(P)&&(n=w.spacer.style,r={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)),w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)),window.removeEventListener("scroll",C),window.removeEventListener("resize",C),window.removeEventListener("resize",F),m.removeEventListener("mousewheel",L),m.removeEventListener("DOMMouseScroll",L),m=void 0),d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function l(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)}function r(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e[0].toUpperCase()+e.substr(1).toLowerCase();var o,i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&r&&(o=l(t),i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)),i}function c(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(e){return!!~["block","flex","list-item","table","-webkit-box"].indexOf(e)};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var o=e[n];t[n]=u.DomElement(o)?o:d.elements(o)}else!u.DomElement(e)&&e!==document&&e!==s||(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n,r={top:0,left:0};return e&&e.getBoundingClientRect&&(n=e.getBoundingClientRect(),r.top=n.top,r.left=n.left,t||(r.top+=d.scrollTop(),r.left+=d.scrollLeft())),r},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var o in t){var i=t[o];i==parseFloat(i)&&(i+="px"),e.style[c(o)]=i}},e}(window||{});return _});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}
/*!
   * GSAP 3.0.1
   * https://greensock.com
   *
   * @license Copyright 2008-2019, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function J(t){return(l=dt(t,at))&&ee}function K(t,e){return console.warn("Invalid",t,"tween of",e,"Missing plugin? gsap.registerPlugin()")}function L(t,e){return!e&&console.warn(t)}function M(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function N(){return 0}function W(t){var e,n,i=t[0];if(!r(i)&&!o(i))return G(t)?t:[t];if(!(e=(i._gsap||{}).harness)){for(n=ct.length;n--&&!ct[n].targetTest(i););e=ct[n]}for(n=t.length;n--;)t[n]._gsap||(t[n]._gsap=new Ft(t[n],e));return t}function X(t){return t._gsap||W(vt(t))[0]._gsap}function Y(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function Z(t,e){return(t=t.split(",")).forEach(e)||t}function $(t){return Math.round(1e4*t)/1e4}function _(t,e){for(var r=e.length,n=0;t.indexOf(e[n])<0&&++n<r;);return n<r}function aa(t,e,r){var n,i=p(t[1]),a=(i?2:1)+(e<2?0:1),o=t[a];return i&&(o.duration=t[1]),1===e?(o.runBackwards=1,o.immediateRender=s(o.immediateRender)):2===e&&(n=t[a-1],o.startAt=n,o.immediateRender=s(o.immediateRender)),o.parent=r,o}function ba(){var t,e,r=ot.length,n=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ca(t,e,r,n){ot.length&&ba(),t.render(e,r,n),ot.length&&ba()}function da(t){var e=parseFloat(t);return e||0===e?e:t}function ea(t){return t}function fa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ga(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ia(t,e){for(var n in e)t[n]=r(e[n])?ia(t[n]||(t[n]={}),e[n]):e[n];return t}function ja(t,e){var r,n={};for(r in t)r in e||(n[r]=t[r]);return n}function na(t,e,r,n){void 0===r&&(r="_first"),void 0===n&&(n="_last");var i=e._prev,a=e._next;i?i._next=a:t[r]===e&&(t[r]=a),a?a._prev=i:t[n]===e&&(t[n]=i),e._dp=t,e._next=e._prev=e.parent=null}function oa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function pa(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function sa(t){var e;return t._repeat?(e=t.duration()+t._rDelay)*~~(t._tTime/e):0}function ta(t,e){return 0<e._ts?(t-e._start)*e._ts:(e._dirty?e.totalDuration():e._tDur)+(t-e._start)*e._ts}function ua(t,e,r){if(e.parent&&oa(e),e._start=r+e._delay,e._end=e._start+(e.totalDuration()/e._ts||0),function _addLinkedListItem(t,e,r,n,i){void 0===r&&(r="_first"),void 0===n&&(n="_last");var a,s=t[n];if(i)for(a=e[i];s&&s[i]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=t}(t,e,"_first","_last",t._sort?"_start":0),(t._recent=e)._time||!e._dur&&e._initted){var n=(t.rawTime()-e._start)*e._ts;(!e._dur||mt(0,e.totalDuration(),n)-e._tTime>B)&&e.render(n,!0)}if(pa(t),t._dp&&t._time>=t._dur&&t._ts&&t._dur<t.duration())for(var i=t;i._dp;)i.totalTime(i._tTime,!0),i=i._dp;return t}function va(t,e,r,n){return It(t,e),t._initted?!r&&t._pt&&t.vars.lazy?(ot.push(t),t._lazy=[e,n],1):void 0:1}function ya(t){if(t instanceof Et)return pa(t);var e=t._repeat;return t._tDur=e?e<0?1e20:$(t._dur*(e+1)+t._rDelay*e):t._dur,pa(t.parent),t}function Aa(t,e){var r,i,a=t.labels,s=t._recent||_t,o=t.duration()>=D?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Aa(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ba(t,e){return t||0===t?e(t):e}function Da(t){return(t+"").substr((parseFloat(t)+"").length)}function Ga(t){return r(t)&&"length"in t&&t.length-1 in t&&r(t[0])&&t!==i}function Ja(t){if(o(t))return t;var d=r(t)?t:{each:t},_=Dt(d.ease),m=d.from||0,g=parseFloat(d.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=d.axis,w=m,T=m;return n(m)?w=T={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(w=m[0],T=m[1]),function(t,e,r){var n,i,a,s,o,u,h,l,f,c=(r||d).length,p=v[c];if(!p){if(!(f="auto"===d.grid?0:(d.grid||[1,D])[1])){for(h=-D;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(p=v[c]=[],n=y?Math.min(f,c)*w-.5:m%f,i=y?c*T/f-.5:m/f|0,l=D,u=h=0;u<c;u++)a=u%f-n,s=i-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);p.max=h-l,p.min=l,p.v=c=(parseFloat(d.amount)||parseFloat(d.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),p.b=c<0?g-c:g,p.u=Da(d.amount||d.each)||0,_=_&&c<0?Ct(_):_}return c=(p[t]-p.min)/p.max||0,$(p.b+(_?_(c):c)*p.v)+p.u}}function Ka(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Da(t))}}function La(u,t){var h,l,e=G(u);return!e&&r(u)&&(h=e=u.radius||D,u=vt(u.values),(l=!p(u[0]))&&(h*=h)),Ba(t,e?function(t){for(var e,r,n=parseFloat(l?t.x:t),i=parseFloat(l?t.y:0),a=D,s=0,o=u.length;o--;)(e=l?(e=u[o].x-n)*e+(r=u[o].y-i)*r:Math.abs(u[o]-n))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Da(t)}:Ka(u))}function Ma(t,e,r,n){return Ba(G(t)?!e:!n,function(){return G(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*n)/n})}function Qa(e,r,t){return Ba(t,function(t){return e[~~r(t)]})}function Ta(t){for(var e,r,n,i,a=0,s="";~(e=t.indexOf("random(",a));)n=t.indexOf(")",e),i="["===t.charAt(e+7),r=t.substr(e+7,n-e-7).match(i?it:H),s+=t.substr(a,e-a)+Ma(i?r:+r[0],+r[1],+r[2]||1e-5),a=n+1;return s+t.substr(a,t.length-a)}function Wa(t,e,r){var n,i,a,s=t.labels,o=D;for(n in s)(i=s[n]-e)<0==!!r&&i&&o>(i=Math.abs(i))&&(a=n,o=i);return a}function Ya(t){return oa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function bb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function cb(t,e){var r,n,i,a,s,o,u,h,l,f,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:Tt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Tt[t])c=Tt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(n=t.charAt(2))+n+(i=t.charAt(3))+i),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=f=t.match(H),e){if(~t.indexOf("="))return t.match(tt)}else a=+c[0]%360/360,s=+c[1]/100,r=2*(o=+c[2]/100)-(n=o<=.5?o*(s+1):o+s-o*s),3<c.length&&(c[3]*=1),c[0]=bb(a+1/3,r,n),c[1]=bb(a,r,n),c[2]=bb(a-1/3,r,n);else c=t.match(H)||Tt.transparent;c=c.map(Number)}return e&&!f&&(r=c[0]/wt,n=c[1]/wt,i=c[2]/wt,o=((u=Math.max(r,n,i))+(h=Math.min(r,n,i)))/2,u===h?a=s=0:(l=u-h,s=.5<o?l/(2-u-h):l/(u+h),a=u===r?(n-i)/l+(n<i?6:0):u===n?(i-r)/l+2:(r-n)/l+4,a*=60),c[0]=a+.5|0,c[1]=100*s+.5|0,c[2]=100*o+.5|0),c}function db(t,e){var r,n,i,a=(t+"").match(xt),s=0,o="";if(!a)return t;for(r=0;r<a.length;r++)n=a[r],s+=(i=t.substr(s,t.indexOf(n,s)-s)).length+n.length,3===(n=cb(n,e)).length&&n.push(1),o+=i+(e?"hsla("+n[0]+","+n[1]+"%,"+n[2]+"%,"+n[3]:"rgba("+n.join(","))+")";return o+t.substr(s)}function gb(t){var e,r=t.join(" ");xt.lastIndex=0,xt.test(r)&&(e=kt.test(r),t[0]=db(t[0],e),t[1]=db(t[1],e))}function ob(t){var e=(t+"").split("("),r=Ot[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,n,i={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,n=r.substr(0,e),i[s]=isNaN(n)?n.replace(St,"").trim():+n,s=r.substr(e+1).trim();return i}(e[1])]:rt.exec(t)[1].split(",").map(da)):Ot._CE&&Pt.test(t)?Ot._CE("",t):r}function rb(t,e,r,n){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===n&&(n=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,a={easeIn:e,easeOut:r,easeInOut:n};return Z(t,function(t){for(var e in Ot[t]=at[t]=a,Ot[i=t.toLowerCase()]=r,a)Ot[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ot[t+"."+e]=a[e]}),a}function sb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function tb(r,t,e){function sk(t){return 1===t?1:n*Math.pow(2,-10*t)*Q((t-a)*i)+1}var n=1<=t?t:1,i=(e||(r?.3:.45))/(t<1?t:1),a=i/F*(Math.asin(1/n)||0),s="out"===r?sk:"in"===r?function(t){return 1-sk(1-t)}:sb(sk);return i=F/i,s.config=function(t,e){return tb(r,t,e)},s}function ub(e,r){function Ak(t){return--t*t*((r+1)*t+r)+1}void 0===r&&(r=1.70158);var t="out"===e?Ak:"in"===e?function(t){return 1-Ak(1-t)}:sb(Ak);return t.config=function(t){return ub(e,t)},t}var R,i,a,h,l,f,d,c,m,g,v,y,b,w,T,x,k,A,O,P,S,C,U={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},D=1e8,B=1/D,F=2*Math.PI,z=F/4,I=0,j=Math.sqrt,V=Math.cos,Q=Math.sin,G=Array.isArray,H=/(?:-?\.?\d|\.)+/gi,tt=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,et=/[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,nt=/[\+-]=-?[\.\d]+/,it=/[#\-+\.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,ct=[],pt="onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",dt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t={_start:0,endTime:N},mt=function _clamp(t,e,r){return r<t?t:e<r?e:r},gt=[].slice,vt=function toArray(t,e){return!n(t)||e||!a&&Mt()?G(t)?function _flatten(t,r,i){return void 0===i&&(i=[]),t.forEach(function(t){var e;return n(t)&&!r||Ga(t)?(e=i).push.apply(e,vt(t)):i.push(t)})||i}(t,e):Ga(t)?gt.call(t,0):t?[t]:[]:gt.call(h.querySelectorAll(t),0)},yt=function mapRange(e,t,r,n,i){var a=t-e,s=n-r;return Ba(i,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var n,i,a=t.vars,s=a[e];if(s)return n=a[e+"Params"],i=a.callbackScope||t,r&&ot.length&&ba(),n?s.apply(i,n):s.call(i,t)},wt=255,Tt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},xt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in Tt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),kt=/hsl[a]?\(/,At=(b=Date.now,w=500,T=33,x=b(),k=x,O=A=1/60,y={time:0,frame:0,tick:function tick(){yj(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ee,(i.gsapVersions||(i.gsapVersions=[])).push(ee.version),J(l||i.GreenSockGlobals||!i.gsap&&i||{}),v=i.requestAnimationFrame),m&&y.sleep(),g=v||function(t){return setTimeout(t,1e3*(O-y.time)+1|0)},c=1,yj(2))},sleep:function sleep(){(v?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=N},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,T=Math.min(e,w,0)},fps:function fps(t){A=1/(t||60),O=y.time+A},add:function add(t){P.indexOf(t)<0&&P.push(t),Mt()},remove:function remove(t){var e;~(e=P.indexOf(t))&&P.splice(e,1)},_listeners:P=[]}),Mt=function _wake(){return!c&&At.wake()},Ot={},Pt=/^[\d.\-M][\d.\-,\s]/,St=/["']/g,Ct=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Ot[t]||ob(t))||e};function yj(e){var t,r,n=b()-k,i=!0===e;w<n&&(x+=n-T),k+=n,y.time=(k-x)/1e3,(0<(t=y.time-O)||i)&&(y.frame++,O+=t+(A<=t?.004:A-t),r=1),i||(m=g(yj)),r&&P.forEach(function(t){return t(y.time,n,y.frame,e)})}function Rk(t){return t<C?S*t*t:t<.7272727272727273?S*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?S*(t-=2.25/2.75)*t+.9375:S*Math.pow(t-2.625/2.75,2)+.984375}Z("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;rb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Ot.Linear.easeNone=Ot.none=Ot.Linear.easeIn,rb("Elastic",tb("in"),tb("out"),tb()),S=7.5625,C=1/2.75,rb("Bounce",function(t){return 1-Rk(1-t)},Rk),rb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),rb("Circ",function(t){return-(j(1-t*t)-1)}),rb("Sine",function(t){return 1-V(t*z)}),rb("Back",ub("in"),ub("out"),ub()),Ot.SteppedEase=Ot.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,n=t+(e?0:1),i=e?1:0;return function(t){return((n*mt(0,.99999999,t)|0)+i)*r}}},E.ease=Ot["quad.out"];var Bt,Ft=function GSCache(t,e){this.id=I++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:Y,this.set=e?e.getSetter:jt},Rt=((Bt=Animation.prototype).delay=function delay(t){return t||0===t?(this._delay=t,this):this._delay},Bt.duration=function duration(t){var e=arguments.length,r=this._repeat,n=0<r?r*((e?t:this._dur)+this._rDelay):0;return e?this.totalDuration(r<0?t:t+n):this.totalDuration()&&this._dur},Bt.totalDuration=function totalDuration(t){if(!arguments.length)return this._tDur;var e=this._repeat,r=(t||this._rDelay)&&e<0;return this._tDur=r?1e20:t,this._dur=r?t:(t-e*this._rDelay)/(e+1),this._dirty=0,pa(this.parent),this},Bt.totalTime=function totalTime(t,e){if(Mt(),!arguments.length)return this._tTime;var r,n=this.parent||this._dp;if(n&&n.smoothChildTiming&&this._ts){for(r=this._start,this._start=n._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts),this._end+=this._start-r,n._dirty||pa(n);n.parent;)n.parent._time!==n._start+(0<n._ts?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;this.parent||ua(this._dp,this,this._start-this._delay)}return this._tTime===t&&this._dur||ca(this,t,e),this},Bt.time=function time(t,e){return arguments.length?this.totalTime(t+sa(this),e):this._time},Bt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._tTime/this.totalDuration()},Bt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*t+sa(this),e):this.duration()?this._time/this._dur:this.ratio},Bt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?1+~~(this._tTime/r):1},Bt.timeScale=function timeScale(t){var e=this._ts;return arguments.length?e?(this._end=this._start+this._tDur/(this._ts=t||B),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this).totalTime(this._tTime,!0)):(this._pauseTS=t,this):e||this._pauseTS},Bt.paused=function paused(t){var e=!this._ts;return arguments.length?(e!==t&&(t?(this._pauseTS=this._ts,this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(this._ts=this._pauseTS,t=this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B),this.totalTime(t,!0))),this):e},Bt.startTime=function startTime(t){return arguments.length?(this.parent&&this.parent._sort&&ua(this.parent,this,t-this._delay),this):this._start},Bt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Bt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ta(e.rawTime(t),this):this._tTime:this._tTime},Bt.repeat=function repeat(t){return arguments.length?(this._repeat=t,ya(this)):this._repeat},Bt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,ya(this)):this._rDelay},Bt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Bt.seek=function seek(t,e){return this.totalTime(Aa(this,t),s(e))},Bt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Bt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Bt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Bt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Bt.resume=function resume(){return this.paused(!1)},Bt.reversed=function reversed(t){var e=this._ts||this._pauseTS;return arguments.length?(t!==this.reversed()&&(this[this._ts?"_ts":"_pauseTS"]=Math.abs(e)*(t?-1:1),this.totalTime(this._tTime,!0)),this):e<0},Bt.invalidate=function invalidate(){return this._initted=0,this},Bt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!e||this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-B},Bt.eventCallback=function eventCallback(t,e,r){var n=this.vars;return 1<arguments.length?(e?(n[t]=e,r&&(n[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},Bt.then=function then(e){var r=this;return void 0===e&&(e=N),new Promise(function(t){r._prom=function(){e(r),t()}})},Bt.kill=function kill(){Ya(this)},Animation);function Animation(t,e){var r=t.parent||R;this.vars=t,this._dur=this._tDur=+t.duration||0,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase,ya(this)),this._ts=1,this.data=t.data,c||At.wake(),r&&ua(r,this,e||0===e?e:r._time),t.reversed&&this.reversed(!0),t.paused&&this.paused(!0)}fa(Rt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:0,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0});var Et=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=s(t.smoothChildTiming),r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,n){return new Xt(t,aa(arguments,0,this),Aa(this,p(e)?n:r)),this},t.from=function from(t,e,r,n){return new Xt(t,aa(arguments,1,this),Aa(this,p(e)?n:r)),this},t.fromTo=function fromTo(t,e,r,n,i){return new Xt(t,aa(arguments,2,this),Aa(this,p(e)?i:n)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,e.repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Xt(t,e,Aa(this,r)),this},t.call=function call(t,e,r){return ua(this,Xt.delayedCall(0,t,e),Aa(this,r))},t.staggerTo=function staggerTo(t,e,r,n,i,a,s){return r.duration=e,r.stagger=r.stagger||n,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Xt(t,r,Aa(this,i)),this},t.staggerFrom=function staggerFrom(t,e,r,n,i,a,o){return r.runBackwards=1,r.immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,n,i,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,n,i,a,o,u){return n.startAt=r,n.immediateRender=s(n.immediateRender),this.staggerTo(t,e,n,i,a,o,u)},t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,c,p,d=this._time,_=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=_-B<t&&0<=t&&this!==R?_:t<B?0:t,v=this._zTime<0!=t<0&&this._initted;if(g!==this._tTime||r||v){if(v&&(m||(d=this._zTime),!t&&e||(this._zTime=t)),n=g,f=this._start,u=0===(l=this._ts),d!==this._time&&m&&(n+=this._time-d),this._repeat&&(p=this._yoyo,o=m+this._rDelay,(m<(n=$(g%o))||_===g)&&(n=m),(s=~~(g/o))&&s===g/o&&(n=m,s--),(c=~~(this._tTime/o))&&c===this._tTime/o&&c--,p&&1&s&&(n=m-n),s!==c&&!this._lock)){var y=p&&1&c,b=y===(p&&1&s);if(s<c&&(y=!y),d=y?0:m,this._lock=1,this.render(d,e,!m)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),d!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,d=y?m+1e-4:-1e-4,this.render(d,!0)),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var n;if(e<r)for(n=t._first;n&&n._start<=r;){if(!n._dur&&"isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if(!n._dur&&"isPause"===n.data&&n._start<e)return n;n=n._prev}}(this,$(d),$(n)))&&(g-=n-(n=h._start)),this._tTime=g,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1),d||!n||e||bt(this,"onStart"),d<=n&&0<=t)for(i=this._first;i;){if(a=i._next,(i._act||n>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(n-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(n-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}else{i=this._last;for(var w=t<0?t:n;i;){if(a=i._prev,(i._act||w<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(w-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(w-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}}if(h&&!e&&(this.pause(),h.render(d<=n?0:-B)._zTime=d<=n?1:-1,this._ts))return this._start=f,this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(g===_||!g&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||(!n||_>=this.totalDuration())&&(!t&&m||oa(this,1),e||t<0&&!d||(bt(this,g===_?"onComplete":"onReverseComplete",!0),this._prom&&g===_&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Aa(this,e)),!(t instanceof Rt)){if(G(t))return t.forEach(function(t){return r.add(t,e)}),pa(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Xt.delayedCall(0,t)}return this!==t?ua(this,t,e):this},t.getChildren=function getChildren(t,e,r,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===n&&(n=-D);for(var i=[],a=this._first;a;)a._start>=n&&(a instanceof Xt?e&&i.push(a):(r&&i.push(a),t&&i.push.apply(i,a.getChildren(!0,e,r)))),a=a._next;return i},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(na(this,t),t===this._recent&&(this._recent=this._last),pa(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=At.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts)),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Aa(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var n=Xt.delayedCall(0,e||N,r);return n.data="isPause",this._hasPause=1,ua(this,n,Aa(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Aa(this,t);e;)e._start===t&&"isPause"===e.data&&oa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var n=this.getTweensOf(t,r),i=n.length;i--;)n[i].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,n=[],i=vt(t),a=this._first;a;)a instanceof Xt?!_(a._targets,i)||e&&!a.isActive()||n.push(a):(r=a.getTweensOf(i,e)).length&&n.push.apply(n,r),a=a._next;return n},t.tweenTo=function tweenTo(t,e){var r=this,n=Aa(r,t),i=e&&e.startAt,a=Xt.to(r,fa({ease:"none",lazy:!1,time:n,duration:Math.abs(n-(i&&"time"in i?i.time:r._time))/r.timeScale()||B,onStart:function onStart(){r.pause();var t=Math.abs(n-r._time)/r.timeScale();a._dur!==t&&(a._dur=t,a.render(a._time,!0,!0)),e&&e.onStart&&e.onStart.apply(a,e.onStartParams||[])}},e));return a},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,fa({startAt:{time:Aa(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),Wa(this,Aa(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),Wa(this,Aa(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var n,i=this._first,a=this.labels;i;)i._start>=r&&(i._start+=t),i=i._next;if(e)for(n in a)a[n]>=r&&(a[n]+=t);return pa(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),pa(this)},t.totalDuration=function totalDuration(t){var e,r,n=0,i=this,a=i._last,s=D,o=i._repeat,u=o*i._rDelay||0,h=o<0;if(arguments.length)return h?i:i.timeScale(i.totalDuration()/t);if(i._dirty){for(;a;)e=a._prev,a._dirty&&a.totalDuration(),a._start>s&&i._sort&&a._ts&&!i._lock?(i._lock=1,ua(i,a,a._start-a._delay),i._lock=0):s=a._start,a._start<0&&a._ts&&(n-=a._start,(!i.parent&&!i._dp||i.parent&&i.parent.smoothChildTiming)&&(i._start+=a._start/i._ts,i._time-=a._start,i._tTime-=a._start),i.shiftChildren(-a._start,!1,-D),s=0),n<(r=a._end=a._start+a._tDur/Math.abs(a._ts||a._pauseTS))&&a._ts&&(n=$(r)),a=e;i._dur=i===R&&i._time>n?i._time:Math.min(D,n),i._tDur=h&&(i._dur||u)?1e20:Math.min(D,n*(o+1)+u),i._end=i._start+(i._tDur/Math.abs(i._ts||i._pauseTS)||0),i._dirty=0}return i._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&ca(R,ta(t,R)),At.frame>=ft){ft+=U.autoSleep||120;var e=R._first;if((!e||!e._ts)&&U.autoSleep&&At._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||At.sleep()}}},Timeline}(Rt);fa(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});function Bb(t,e,i,a,s,u){var h,l,f,c;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||G(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new te(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==d))for(f=i._ptLookup[i._targets.indexOf(s)],c=h._props.length;c--;)f[h._props[c]]=l;return h}var zt,Lt=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,c=t[e],p="get"!==r?r:o(c)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,d=o(c)?l?qt:Ut:Zt;if(n(i)&&(~i.indexOf("random(")&&(i=Ta(i)),"="===i.charAt(1)&&(i=parseFloat(p)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+Da(p))),p!==i)return isNaN(p+i)?(c||e in t||K(e,i),function _addComplexStringPropTween(t,e,r,n,i,a,s){var o,u,h,l,f,c,p,d,_=new te(this._pt,t,e,0,1,Wt,null,i),m=0,g=0;for(_.b=r,_.e=n,r+="",(p=~(n+="").indexOf("random("))&&(n=Ta(n)),a&&(a(d=[r,n],t,e),r=d[0],n=d[1]),u=r.match(et)||[];o=et.exec(n);)l=o[0],f=n.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1]),_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-c,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<n.length?n.substring(m,n.length):"",_.fp=s,(nt.test(n)||p)&&(_.e=0),this._pt=_}.call(this,t,e,p,i,d,h||U.stringFilter,l)):(f=new te(this._pt,t,e,+p||0,i-(p||0),"boolean"==typeof c?Qt:Vt,0,d),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},It=function _initTween(t,e){var r,n,i,a,o,u,h,l,f,c,p,d,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,b=_.onUpdate,w=_.onUpdateParams,T=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,A=_.keyframes,M=_.autoRevert,O=t._dur,P=t._startAt,S=t._targets,C=t.parent,D=C&&"nested"===C.data?C.parent._targets:S,B="auto"===t._overwrite,F=t.timeline;if(!F||A&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?Ct(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!F){if(P&&P.render(-1,!0).kill(),g){if(oa(t._startAt=Xt.set(S,fa({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:b,onUpdateParams:w,callbackScope:T,stagger:0},g))),v)if(0<e)M||(t._startAt=0);else if(O)return}else if(x&&O)if(P)M||(t._startAt=0);else if(e&&(v=!1),oa(t._startAt=Xt.set(S,dt(ja(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:C}))),v){if(!e)return}else _initTween(t._startAt,e),v&&(M||(t._startAt=0));for(r=ja(_,st),d=(l=S[t._pt=0]?X(S[0]).harness:0)&&_[l.prop],n=0;n<S.length;n++){if(h=(o=S[n])._gsap||W(S)[n]._gsap,t._ptLookup[n]=c={},ut[h.id]&&ba(),p=D===S?n:D.indexOf(o),l&&!1!==(f=new l).init(o,d||r,t,p,D)&&(t._pt=a=new te(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=a}),f.priority&&(u=1)),!l||d)for(i in r)ht[i]&&(f=Bb(i,r,t,p,o,D))?f.priority&&(u=1):c[i]=a=Lt.call(t,o,i,"get",r[i],p,D,0,_.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),B&&(zt=t,R.killTweensOf(o,c,!0),zt=0),t._pt&&(s(y)&&O||y&&!O)&&(ut[h.id]=1)}u&&Ht(t),t._onInit&&t._onInit(t)}t._from=!F&&!!_.runBackwards,t._onUpdate=b,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?Ta(t):t},Nt=pt+",repeat,repeatDelay,yoyo,yoyoEase",$t=(Nt+",id,stagger,delay,duration").split(","),Xt=function(k){function Tween(t,e,n){var i;"number"==typeof e&&(n.duration=e,e=n,n=null);var a,o,h,l,f,c,p,d,_=(i=k.call(this,function _inheritDefaults(t){var e=t.parent||R,r=t.keyframes?ga:fa;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}(e),n)||this).vars,m=_.duration,g=_.delay,v=_.immediateRender,y=_.stagger,b=_.overwrite,w=_.keyframes,T=_.defaults,x=vt(t);if(i._targets=x.length?W(x):L("GSAP target "+t+" not found. https://greensock.com",!U.nullTargetWarn)||[{}],i._ptLookup=[],i._overwrite=b,w||y||u(m)||u(g)){if(e=i.vars,(a=i.timeline=new Et({data:"nested",defaults:T||{}})).kill(),a.parent=_assertThisInitialized(i),w)fa(a.vars.defaults,{ease:"none"}),w.forEach(function(t){return a.to(x,t,">")});else{if(l=x.length,p=y?Ja(y):N,r(y))for(f in y)~Nt.indexOf(f)&&((d=d||{})[f]=y[f]);for(o=0;o<l;o++){for(f in h={},e)$t.indexOf(f)<0&&(h[f]=e[f]);h.stagger=0,d&&dt(h,d),e.yoyoEase&&!e.repeat&&(h.yoyoEase=e.yoyoEase),c=x[o],h.duration=+Yt(m,_assertThisInitialized(i),o,c,x),h.delay=(+Yt(g,_assertThisInitialized(i),o,c,x)||0)-i._delay,!y&&1===l&&h.delay&&(i._delay=g=h.delay,i._start+=g,h.delay=0),a.to(c,h,p(o,c,x))}m=g=0}m||i.duration(m=a.duration())}else i.timeline=0;return!0===b&&(zt=_assertThisInitialized(i),R.killTweensOf(x),zt=0),(v||!m&&!w&&i._start===i.parent._time&&s(v)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(i))&&"nested"!==i.parent.data)&&(i._tTime=-B,i.render(Math.max(0,-g))),i}_inheritsLoose(Tween,k);var t=Tween.prototype;return t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,c=this._time,p=this._tDur,d=this._dur,_=p-B<t&&0<=t?p:t<B?0:t;if(d){if(_!==this._tTime||r||this._startAt&&this._zTime<0!=t<0){if(n=_,l=this.timeline,this._repeat){if(s=d+this._rDelay,d<(n=$(_%s))&&(n=d),(a=~~(_/s))&&a===_/s&&(n=d,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,n=d-n),(o=~~(this._tTime/s))&&o===this._tTime/s&&o--,n===c&&!r)return this;a!==o&&this.vars.repeatRefresh&&!this._lock&&(this._lock=1,this.render(s*a,!0).invalidate()._lock=0)}if(!this._initted&&va(this,n,r,e))return this;for(this._tTime=_,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(n/d),this._from&&(this.ratio=h=1-h),c||!n||e||bt(this,"onStart"),i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!n&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==p&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&d||!(_||this._ts<0)||oa(this,1),e||t<0&&!c||(bt(this,_===p?"onComplete":"onReverseComplete",!0),this._prom&&_===p&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,n){var i,a,s,o=t._zTime<0?0:1,u=e<0?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&((a=~~((l=mt(0,t._tDur,e))/h))&&a===l/h&&a--,(s=~~(t._tTime/h))&&s===t._tTime/h&&s--,a!==s&&(o=1-u,t.vars.repeatRefresh&&t.invalidate())),(t._initted||!va(t,e,n,r))&&(u!==o||n)){for(r&&!e||(t._zTime=e),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||bt(t,"onStart"),i=t._pt;i;)i.r(u,i.d),i=i._next;!u&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,n),t._onUpdate&&!r&&bt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(t.ratio&&oa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t.ratio&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),k.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),zt===this)return zt;if(!(t||e&&"all"!==e)&&this.parent)return this._lazy=0,Ya(this);if(this.timeline)return this.timeline.killTweensOf(t,e),this;var r,i,a,s,o,u,h,l=this._targets,f=t?vt(t):l,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,n=r===e.length;n&&r--&&t[r]===e[r];);return r<0}(l,f))return Ya(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},Z(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,n,i,a,s=t[0]?X(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(n in r=dt({},e),o)if(n in r)for(i=(a=o[n].split(",")).length;i--;)r[a[i]]=r[n];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=c[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||(na(this,u,"_pt"),delete i[o])),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&p&&Ya(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,aa(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,n){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:n})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,aa(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Rt);fa(Xt.prototype,{_targets:[],_initted:0,_lazy:0,_startAt:0,_op:0,_onInit:0}),Z("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var t=new Et,e=vt(arguments);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Mb(t,e,r){return t.setAttribute(e,r)}function Ub(t,e,r,n){n.mSet(t,e,n.m.call(n.tween,r,n.mt),n)}var Zt=function _setterPlain(t,e,r){return t[e]=r},Ut=function _setterFunc(t,e,r){return t[e](r)},qt=function _setterFuncWithParam(t,e,r,n){return t[e](n.fp,r)},jt=function _getSetter(t,e){return o(t[e])?Ut:q(t[e])&&t.setAttribute?Mb:Zt},Vt=function _renderPlain(t,e){return e.set(e.t,e.p,~~(1e4*(e.s+e.c*t))/1e4,e)},Qt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wt=function _renderComplexString(t,e){var r=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):~~(1e4*(r.s+r.c*t))/1e4)+n,r=r._next;n+=e.c}e.set(e.t,e.p,n,e)},Gt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Jt=function _addPluginModifier(t,e,r,n){for(var i,a=this._pt;a;)i=a._next,a.p===n&&a.modifier(t,e,r),a=i},Kt=function _killPropTweensOf(t){for(var e,r,n=this._pt;n;)r=n._next,n.p===t&&!n.op||n.op===t?na(this,n,"_pt"):n.dep||(e=1),n=r;return!e},Ht=function _sortPropTweensByPriority(t){for(var e,r,n,i,a=t._pt;a;){for(e=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:i)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:i=a,a=e}t._pt=n},te=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=Ub,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,n,i,a,s,o,u){this.t=e,this.s=n,this.c=i,this.p=r,this.r=a||Vt,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}Z(pt+",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){st[t]=1,"on"===t.substr(0,2)&&(st[t+"Params"]=1)}),at.TweenMax=at.TweenLite=Xt,at.TimelineLite=at.TimelineMax=Et,R=new Et({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root"}),U.stringFilter=gb;var ee={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),n=e&&!r&&t.init?function(){this._props=[]}:t,i={init:N,render:Gt,add:Lt,kill:Kt,modifier:Jt,rawVars:0},a={targetTest:0,get:0,getSetter:jt,aliases:{},register:0};if(Mt(),t!==n){if(ht[e])return;fa(n,fa(ja(t,i),a)),dt(n.prototype,dt(i,ja(t,a))),ht[n.prop=e]=n,t.targetTest&&(ct.push(n),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}M(e,n),t.register&&t.register(ee,n,te)}(t)})},timeline:function timeline(t){return new Et(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=vt(i)[0]);var a=X(i||{}).get,s=e?ea:da;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,n){if(1<(r=vt(r)).length){var i=r.map(function(t){return ee.quickSetter(t,e,n)}),a=i.length;return function(t){for(var e=a;e--;)i[e](t)}}r=r[0]||{};var s=ht[e],o=X(r),u=s?function(t){var e=new s;d._pt=0,e.init(r,n?t+n:t,d,0,[r]),e.render(1,e),d._pt&&Gt(1,d)}:o.set(r,e);return s?u:function(t){return u(r,e,n?t+n:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ia(E,t||{})},config:function config(t){return ia(U,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&L(i+" effect requires "+t+" plugin.")}),lt[i]=function(t,e){return n(vt(t),fa(e||{},a))},s&&(Et.prototype[i]=function(t,e,n){return this.add(lt[i](t,r(e)?e:(n=e)&&{}),n)})},registerEase:function registerEase(t,e){Ot[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Ot},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,n,i=new Et(t);for(i.smoothChildTiming=s(t.smoothChildTiming),R.remove(i),i._dp=0,i._time=i._tTime=R._time,r=R._first;r;)n=r._next,!e&&!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]||ua(i,r,r._start-r._delay),r=n;return ua(R,i,0),i},utils:{wrap:function wrap(e,t,r){var n=t-e;return G(e)?Qa(e,wrap(0,e.length),t):Ba(r,function(t){return(n+(t-e)%n)%n+e})},wrapYoyo:function wrapYoyo(e,t,r){var n=t-e,i=2*n;return G(e)?Qa(e,wrapYoyo(0,e.length-1),t):Ba(r,function(t){return e+(n<(t=(i+(t-e)%i)%i)?i-t:t)})},distribute:Ja,random:Ma,snap:La,normalize:function normalize(t,e,r){return yt(t,e,0,1,r)},getUnit:Da,clamp:function clamp(e,r,t){return Ba(t,function(t){return mt(e,r,t)})},splitColor:cb,toArray:vt,mapRange:yt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Da(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),c={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(G(e)&&!G(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=dt(G(e)?[]:{},e));if(!u){for(s in r)Lt.call(c,e,s,"get",r[s]);a=function func(t){return Gt(t,c)||(f?e.p:e)}}}return Ba(t,a)}},install:J,effects:lt,ticker:At,updateRoot:Et.updateRoot,plugins:ht,globalTimeline:R,core:{PropTween:te,globals:M,Tween:Xt,Timeline:Et,Animation:Rt,getCache:X}};Z("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ee[t]=Xt[t]}),At.add(Et.updateRoot),d=ee.to({},{duration:0});function Zb(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},Z(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,n,i,a=t._targets;for(r in e)for(n=a.length;n--;)(i=t._ptLookup[n][r])&&i.d.modifier&&i.d.modifier(e[r],t,a[n],r)}(t,i)}}}}ee.registerPlugin({name:"attr",init:function init(t,e,r,n,i){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,i,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r],e[r])}},Zb("roundProps",Ka),Zb("modifiers"),Zb("snap",La)),Xt.version=Et.version=ee.version="3.0.1",f=1,t()&&Mt();function Ic(t,e){return e.set(e.t,e.p,~~(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Jc(t,e){return e.set(e.t,e.p,1===t?e.e:~~(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Kc(t,e){return e.set(e.t,e.p,t?~~(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Lc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Mc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Nc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Oc(t,e,r){return t.style[e]=r}function Pc(t,e,r){return t.style.setProperty(e,r)}function Qc(t,e,r){return t._gsap[e]=r}function Rc(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Sc(t,e,r,n,i){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(i,a)}function Tc(t,e,r,n,i){var a=t._gsap;a[e]=r,a.renderTransform(i,a)}function Xc(t,e){var r=ne.createElementNS?ne.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ne.createElement(t);return r.style?r:ne.createElement(t)}function Yc(t,e){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Ee,"-$1").toLowerCase())||r.getPropertyValue(e)}function Zc(t,e){var r=(e||se).style,n=5,i="O,Moz,ms,Ms,Webkit".split(",");if(t in r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(i[n]+t in r););return n<0?null:(3===n?"ms":0<=n?i[n]:"")+t}function $c(){!function _windowExists(){return"undefined"!=typeof window}()||(re=window,ne=re.document,ie=ne.documentElement,se=Xc("div")||{style:{}},oe=Xc("div"),Ne=Zc(Ne),$e=Zc($e),se.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",he=!!Zc("perspective"),ae=1)}function ad(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function bd(e){var r;try{r=e.getBBox()}catch(t){r=function _getBBoxHack(t){var e,r=Xc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText;if(ie.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=_getBBoxHack}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i?n.insertBefore(this,i):n.appendChild(this),ie.removeChild(r),this.style.cssText=a,e}.call(e,!0)}return!r||r.width||r.x||r.y?r:{x:+ad(e,["x","cx","x1"]),y:+ad(e,["y","cy","y1"]),width:0,height:0}}function cd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!bd(t))}function dd(t,e){if(e){var r=t.style;e in De&&(e=Ne),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ee,"-$1").toLowerCase())):r.removeAttribute(e)}}function ed(t,e,r,n,i,a){var s=new te(t._pt,e,r,0,1,a?Nc:Mc);return(t._pt=s).b=n,s.e=i,t._props.push(r),s}function gd(t,e,r,n){var i,a,s,o,u=parseFloat(r),h=(r+"").substr((u+"").length)||"px",l=se.style,f=Le.test(e),c="svg"===t.tagName.toLowerCase(),p=(c?"client":"offset")+(f?"Width":"Height"),d="px"===n;return n===h||Xe[n]||Xe[h]?u:(o=t.getCTM&&cd(t),"%"===n&&De[e]?$(u/(o?t.getBBox()[f?"width":"height"]:t[p])*100):(l[f?"width":"height"]=100+(d?h:n),a="em"===n&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ne&&a.appendChild||(a=ne.body),(s=a._gsap)&&"%"===n&&s.width&&f&&s.time===At.time?i=s.width*u/100:(a.appendChild(se),i=se[p],a.removeChild(se),f&&"%"===n&&((s=X(a)).time=At.time,s.width=i/u*100)),$(d?i*u/100:100/i*u)))}function hd(t,e,r,n){var i;return ae||$c(),e in Ye&&~(e=Ye[e]).indexOf(",")&&(e=e.split(",")[0]),De[e]?(i=Ve(t,n),i="transformOrigin"!==e?i[e]:Qe(Yc(t,$e))+i.zOrigin+"px"):(i=t.style[e])&&"auto"!==i&&!n||(i=Yc(t,e)||Y(t,e)),r?gd(t,e,i,r)+r:i}function id(t,e,r,n){var i,a,s,o,u,h,l,f,c,p,d,_,m=new te(this._pt,t.style,e,0,1,Wt),g=0,v=0;if(m.b=r,m.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=Yc(t,e)||n,t.style[e]=r),gb(i=[r,n]),n=i[1],s=(r=i[0]).match(ze)||[],(n.match(ze)||[]).length){for(;a=ze.exec(n);)l=a[0],c=n.substring(g,a.index),u?u=(u+1)%5:"rgba("===c.substr(-5)&&(u=1),l!==(h=s[v++]||"")&&(o=parseFloat(h)||0,d=h.substr((o+"").length),(_="="===l.charAt(1)?+(l.charAt(0)+"1"):0)&&(l=l.substr(2)),f=parseFloat(l),p=l.substr((f+"").length),g=ze.lastIndex-p.length,p||(p=p||U.units[e]||d,g===n.length&&(n+=p,m.e+=p)),d!==p&&(o=gd(t,e,h,p)),m._pt={_next:m._pt,p:c||1===v?c:",",s:o,c:_?_*f:f-o,m:u&&u<4?Math.round:0});m.c=g<n.length?n.substring(g,n.length):""}else m.r="display"===e?Nc:Mc;return nt.test(n)&&(m.e=0),this._pt=m}function kd(t){var e=t.split(" "),r=e[0],n=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==n&&"right"!==n||(e=r,r=n,n=e),e[0]=Ze[r]||r,e[1]=Ze[n]||n,e.join(" ")}function ld(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,a=e.t,s=a.style,o=e.u;if("all"===o||!0===o)s.cssText="",n=1;else for(i=(o=o.split(",")).length;-1<--i;)r=o[i],De[r]&&(n=1,r="transformOrigin"===r?$e:Ne),dd(a,r);n&&(dd(a,Ne),(n=a._gsap)&&(n.svg&&a.removeAttribute("transform"),delete n.x))}}function pd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function qd(t){var e=Yc(t,Ne);return pd(e)?qe:e.substr(7).match(tt).map($)}function rd(t,e){var r,n,i,a,s=t._gsap,o=t.style,u=qd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?qe:u:(u!==qe||t.offsetParent||t===ie||s.svg||(i=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextSibling,ie.appendChild(t)),u=qd(t),i?o.display=i:dd(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):ie.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function sd(t,e,r,n,i,a){var s,o,u,h=t._gsap,l=i||rd(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,p=h.xOffset||0,d=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],w=e.split(" "),T=parseFloat(w[0])||0,x=parseFloat(w[1])||0;r?l!==qe&&(o=_*v-m*g)&&(u=T*(-m/o)+x*(_/o)-(_*b-m*y)/o,T=T*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(T=(s=bd(t)).x+(~w[0].indexOf("%")?T/100*s.width:T),x=s.y+(~(w[1]||w[0]).indexOf("%")?x/100*s.height:x)),n||!1!==n&&h.smooth?(y=T-f,b=x-c,h.xOffset+=y*_+b*g-y,h.yOffset+=y*m+b*v-b):h.xOffset=h.yOffset=0,h.xOrigin=T,h.yOrigin=x,h.smooth=!!n,h.origin=e,h.originIsAbsolute=!!r,a&&(ed(a,h,"xOrigin",f,T),ed(a,h,"yOrigin",c,x),ed(a,h,"xOffset",p,h.xOffset),ed(a,h,"yOffset",d,h.yOffset))}function vd(t,e,r){var n=Da(e);return $(parseFloat(e)+parseFloat(gd(t,"x",r+"px",n)))+n}function Cd(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Be:1),c=s?f*s:f-i,p=i+c+"deg";return l&&("short"===(o=a.split("_")[1])&&(c%=h)!==c%180&&(c+=c<0?h:-h),"cw"===o&&c<0?c=(c+36e9)%h-~~(c/h)*h:"ccw"===o&&0<c&&(c=(c-36e9)%h-~~(c/h)*h)),t._pt=u=new te(t._pt,e,r,i,c,Jc),u.e=p,u.u="deg",t._props.push(r),u}function Dd(t,e,r){var n,i,a,s,o,u,h,l=oe.style,f=r._gsap;for(i in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ne]=e,ne.body.appendChild(oe),n=Ve(oe,1),De)(a=f[i])!==(s=n[i])&&"perspective"!==i&&(o=Da(a)!==(h=Da(s))?gd(r,i,a,h):parseFloat(a),u=parseFloat(s),t._pt=new te(t._pt,f,i,o,u-o,Ic),t._pt.u=h,t._props.push(i));ne.body.removeChild(oe)}var re,ne,ie,ae,se,oe,ue,he,le,fe,ce,pe=Ot.Power0,de=Ot.Power1,_e=Ot.Power2,me=Ot.Power3,ge=Ot.Power4,ve=Ot.Linear,ye=Ot.Quad,be=Ot.Cubic,we=Ot.Quart,Te=Ot.Quint,xe=Ot.Strong,ke=Ot.Elastic,Ae=Ot.Back,Me=Ot.SteppedEase,Oe=Ot.Bounce,Pe=Ot.Sine,Se=Ot.Expo,Ce=Ot.Circ,De={},Be=180/Math.PI,Fe=Math.PI/180,Re=Math.atan2,Ee=/([A-Z])/g,ze=/[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,Le=/(?:left|right|width|margin|padding|x)/i,Ie=/[\s,\(]\S/,Ye={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ne="transform",$e=Ne+"Origin",Xe={deg:1,rad:1,turn:1},Ze={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ue={clearProps:function clearProps(t,e,r,n,i){var a=t._pt=new te(t._pt,e,r,0,0,ld);return a.u=n,a.pr=-10,a.tween=i,t._props.push(r),1}},qe=[1,0,0,1,0,0],je={},Ve=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e)return r;var n,i,a,s,o,u,h,l,f,c,p,d,_,m,g,v,y,b,w,T,x,k,A,M,O,P,S,C,D,B,F=t.style,R=r.scaleX<0,E=r.xOrigin||0,z=r.yOrigin||0,L="deg",I=Yc(t,$e)||"0";return n=i=a=u=h=l=f=c=p=0,s=o=1,r.svg=!(!t.getCTM||!cd(t)),d=rd(t,r.svg),r.svg&&sd(t,I,r.originIsAbsolute,!1!==r.smooth,d),d!==qe&&(v=d[0],y=d[1],b=d[2],w=d[3],n=T=d[4],i=x=d[5],6===d.length?(s=Math.sqrt(v*v+y*y),o=Math.sqrt(w*w+b*b),u=v||y?Re(y,v)*Be:r.rotation||0,f=b||w?Re(b,w)*Be+u:r.skewX||0,r.svg&&(n-=E-(E*v+z*b),i-=z-(E*y+z*w))):(B=d[6],C=d[7],O=d[8],P=d[9],S=d[10],D=d[11],n=d[12],i=d[13],a=d[14],h=(_=Re(B,S))*Be,_&&(k=T*(m=Math.cos(-_))+O*(g=Math.sin(-_)),A=x*m+P*g,M=B*m+S*g,O=T*-g+O*m,P=x*-g+P*m,S=B*-g+S*m,D=C*-g+D*m,T=k,x=A,B=M),l=(_=Re(-b,S))*Be,_&&(m=Math.cos(-_),D=w*(g=Math.sin(-_))+D*m,v=k=v*m-O*g,y=A=y*m-P*g,b=M=b*m-S*g),u=(_=Re(y,v))*Be,_&&(k=v*(m=Math.cos(_))+y*(g=Math.sin(_)),A=T*m+x*g,y=y*m-v*g,x=x*m-T*g,v=k,T=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=$(Math.sqrt(v*v+y*y+b*b)),o=$(Math.sqrt(x*x+B*B)),_=Re(T,x),f=2e-4<Math.abs(_)?_*Be:0,p=D?1/(D<0?-D:D):0),r.svg&&(d=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!pd(Yc(t,Ne)),d&&t.setAttribute("transform",d))),90<Math.abs(f)&&Math.abs(f)<270&&(R?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=n&&Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)?0:n)+"px",r.y=((r.yPercent=i&&Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)?0:i)+"px",r.z=a+"px",r.scaleX=$(s),r.scaleY=$(o),r.rotation=$(u)+L,r.rotationX=$(h)+L,r.rotationY=$(l)+L,r.skewX=f+L,r.skewY=c+L,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(F[$e]=Qe(I)),r.xOffset=r.yOffset=0,r.force3D=U.force3D,r.renderTransform=r.svg?tr:he?He:We,r},Qe=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},We=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,He(t,e)},Ge="0deg",Je="0px",Ke=") ",He=function _renderCSSTransforms(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,p=r.scaleX,d=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ge||h!==Ge)){var w,T=parseFloat(h)*Fe,x=Math.sin(T),k=Math.cos(T);T=parseFloat(l)*Fe,w=Math.cos(T),a=vd(g,a,x*w*-v),s=vd(g,s,-Math.sin(T)*-v),o=vd(g,o,k*w*-v+v)}(n||i)&&(y="translate("+n+"%, "+i+"%) "),!b&&a===Je&&s===Je&&o===Je||(y+=o!==Je||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ke),_!==Je&&(y+="perspective("+_+Ke),u!==Ge&&(y+="rotate("+u+Ke),h!==Ge&&(y+="rotateY("+h+Ke),l!==Ge&&(y+="rotateX("+l+Ke),f===Ge&&c===Ge||(y+="skew("+f+", "+c+Ke),1===p&&1===d||(y+="scale("+p+", "+d+Ke),g.style[Ne]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,n,i,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,p=o.skewX,d=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,w=o.yOffset,T=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),p=parseFloat(p),(d=parseFloat(d))&&(p+=d=parseFloat(d),c+=d),c||p?(c*=Fe,p*=Fe,r=Math.cos(c)*_,n=Math.sin(c)*_,i=Math.sin(c-p)*-m,a=Math.cos(c-p)*m,p&&(d*=Fe,s=Math.tan(p-d),i*=s=Math.sqrt(1+s*s),a*=s,d&&(s=Math.tan(d),r*=s=Math.sqrt(1+s*s),n*=s)),r=$(r),n=$(n),i=$(i),a=$(a)):(r=_,a=m,n=i=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=gd(g,"x",l,"px"),k=gd(g,"y",f,"px")),(v||y||b||w)&&(x=$(x+v-(v*r+y*i)+b),k=$(k+y-(v*n+y*a)+w)),(u||h)&&(s=g.getBBox(),x=$(x+u/100*s.width),k=$(k+h/100*s.height)),s="matrix("+r+","+n+","+i+","+a+","+x+","+k+")",g.setAttribute("transform",s),T&&(g.style[Ne]=s)},er={name:"css",register:$c,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,n,i){var a,s,o,u,h,l,f,c,p,d,_,m,g,v,y,b=this._props,w=t.style;for(f in ae||$c(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Bb(f,e,r,n,t,i)))if(l=Ue[f],"function"===(h=typeof s)&&(h=typeof(s=s.call(r,n,t,i))),"string"===h&&~s.indexOf("random(")&&(s=Ta(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(w,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",n,i,0,0,f);else{if(a=hd(t,f),u=parseFloat(a),(d="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ye&&("autoAlpha"===f&&(1===u&&"hidden"===hd(t,"visibility")&&o&&(u=0),ed(this,w,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&~(f=Ye[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in De){if(m||(g=t._gsap,v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new te(this._pt,w,Ne,0,1,g.renderTransform,g)).dep=1),"scale"===f){this._pt=new te(this._pt,t,"scale",u,d?d*o:o-u,0,0,Rc),b.push("scale");continue}if("transformOrigin"===f){s=kd(s),g.svg?sd(t,s,0,v,0,this):((p=parseFloat(s.split(" ")[2]))!==g.zOrigin&&ed(this,g,"zOrigin",g.zOrigin,p),ed(this,w,f,Qe(a),Qe(s)));continue}if("svgOrigin"===f){sd(t,s,1,v,0,this);continue}if(f in je){Cd(this,g,f,u,s,d);continue}if("smoothOrigin"===f){ed(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Dd(this,s,t);continue}}if(_||(o||0===o)&&(u||0===u)&&!Ie.test(s)&&f in w)(c=(a+"").substr((u+"").length))!==(p=(s+"").substr((o+"").length)||(f in U.units?U.units[f]:c))&&(u=gd(t,f,a,p)),this._pt=new te(this._pt,_?g:w,f,u,d?d*o:o-u,"px"!==p||!1===e.autoRound||_?Ic:Lc),this._pt.u=p||0,c!==p&&(this._pt.b=a,this._pt.r=Kc);else if(f in w)id.call(this,t,f,a,s);else{if(!(f in t)){K("Invalid "+f+" tween "+s+". Missing plugin? gsap.registerPlugin()");continue}this.add(t,f,t[f],s,n,i)}b.push(f)}y&&Ht(this)},get:hd,aliases:Ye,getSetter:function getSetter(t,e,r){return e in De&&e!==$e&&(t._gsap.x||hd(t,"x"))?r&&ue===r?"scale"===e?Rc:Qc:(ue=r||{})&&("scale"===e?Sc:Tc):t.style&&!q(t.style[e])?Oc:~e.indexOf("-")?Pc:jt(t,e)}};ee.utils.checkPrefix=Zc,ce=Z((le="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(fe="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){De[t]=1}),Z(fe,function(t){U.units[t]="deg",je[t]=1}),Ye[ce[13]]=le+","+fe,Z("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ye[e[1]]=ce[e[0]]}),Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){U.units[t]="px"}),ee.registerPlugin(er);var rr=ee.registerPlugin(er)||ee;e.Back=Ae,e.Bounce=Oe,e.CSSPlugin=er,e.Circ=Ce,e.Cubic=be,e.Elastic=ke,e.Expo=Se,e.Linear=ve,e.Power0=pe,e.Power1=de,e.Power2=_e,e.Power3=me,e.Power4=ge,e.Quad=ye,e.Quart=we,e.Quint=Te,e.Sine=Pe,e.SteppedEase=Me,e.Strong=xe,e.TimelineLite=Et,e.TimelineMax=Et,e.TweenLite=Xt,e.TweenMax=Xt,e.default=rr,e.gsap=rr,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=gsap.min.js.map

/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],i):"object"==typeof exports?i(require("scrollmagic"),require("jquery")):i(e.ScrollMagic,e.jQuery)}(this,function(e,t){"use strict";e._util.get.elements=function(e){return t(e).toArray()},e._util.addClass=function(e,i){t(e).addClass(i)},e._util.removeClass=function(e,i){t(e).removeClass(i)},t.ScrollMagic=e});
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){var r;"function"==typeof define&&define.amd?define(["ScrollMagic","gsap","TweenMax","TimelineMax"],n):"object"==typeof exports?(r=require("gsap/dist/gsap")||require("gsap"),n(require("scrollmagic"),r,TweenMax||r,TimelineMax||r)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.gsap,e.gsap||e.TweenMax||e.TweenLite,e.gsap||e.TimelineMax||e.TimelineLite)}(this,function(e,n,p,u){"use strict";var g=n&&3<=parseFloat(n.version);e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var o,i=this;i.on("progress.plugin_gsap",function(){s()}),i.on("destroy.plugin_gsap",function(e){i.removeTween(e.reset)});var s=function(){var e,n;o&&(e=i.progress(),n=i.state(),o.repeat&&-1===o.repeat()?"DURING"===n&&o.paused()?o.play():"DURING"===n||o.paused()||o.pause():e!=o.progress()&&(0===i.duration()?0<e?o.play():o.reverse():i.tweenChanges()&&o.tweenTo?o.tweenTo(e*o.duration()):o.progress(e).pause()))};i.setTween=function(e,n,r){var t,a;1<arguments.length&&(a="number"==typeof arguments[1],g?(a||(r=n),r.hasOwnProperty("duration")||(r.duration=a?n:1)):arguments.length<3&&(r=n,n=1),e=g?p.to(e,r):p.to(e,n,r));try{(t=u&&!g?new u({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return i}return o&&i.removeTween(),o=t,e.repeat&&-1===e.repeat()&&(o.repeat(-1),o.yoyo(e.yoyo())),s(),i},i.removeTween=function(e){return o&&(e&&o.progress(0).pause(),o.kill(),o=void 0),i}})});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";
/*!
	 * ScrollToPlugin 3.0.0
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/function k(){return"undefined"!=typeof window}function l(){return e||k()&&(e=window.gsap)&&e.registerPlugin&&e}function m(t){return"string"==typeof t}function n(t,e){var o="x"===e?"Width":"Height",n="scroll"+o,r="client"+o;return t===x||t===s||t===f?Math.max(s[n],f[n])-(x["inner"+o]||s[r]||f[r]):t[n]-t["offset"+o]}function o(t,e){var o="scroll"+("x"===e?"Left":"Top");return t===x&&(null!=t.pageXOffset?o="page"+e.toUpperCase()+"Offset":t=null!=s[o]?s:f),function(){return t[o]}}function p(t,e){var n=a(t)[0].getBoundingClientRect(),r=!e||e===x||e===f,i=r?{top:s.clientTop-(x.pageYOffset||s.scrollTop||f.scrollTop||0),left:s.clientLeft-(x.pageXOffset||s.scrollLeft||f.scrollLeft||0)}:e.getBoundingClientRect(),l={x:n.left-i.left,y:n.top-i.top};return!r&&e&&(l.x+=o(e,"x")(),l.y+=o(e,"y")()),l}function q(t,e,o,r){return isNaN(t)?m(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+r:"max"===t?n(e,o):Math.min(n(e,o),p(t,e)[o]):parseFloat(t)}function r(){e=l(),k()&&e&&(x=window,f=document.body,s=document.documentElement,a=e.utils.toArray,e.config({autoKillThreshold:7}),g=e.config(),u=1)}var e,u,x,s,f,a,g,i={version:"3.0.0",name:"scrollTo",register:function register(t){e=t,r()},init:function init(t,e,n,i,l){u||r();var s=this;s.isWin=t===x,s.target=t,s.tween=n,"object"!=typeof e?m((e={y:e}).y)&&"max"!==e.y&&"="!==e.y.charAt(1)&&(e.x=e.y):e.nodeType&&(e={y:e,x:e}),s.vars=e,s.autoKill=!!e.autoKill,s.getX=o(t,"x"),s.getY=o(t,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),null!=e.x?(s.add(s,"x",s.x,q(e.x,t,"x",s.x)-(e.offsetX||0),i,l,Math.round),s._props.push("scrollTo_x")):s.skipX=1,null!=e.y?(s.add(s,"y",s.y,q(e.y,t,"y",s.y)-(e.offsetY||0),i,l,Math.round),s._props.push("scrollTo_y")):s.skipY=1},render:function render(t,e){for(var o,r,i,l,s,u=e._pt,f=e.target,p=e.tween,a=e.autoKill,c=e.xPrev,y=e.yPrev,d=e.isWin;u;)u.r(t,u.d),u=u._next;o=d||!e.skipX?e.getX():c,i=(r=d||!e.skipY?e.getY():y)-y,l=o-c,s=g.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),a&&(!e.skipX&&(s<l||l<-s)&&o<n(f,"x")&&(e.skipX=1),!e.skipY&&(s<i||i<-s)&&r<n(f,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(p.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(p,e.vars.onAutoKillParams||[]))),d?x.scrollTo(e.skipX?o:e.x,e.skipY?r:e.y):(e.skipY||(f.scrollTop=e.y),e.skipX||(f.scrollLeft=e.x)),e.xPrev=e.x,e.yPrev=e.y},kill:function kill(t){var e="scrollTo"===t;!e&&"scrollTo_x"!==t||(this.skipX=1),!e&&"scrollTo_y"!==t||(this.skipY=1)}};i.max=n,i.getOffset=p,i.buildGetter=o,l()&&e.registerPlugin(i),t.ScrollToPlugin=i,t.default=i,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ScrollToPlugin.min.js.map

/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):"object"==typeof exports?r(require("scrollmagic")):r(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(i){"use strict";var o="0.85em",n="9999",v=i._util,h=0;i.Scene.extend(function(){var t,i=this;i.addIndicators=function(e){var r;return t||(r={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"},e=v.extend({},r,e),h++,t=new s(i,e),i.on("add.plugin_addIndicators",t.add),i.on("remove.plugin_addIndicators",t.remove),i.on("destroy.plugin_addIndicators",i.removeIndicators),i.controller()&&t.add()),i},i.removeIndicators=function(){return t&&(t.remove(),this.off("*.plugin_addIndicators"),t=void 0),i}}),i.Controller.addOption("addIndicators",!1),i.Controller.extend(function(){var c=this,e=c.info(),l=e.container,f=e.isDocument,m=e.vertical,h={groups:[]};this._indicators=h;function r(){h.updateBoundsPositions()}function t(){h.updateTriggerGroupPositions()}return l.addEventListener("resize",t),f||(window.addEventListener("resize",t),window.addEventListener("scroll",t)),l.addEventListener("resize",r),l.addEventListener("scroll",r),this._indicators.updateBoundsPositions=function(e){for(var r,t,i,o=e?[v.extend({},e.triggerGroup,{members:[e]})]:h.groups,n=o.length,s={},d=m?"left":"top",a=m?"width":"height",g=m?v.get.scrollLeft(l)+v.get.width(l)-15:v.get.scrollTop(l)+v.get.height(l)-15;n--;)for(r=(i=o[n]).members.length,t=v.get[a](i.element.firstChild);r--;)s[d]=g-t,v.css(i.members[r].bounds,s)},this._indicators.updateTriggerGroupPositions=function(e){for(var r,t,i,o,n=e?[e]:h.groups,s=n.length,d=f?document.body:l,a=f?{top:0,left:0}:v.get.offset(d,!0),g=m?v.get.width(l)-15:v.get.height(l)-15,p=m?"width":"height",u=m?"Y":"X";s--;)t=(r=n[s]).element,i=r.triggerHook*c.info("size"),o=v.get[p](t.firstChild.firstChild)<i?"translate"+u+"(-100%)":"",v.css(t,{top:a.top+(m?i:g-r.members[0].options.indent),left:a.left+(m?g-r.members[0].options.indent:i)}),v.css(t.firstChild.firstChild,{"-ms-transform":o,"-webkit-transform":o,transform:o})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(1<e.members.length?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild;t.textContent!==r&&(t.textContent=r,m&&h.updateBoundsPositions())},this.addScene=function(e){this._options.addIndicators&&e instanceof i.Scene&&e.controller()===c&&e.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){l.removeEventListener("resize",t),f||(window.removeEventListener("resize",t),window.removeEventListener("scroll",t)),l.removeEventListener("resize",r),l.removeEventListener("scroll",r),this.$super.destroy.apply(this,arguments)},c});var s=function(o,n){var s,d,a=this,t=b.bounds(),i=b.start(n.colorStart),g=b.end(n.colorEnd),p=n.parent&&v.get.elements(n.parent)[0];n.name=n.name||h,i.firstChild.textContent+=" "+n.name,g.textContent+=" "+n.name,t.appendChild(i),t.appendChild(g),a.options=n,a.bounds=t,a.triggerGroup=void 0,this.add=function(){d=o.controller(),s=d.info("vertical");var e=d.info("isDocument");p=p||(e?document.body:d.info("container")),e||"static"!==v.css(p,"position")||v.css(p,{position:"relative"}),o.on("change.plugin_addIndicators",u),o.on("shift.plugin_addIndicators",r),m(),l(),setTimeout(function(){d._indicators.updateBoundsPositions(a)},0)},this.remove=function(){var e;a.triggerGroup&&(o.off("change.plugin_addIndicators",u),o.off("shift.plugin_addIndicators",r),1<a.triggerGroup.members.length?((e=a.triggerGroup).members.splice(e.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(e),d._indicators.updateTriggerGroupPositions(e),a.triggerGroup=void 0):f(),c())};var r=function(){l()},u=function(e){"triggerHook"===e.what&&m()},c=function(){t.parentNode.removeChild(t)},l=function(){var e;t.parentNode!==p&&(e=d.info("vertical"),v.css(i.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:n.indent,right:e?n.indent:-1,padding:e?"0 8px":"2px 4px"}),v.css(g,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?n.indent:"",bottom:e?"":n.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),p.appendChild(t));var r={};r[s?"top":"left"]=o.triggerPosition(),r[s?"height":"width"]=o.duration(),v.css(t,r),v.css(g,{display:0<o.duration()?"":"none"})},f=function(){d._indicators.groups.splice(d._indicators.groups.indexOf(a.triggerGroup),1),a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element),a.triggerGroup=void 0},m=function(){var e=o.triggerHook();if(!(a.triggerGroup&&Math.abs(a.triggerGroup.triggerHook-e)<1e-4)){for(var r,t=d._indicators.groups,i=t.length;i--;)if(r=t[i],Math.abs(r.triggerHook-e)<1e-4)return a.triggerGroup&&(1===a.triggerGroup.members.length?f():(a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup))),r.members.push(a),a.triggerGroup=r,void d._indicators.updateTriggerGroupLabel(r);if(a.triggerGroup){if(1===a.triggerGroup.members.length)return a.triggerGroup.triggerHook=e,void d._indicators.updateTriggerGroupPositions(a.triggerGroup);a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a),1),d._indicators.updateTriggerGroupLabel(a.triggerGroup),d._indicators.updateTriggerGroupPositions(a.triggerGroup),a.triggerGroup=void 0}!function(){var e=b.trigger(n.colorTrigger),r={};r[s?"right":"bottom"]=0,r[s?"border-top-width":"border-left-width"]=1,v.css(e.firstChild,r),v.css(e.firstChild.firstChild,{padding:s?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(e);var t={triggerHook:o.triggerHook(),element:e,members:[a]};d._indicators.groups.push(t),a.triggerGroup=t,d._indicators.updateTriggerGroupLabel(t),d._indicators.updateTriggerGroupPositions(t)}()}}},b={start:function(e){var r=document.createElement("div");r.textContent="start",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return v.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",v.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return v.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),e.style.zIndex=n,e},trigger:function(e){var r=document.createElement("div");r.textContent="trigger",v.css(r,{position:"relative"});var t=document.createElement("div");v.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),t.appendChild(r);var i=document.createElement("div");return v.css(i,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),i.style.zIndex=n,i.appendChild(t),i}}});



var uikit = {

    lg: '1450',

    md: '1200',

    sm: '1024',

    sm2: '980',

    xs: '640',

    xxs: '480',

	wwInit: null,

	whInit: null,

	_touchStartY: null,

	_resizing: false,

	scale: function(){

		let ratio = window.devicePixelRatio;

		

		ratio = (ratio >= 2)? 1 : ratio;

		console.log('DevicePixelRatio = '+ratio);

		

		if(ratio > 1 && ratio <= 2){

			return (1 / ratio);

		}else if(this.wwOrigin() <= this.sm){

			return 1.2;

		}else{

			return 1;

		}

	},

	steps: [

		{ // 1

			prev: {},

			next: {

				trigger: '.js-three-section-trigger'

			}

		},

		{ // 2

			prev: {

				trigger: '.js-first-section'

			},

			next: {

				trigger: '.js-four-section',

				offset: 950,

				speed: 2

			}

		},

		{ // 3

			prev: {

				trigger: '.js-three-section-trigger',

				speed: 1.5

			},

			next: {

				trigger: '.js-four-section',

				offset: 1510,

				speed: 1.5

			}

		},

		{ // 4

			prev: {

				trigger: '.js-four-section',

				offset: -1510,

				speed: 1

			},

			next: {

				trigger: '.js-four-section',

				offset: 1340,

				speed: 2,

				ease: 'linear'

			}

		},

		{ // 5

			prev: {

				trigger: '.js-four-section',

				offset: -1310,

				speed: 2,

				ease: 'linear'

			},

			next: {

				trigger: '.js-four-section',

				offset: 1280,

				speed: 1

			}

		},

		{ // 6

			prev: {

				trigger: '.js-four-section',

				offset: -1280,

				speed: 1

			},

			next: {

				trigger: '.js-four-section',

				offset: 1100,

				speed: 1

			}

		},

		{ // 7

			prev: {

				trigger: '.js-four-section',

				offset: -1100,

				speed: 1

			},

			next: {

				trigger: '.js-four-section',

				offset: 1100,

				speed: 1

			}

		},

		{ // 8

			prev: {

				trigger: '.js-four-section',

				offset: -1100,

				speed: 1

			},

			next: {

				trigger: '.js-five-section-trigger',

				offset: 0,

				speed: 1

			}

		},

		{ // 9

			prev: {

				trigger: '.js-four-section',

				offset: -60,

				speed: 1

			},

			next: {

				trigger: '.js-five-img',

				offset: 0,

				speed: 1

			}

		},

		{ // 10

			prev: {

				trigger: '.js-five-section-trigger',

				offset: -100,

				speed: 1

			},

			next: {

				trigger: '.js-footer',

				offset: 0,

				speed: 1.5,

				ease: 'linear'

			}

		},

		{ // 11

			prev: {

				trigger: '.js-five-img',

				offset: -100,

				speed: 1.5,

				ease: 'linear'

			},

			next: {}

		}

	],

	//massCoordinSteps: [],

	lastDirection: 'down',

	currentSlide: 0,

	nextSlide: 1,

	disableTriggers: true,

	controller: new ScrollMagic.Controller(),

    ww: function(){

        return $(window).width() * this.scale();

    },



    wh: function(){

        return $(window).height() * this.scale();

    },

	wwOrigin: function(){

        return $(window).width();

    },



    whOrigin: function(){

        return $(window).height();

    },

	isTouch: function(){

		return 'ontouchstart' in window;

	},



	dottedAnim: function () {

		var elements = $('.js-dotted'); // Получаем все элементы один раз

		var updateAnimation = function () {

			elements.each(function () {

				var size = $(this).data('size') || 70;

				var x = Math.ceil(Math.random() * 70);

				var y = Math.ceil(Math.random() * size);

				$(this).css({

					transform: `translate3d(${x}px, ${y}px, 0)`, // Используем translate3d для лучшей производительности

					opacity: 1 - $(this).css('opacity') // Переключаем прозрачность между 1 и 0

				});

			});

			setTimeout(updateAnimation, 4000); // Повторяем функцию каждые 4 секунды

		};

		updateAnimation(); // Запускаем анимацию впервые

	},



	// Собираем координаты всех шагов

	/* setMassCoordinSteps: function(){

		this.steps.forEach((step, index) => {

			var element = document.querySelector(step.next.trigger);

			if (element) {

				var elementRect = element.getBoundingClientRect();

				var absoluteElementTop = elementRect.top + window.pageYOffset;

				absoluteElementTop = absoluteElementTop + step.next.offset;

				this.massCoordinSteps.push(absoluteElementTop || 0);

			}

		});

		console.log(this.massCoordinSteps);

	}, */



	/* getPositionIndex: function(coordinate){

		var closestIndex = this.massCoordinSteps.reduce((closestIndex, current, index) => {

			return (Math.abs(current - coordinate) < Math.abs(this.massCoordinSteps[closestIndex] - coordinate) ? index : closestIndex);

		}, 0);

		console.log(closestIndex);

		return closestIndex;

	}, */



	disableScroll: function() {

		console.log("Scrolling disabled");

		window.addEventListener('wheel', uikit.preventScroll, {passive: false});

    	window.addEventListener('touchmove', uikit.preventScroll, {passive: false});

		window.addEventListener('touchstart', uikit.touchStart, { passive: false });

        window.addEventListener('touchend', uikit.touchEnd, { passive: false });

	},

	

	enableScroll: function() {

		console.log("Scrolling enabled");

		window.removeEventListener('wheel', uikit.preventScroll, {passive: false});

    	window.removeEventListener('touchmove', uikit.preventScroll, {passive: false});

		window.removeEventListener('touchstart', uikit.touchStart, { passive: false });

        window.removeEventListener('touchend', uikit.touchEnd, { passive: false });

	},



	scrollNext: function(){

		//console.log('next');

		//console.log(this.steps[this.currentSlide]?.next);

		if(!this.steps[this.currentSlide]?.next?.trigger || this.disableTriggers) return false;



		uikit.scrollToSection(

			this.steps[this.currentSlide].next.trigger,

			this.steps[this.currentSlide].next.speed,

			this.steps[this.currentSlide].next.offset,

			this.steps[this.currentSlide].next.ease

		);

		this.currentSlide = this.currentSlide + 1;

	},

	scrollPrev: function(){

		//console.log('prev');

		//console.log(this.steps[this.currentSlide]?.prev);



		if(!this.steps[this.currentSlide]?.prev?.trigger || this.disableTriggers) return false;



		uikit.scrollToSection(

			this.steps[this.currentSlide].prev.trigger,

			this.steps[this.currentSlide].prev.speed,

			this.steps[this.currentSlide].prev.offset,

			this.steps[this.currentSlide].prev.ease

		);

		this.currentSlide = this.currentSlide - 1;

	},

	/* preventScroll: function(e) {

		let scrollDirection;

		let scrollCount;

		console.log(e);



		if (e.deltaY > 0 && !uikit.disableTriggers) {

			scrollDirection = 'down';

			uikit.scrollNext();

		} else if (e.deltaY < 0 && !uikit.disableTriggers) {

			scrollDirection = 'up';

			uikit.scrollPrev();

		} else {

			scrollDirection = 'none';

		}



		scrollCount = e.deltaY;



		console.log("Wheel event prevented");

		console.log({ scrollDirection, scrollCount });

		e.preventDefault();

		e.stopPropagation();

	}, */



	touchStart: function(e) {

        if (e.touches.length === 1) {

            uikit._touchStartY = e.touches[0].clientY;

        }

    },



    touchEnd: function(e) {

        uikit._touchStartY = null;

    },



	preventScroll: function(e) {

		let scrollDirection;

		let scrollCount;

		

		if (e.type === 'wheel') {

			scrollCount = e.deltaY;

		} else if (e.type === 'touchmove') {

			if (uikit._touchStartY === null) {

				uikit._touchStartY = e.touches[0].clientY;

				console.log(e.touches[0].clientY);

			}

			

			scrollCount = uikit._touchStartY - e.touches[0].clientY;

			//console.log(scrollCount);

		}



		if (scrollCount > 0 && !uikit.disableTriggers) {

			scrollDirection = 'down';

			uikit.scrollNext();

		} else if (scrollCount < 0 && !uikit.disableTriggers) {

			scrollDirection = 'up';

			uikit.scrollPrev();

		} else {

			scrollDirection = 'none';

		}



		//console.log("Scroll event prevented");

		//console.log({ scrollDirection, scrollCount });

		e.preventDefault();

		e.stopPropagation();

	},



	scrollToSection: function(section, speed = 1, offset = 0, ease = "power1.inOut") {

		

		var element = document.querySelector(section);

		if (element) {

			var elementRect = element.getBoundingClientRect();

			var absoluteElementTop = elementRect.top + window.pageYOffset;

			//console.log('--'+absoluteElementTop+' + '+offset+'='+ (absoluteElementTop+offset));



			// Отключаем скролл при начале анимации

			uikit.disableTriggers = true;



			this.controller.scrollTo(function (newpos) {

				requestAnimationFrame(function() {

					gsap.to(window, {

						duration: speed,

						scrollTo: { y: newpos + offset },

						ease: ease,

						onStart: function() {

							// Анимация началась

							uikit.disableTriggers = true;

						},

						onComplete: function() {

							//console.log($(window).scrollTop()+'!!!');

							if (uikit.disableTriggers) {

								gsap.killTweensOf(window); // Останавливаем все текущие анимации GSAP на объекте window

							}

							// Анимация закончилась

							setTimeout(function() {

								uikit.disableTriggers = false;

							},300);

						}

					});

				});

			});

			this.controller.scrollTo(absoluteElementTop);

		} else {

			console.log('Элемент не найден:', section);

		}

	},



	animFirst: function(){

		var threeHeight = 10; //1250;

		//var firstScene = document.getElementsByClassName('js-first-section');

		var twoSection = document.getElementsByClassName('js-two-section');

		

		//console.log(this.scale());

		//console.log(52 / this.scale());

		

		let twoSectionTop = 52;

		let vh = 'vh'; 

		if(this.wwOrigin() <= this.lg && this.wwOrigin() > this.md){ // lg

			twoSectionTop = 52;

		}else if(this.wwOrigin() <= this.md && this.wwOrigin() > this.sm){

			twoSectionTop = 28;

			vh = '%';

		}else if(this.wwOrigin() <= this.sm){

			twoSectionTop = 32;

			vh = '%';

		}



		if(this.whOrigin() <= 600){

			twoSectionTop = 32;

			vh = '%';

		}



		var top = twoSectionTop / this.scale(); // 0.8 * 52 * 0.2 = 20% увеличение значения top



		var tweenTwoSectionIn = new TimelineMax()

			.to(twoSection, 0.3, {top: '-'+top+vh});



		var sceneFirst = null;

		sceneFirst = new ScrollMagic.Scene({triggerElement: ".js-first-section", duration: (threeHeight * 1), offset: 0, triggerHook: 0})

			//.setPin(".js-first-section")

			//.addIndicators({name: "first"})

			.addTo(this.controller);

	},



	animThree: function () {

		//var scene = document.querySelector(".js-three-section");

		var threeHeight = 10;//this.wh(); //1250;

		var twoSection = document.getElementsByClassName('js-two-section');

		var sun = document.getElementsByClassName('js-three-sun');

		var city = document.getElementsByClassName('js-three-city');

		var heroCenter = document.getElementsByClassName('js-three-hero-center');

		var heroLeft = document.getElementsByClassName('js-three-hero-left');

		var heroRight = document.getElementsByClassName('js-three-hero-right');



		/* var tweenFirstSectionOut = new TimelineMax()

			.to(twoSection, 0.8, {top: '-92vh'}); */



		var tweenSun = new TimelineMax()

			.to(sun, 1, {top: '-200px', transform: 'translateX(-50%) scale(1)'});

		var tweenCity = new TimelineMax()

			.to(city, 1, {top: '0%'});

		

		var heroTop = 40;

		

		if(this.ww() <= (+this.md + 50) && this.ww() > this.sm){ // md

			heroTop = 10;

		}

		var tweenHeroCenter = new TimelineMax()

			.to(heroCenter, 1, {top: heroTop+'%'});

		var tweenHeroLeft = new TimelineMax()

			.to(heroLeft, 0.8, {marginLeft: '0'});

		var tweenHeroRight = new TimelineMax()

			.to(heroRight, 0.8, {marginRight: '0'});



		var sceneThree = new ScrollMagic.Scene({triggerElement: ".js-three-section-trigger", duration: (threeHeight * 1), offset: 0, triggerHook: 0})

			//.addIndicators({name: "three"})

			.addTo(this.controller);



		var sceneThreeCity = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 1) */, offset: 0, triggerHook: (this.wwInit > this.sm)? 0 : 0.7})

			//.setPin(".three-section__container")

			.setTween(tweenCity)

			//.addIndicators({name: "three-city"})

			.addTo(this.controller);



		var sceneThreeSun = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 0.5) */, offset: 0, triggerHook: (this.wwInit > this.sm)? 0 : 0.7})

			//.setPin(".js-three-section")

			.setTween(tweenSun)

			//.addIndicators({name: "three-sun"})

			.addTo(this.controller);



		var sceneThreeHeroCenter = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})

			//.setPin(".js-three-section")

			.setTween(tweenHeroCenter)

			//.addIndicators({name: "three-hero-center"})

			.addTo(this.controller);



		var sceneThreeHeroLeft = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})

			//.setPin(".js-three-section")

			.setTween(tweenHeroLeft)

			//.addIndicators({name: "three-hero-left"})

			.addTo(this.controller);



		var sceneThreeHeroRight = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})

			//.setPin(".js-three-section")

			.setTween(tweenHeroRight)

			//.addIndicators({name: "three-hero-right"})

			.addTo(this.controller);

	},

	

	animFour: function () {

		var fourHeight = 7400;

		var story = document.getElementsByClassName('js-four-story');

		var img1 = document.getElementsByClassName('js-four-img-1');

		var cloud1 = document.getElementsByClassName('js-four-cloud-1');

		var cloud2 = document.getElementsByClassName('js-four-cloud-2');

		var img2 = document.getElementsByClassName('js-four-img-2');

		var title = document.getElementsByClassName('js-four-title');

		var text1 = document.getElementsByClassName('js-four-text-1');

		var text2 = document.getElementsByClassName('js-four-text-2');

		var subtitle = document.getElementsByClassName('js-four-subtitle');

		var contain1 = document.getElementsByClassName('js-four-contain-1');

		var contain2 = document.getElementsByClassName('js-four-contain-2');

		var contain3 = document.getElementsByClassName('js-four-contain-3');

		var planet1 = document.getElementsByClassName('js-four-planet-1');

		var planet2 = document.getElementsByClassName('js-four-planet-2');

		var planet3 = document.getElementsByClassName('js-four-planet-3');

		

		$('.js-four-subtitle p').each(function(){

			var str = $(this).text();

			var newStr = str.replace(/([^\x00-\x80]|\w|\.|,)/g, "<span class='letter'>$&</span>");

			$(this).html(newStr);

		});





		var tweenStory = null;

		tweenStory = gsap.timeline()

			.to(story, {duration: 1, opacity: 1, y: '0%', scale: 1});

			//.to(story, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});

			

		// Создание анимаций для облаков

		var tweenCloud1 = null;

		tweenCloud1 = gsap.timeline();

		tweenCloud1.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});



		var tweenCloud1Move = null;

		tweenCloud1Move = gsap.timeline();

		tweenCloud1Move.to(cloud1, {duration: 1, opacity: 1, x: '10%', y: '20%', scale: 1});

		var tweenCloud1Out = null;

		tweenCloud1Out = gsap.timeline();

		tweenCloud1Out.to(cloud1, {duration: 1, opacity: 0, x: '10%', y: '-100%', scale: 1});



		var tweenCloud2 = null;

		tweenCloud2 = gsap.timeline();

		tweenCloud2.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});

		var tweenCloud2Move = null;

		tweenCloud2Move = gsap.timeline();

		tweenCloud2Move.to(cloud2, {duration: 1, opacity: 1, x: '-10%', y: '-20%', scale: 1});

		var tweenCloud2Out = null;

		tweenCloud2Out = gsap.timeline();

		tweenCloud2Out.to(cloud2, {duration: 1, opacity: 0, x: '0%', y: '-100%', scale: 0.8});



		// Создание анимаций для изображений

		var tweenImg1 = null;

		tweenImg1 = gsap.timeline();

		tweenImg1.to(img1, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenImg1Out = null;

		tweenImg1Out = gsap.timeline();

		tweenImg1Out.to(img1, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});



		var tweenImg2 = null;

		tweenImg2 = gsap.timeline();

		tweenImg2.to(img2, {duration: 0.5, opacity: 1, y: '0%', scale: 1});

		var tweenImg2Out = null;

		tweenImg2Out = gsap.timeline();

		tweenImg2Out.to(img2, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});



		// Создание анимаций для текстов и заголовков

		var tweenTitle = null;

		tweenTitle = gsap.timeline();

		tweenTitle.to(title, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenTitleOut = null;

		tweenTitleOut = gsap.timeline();

		tweenTitleOut.to(title, {duration: 1, opacity: 0, y: '-100%', scale: 1});



		var tweenText1 = null;

		tweenText1 = gsap.timeline();

		tweenText1.to(text1, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenText1Out = null;

		tweenText1Out = gsap.timeline();

		tweenText1Out.to(text1, {duration: 1, opacity: 0, y: '-100%', scale: 1});



		var tweenText2 = null;

		tweenText2 = gsap.timeline();

		tweenText2.to(text2, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenText2Out = null;

		tweenText2Out = gsap.timeline();

		tweenText2Out.to(text2, {duration: 1, opacity: 0, y: '-100%', scale: 1});



		var tweenSubtitleOut = null;

		tweenSubtitleOut = gsap.timeline();

		tweenSubtitleOut.to(subtitle, {duration: 1, opacity: 0.2, y: '0%', scale: 1});



		// Создание анимаций для контейнеров

		var tweenContain1Out = null;

		tweenContain1Out = gsap.timeline();

		tweenContain1Out.to(contain1, {duration: 0.1, display: 'none'});

		var tweenContain2Out = null;

		tweenContain2Out = gsap.timeline();

		tweenContain2Out.to(contain2, {duration: 0.1, display: 'none'});

		var tweenContain3Out = null;

		tweenContain3Out = gsap.timeline();

		tweenContain3Out.to(contain3, {duration: 0.1, position: 'absolute'});



		// Создание анимаций для планет

		var tweenPlanet1 = null;

		tweenPlanet1 = gsap.timeline();

		tweenPlanet1.to(planet1, {duration: 1, opacity: 1, y: '0%'});

		var tweenPlanet1Out = null;

		tweenPlanet1Out = gsap.timeline();

		tweenPlanet1Out.to(planet1, {duration: 1, opacity: 0, y: '-120%'});

		var tweenPlanet1Out2 = null;

		tweenPlanet1Out2 = gsap.timeline();

		tweenPlanet1Out2.to(planet1, {duration: 1, opacity: 0, y: '-240%'});



		var tweenPlanet2 = null;

		tweenPlanet2 = gsap.timeline();

		tweenPlanet2.to(planet2, {duration: 1, opacity: 1, y: '0%'});

		var tweenPlanet2Out = null;

		tweenPlanet2Out = gsap.timeline();

		tweenPlanet2Out.to(planet2, {duration: 1, opacity: 0, y: '-120%'});



		var tweenPlanet3 = null;

		tweenPlanet3 = gsap.timeline();

		tweenPlanet3.to(planet3, {duration: 1, opacity: 1, y: '0%'});



		//var tweenPlanet3Out = new TimelineMax()

		//	.to(planet3, 1, {opacity: '0.5', transform: 'translateY(-100%)'});



		// Animation for each letter

		// Создание таймлайна с помощью GSAP 3

		var tweenLetters = null;

		tweenLetters = gsap.timeline();



		// Применение анимации к каждой букве с задержкой

		tweenLetters.to('.js-four-subtitle .letter', {

			duration: 10, // продолжительность анимации

			opacity: 1,   // конечное значение прозрачности

			stagger: 0.1  // задержка между стартами анимации каждой буквы

		});



		var sceneFour = null;

		sceneFour = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: (fourHeight * 1), offset: 0, triggerHook: 0})

			.setPin(".js-four-section")

			//.addIndicators({name: "four"})

			.addTo(this.controller);



		//?------------------------------------



		var sceneFourTrigger1 = null;

		sceneFourTrigger1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 1030, triggerHook: 0})

			//.setTween(tweenStory)

			//.addIndicators({name: "four-trigger-1"})

			.addTo(this.controller);



		var sceneFourTrigger2 = null;

		sceneFourTrigger2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 2450, triggerHook: 0})

			//.addIndicators({name: "four-trigger-2"})

			.addTo(this.controller);



		var sceneFourTrigger3 = null;

		sceneFourTrigger3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 3810, triggerHook: 0})

			//.addIndicators({name: "four-trigger-3"})

			.addTo(this.controller);



		var sceneFourTrigger4 = null;

		sceneFourTrigger4 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 5090, triggerHook: 0})

			//.addIndicators({name: "four-trigger-4"})

			.addTo(this.controller);



		var sceneFourTrigger5 = null;

		sceneFourTrigger5 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 6210, triggerHook: 0})

			//.addIndicators({name: "four-trigger-5"})

			.addTo(this.controller);



		var sceneFourTrigger6 = null;

		sceneFourTrigger6 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 7330, triggerHook: 0})

			//.addIndicators({name: "four-trigger-6"})

			.addTo(this.controller);



		//?------------------------------------

		

		var sceneFourStory = null;

		sceneFourStory = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 0, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenStory)

			//.addIndicators({name: "four-story"})

			.addTo(this.controller);



		var sceneFourCloud1 = null;

		sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 350, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenCloud1)

			//.addIndicators({name: "four-cloud-1"})

			.addTo(this.controller);



		var sceneFourCloud1Move = null;

		sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 2000, offset: 1350, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenCloud1Move)

			//.addIndicators({name: "four-cloud-1-move"})

			.addTo(this.controller);

		

		var sceneFourImg1 = null;

		sceneFourImg1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 300, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenImg1)

			//.addIndicators({name: "four-img-1"})

			.addTo(this.controller);



		var sceneFourTitle = null;

		sceneFourTitle = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 600, triggerHook: 0.7})

			.setTween(tweenTitle)

			//.addIndicators({name: "four-title"})

			.addTo(this.controller);



		var sceneFourText1 = null;

		sceneFourText1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 900, triggerHook: 0.7})

			.setTween(tweenText1)

			//.addIndicators({name: "four-text-1"})

			.addTo(this.controller);

		

		var sceneFourImg1Out = null;

		sceneFourImg1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1800, triggerHook: 0.7})

			.setTween(tweenImg1Out)

			//.addIndicators({name: "four-img-1-out"})

			.addTo(this.controller);



		var sceneFourTitleOut = null;

		sceneFourTitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1900, triggerHook: 0.7})

			.setTween(tweenTitleOut)

			//.addIndicators({name: "four-title-out"})

			.addTo(this.controller);



		var sceneFourText1Out = null;

		sceneFourText1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1950, triggerHook: 0.7})

			.setTween(tweenText1Out)

			//.addIndicators({name: "four-text-1-out"})

			.addTo(this.controller);

		

		var sceneFourContain1Out = null;

		sceneFourContain1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2100, triggerHook: 0.7})

			.setTween(tweenContain1Out)

			//.addIndicators({name: "four-contain-1-out"})

			.addTo(this.controller);



		var sceneFourImg2 = null;

		sceneFourImg2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 2200, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenImg2)

			//.addIndicators({name: "four-img-2"})

			.addTo(this.controller);



		var sceneFourText2 = null;

		sceneFourText2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 2800, triggerHook: 0.7})

			.setTween(tweenText2)

			//.addIndicators({name: "four-text-2"})

			.addTo(this.controller);



		var sceneFourImg2Out = null;

		sceneFourImg2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3300, triggerHook: 0.7})

			.setTween(tweenImg2Out)

			//.addIndicators({name: "four-img-2-out"})

			.addTo(this.controller);



		var sceneFourText2Out = null;

		sceneFourText2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3450, triggerHook: 0.7})

			.setTween(tweenText2Out)

			//.addIndicators({name: "four-text-2-out"})

			.addTo(this.controller);



		var sceneFourCloud1Out = null;

		sceneFourCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 3350, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenCloud1Out)

			//.addIndicators({name: "four-cloud-1-out"})

			.addTo(this.controller);



		var sceneFourContain2Out = null;

		sceneFourContain2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 3700, triggerHook: 0.7})

			.setTween(tweenContain2Out)

			//.addIndicators({name: "four-contain-2-out"})

			.addTo(this.controller);



		var sceneFourCloud2 = null;

		sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 3800, triggerHook: 0.7})

			.setTween(tweenCloud2)

			//.addIndicators({name: "four-cloud-2"})

			.addTo(this.controller);



		var sceneFourCloud2Move = null;

		sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4300, triggerHook: 0.7})

			.setTween(tweenCloud2Move)

			//.addIndicators({name: "four-cloud-2-move"})

			.addTo(this.controller);



		var sceneFourLetters = null;

		sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 3700, triggerHook: 0.9})

			.setTween(tweenLetters)

			//.addIndicators({name: "four-letters"})

			.addTo(this.controller);

		

		var sceneFourSubtitleOut = null;

		sceneFourSubtitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 4700, triggerHook: 0.7})

			.setTween(tweenSubtitleOut)

			//.addIndicators({name: "four-subtitle-out"})

			.addTo(this.controller);

		

		var sceneFourCloud2Out = null;

		sceneFourCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4700, triggerHook: 0.7})

			.setTween(tweenCloud2Out)

			//.addIndicators({name: "four-cloud-2-out"})

			.addTo(this.controller);



		var sceneFourContain3Out = null;

		sceneFourContain3Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 5000, triggerHook: 0.7})

			.setTween(tweenContain3Out)

			//.addIndicators({name: "four-contain-3-out"})

			.addTo(this.controller);



		var sceneFourPlanet1 = null;

		sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 4900, triggerHook: 0.7})

			.setTween(tweenPlanet1)

			//.addIndicators({name: "four-planet-1"})

			.addTo(this.controller);



		var sceneFourPlanet1Out = null;

		sceneFourPlanet1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 5900, triggerHook: 0.7})

			.setTween(tweenPlanet1Out)

			//.addIndicators({name: "four-planet-1-out"})

			.addTo(this.controller);



		var sceneFourPlanet2 = null;

		sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 5900, triggerHook: 0.7})

			.setTween(tweenPlanet2)

			//.addIndicators({name: "four-planet-2"})

			.addTo(this.controller);



		var sceneFourPlanet1Out2 = null;

		sceneFourPlanet1Out2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})

			.setTween(tweenPlanet1Out2)

			//.addIndicators({name: "four-planet-1-out-2"})

			.addTo(this.controller);



		var sceneFourPlanet2Out = null;

		sceneFourPlanet2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})

			.setTween(tweenPlanet2Out)

			//.addIndicators({name: "four-planet-2-out"})

			.addTo(this.controller);



		var sceneFourPlanet3 = null;

		sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 6900, triggerHook: 0.7})

			.setTween(tweenPlanet3)

			//.addIndicators({name: "four-planet-3"})

			.addTo(this.controller);

	},



	animFourXs: function () {

		//var fourHeight = 7400;

		var cloud1 = document.getElementsByClassName('js-four-cloud-1');

		var cloud2 = document.getElementsByClassName('js-four-cloud-2');

		

		var planet1 = $('.js-four-planet-1 .four-section__planet-img');

		var planet2 = $('.js-four-planet-2 .four-section__planet-img');

		var planet3 = $('.js-four-planet-3 .four-section__planet-img');

		

		$('.js-four-subtitle p').each(function(){

			var str = $(this).text();

			var newStr = str.replace(/([^\x00-\x80]|\w|\.|,)/g, "<span class='letter'>$&</span>");

			$(this).html(newStr);

		});

			

		// Создание анимаций для облаков

		var tweenCloud1 = null;

		tweenCloud1 = gsap.timeline();

		tweenCloud1.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});

		var tweenCloud1Move = null

		tweenCloud1Move = gsap.timeline();

		tweenCloud1Move.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '-40%', scale: 1});



		var tweenCloud2 = null;

		tweenCloud2 = gsap.timeline();

		tweenCloud2.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});

		var tweenCloud2Move = null;

		tweenCloud2Move = gsap.timeline();

		tweenCloud2Move.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '-40%', scale: 1});



		// Создание анимаций для планет

		var tweenPlanet1 = null;

		tweenPlanet1 = gsap.timeline();

		tweenPlanet1.to(planet1, {duration: 1, opacity: 1, y: '0%'});

		var tweenPlanet1Out = null;

		tweenPlanet1Out = gsap.timeline();

		tweenPlanet1Out.to(planet1, {duration: 1, opacity: 0, y: '-100px', scale: 1});



		var tweenPlanet2 = null;

		tweenPlanet2 = gsap.timeline();

		tweenPlanet2.to(planet2, {duration: 1, opacity: 1, y: '0%'});

		var tweenPlanet2Out = null;

		tweenPlanet2Out = gsap.timeline();

		tweenPlanet2Out.to(planet2, {duration: 1, opacity: 0, y: '-100px', scale: 1});



		var tweenPlanet3 = null;

		tweenPlanet3 = gsap.timeline();

		tweenPlanet3.to(planet3, {duration: 1, opacity: 1, y: '0%'});

		var tweenPlanet3Out = null;

		tweenPlanet3Out = gsap.timeline();

		tweenPlanet3Out.to(planet3, {duration: 1, opacity: 0, y: '-100px', scale: 1});



		// Animation for each letter

		// Создание таймлайна с помощью GSAP 3

		var tweenLetters = null;

		tweenLetters = gsap.timeline();



		// Применение анимации к каждой букве с задержкой

		tweenLetters.to('.js-four-subtitle .letter', {

			duration: 10, // продолжительность анимации

			opacity: 1,   // конечное значение прозрачности

			stagger: 0.1  // задержка между стартами анимации каждой буквы

		});



		var sceneFourCloud1 = null;

		sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 200, offset: 0, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenCloud1)

			//.addIndicators({name: "four-cloud-1"})

			.addTo(this.controller);



		var sceneFourCloud1Move = null;

		sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 300, triggerHook: 0.7})

			//.setPin(".js-four-section")

			.setTween(tweenCloud1Move)

			//.addIndicators({name: "four-cloud-1-move"})

			.addTo(this.controller);



		var sceneFourCloud2 = null;

		sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 200, offset: 1100, triggerHook: 0.7})

			.setTween(tweenCloud2)

			//.addIndicators({name: "four-cloud-2"})

			.addTo(this.controller);



		var sceneFourCloud2Move = null;

		sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 1300, triggerHook: 0.7})

			.setTween(tweenCloud2Move)

			//.addIndicators({name: "four-cloud-2-move"})

			.addTo(this.controller);



		var sceneFourLetters = null;

		sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 1800, triggerHook: 0.9})

			.setTween(tweenLetters)

			//.addIndicators({name: "four-letters"})

			.addTo(this.controller);



		var sceneFourPlanet1 = null;

		sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 2200, triggerHook: 0.7})

			.setTween(tweenPlanet1)

			//.addIndicators({name: "four-planet-1"})

			.addTo(this.controller);



		var sceneFourPlanet2 = null;

		sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 2600, triggerHook: 0.7})

			.setTween(tweenPlanet2)

			//.addIndicators({name: "four-planet-2"})

			.addTo(this.controller);



		var sceneFourPlanet3 = null;

		sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3100, triggerHook: 0.7})

			.setTween(tweenPlanet3)

			//.addIndicators({name: "four-planet-3"})

			.addTo(this.controller);

	},



	animFive: function () {

		var fiveHeight = this.wh(); //1250;

		var fiveTitle = document.getElementsByClassName('js-five-title');

		var fiveText = document.getElementsByClassName('js-five-text');

		var fiveImg = document.getElementsByClassName('js-five-img');

		var fiveCloud1 = document.getElementsByClassName('js-five-cloud-1');

		var fiveCloud2 = document.getElementsByClassName('js-five-cloud-2');

		var fiveCloud3 = document.getElementsByClassName('js-five-cloud-3');

		var fiveCloud4 = document.getElementsByClassName('js-five-cloud-4');

		var fiveCloud5 = document.getElementsByClassName('js-five-cloud-5');

		



		/* var tweenTitle = new TimelineMax()

			.to(fiveTitle, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});

		var tweenText = new TimelineMax()

			.to(fiveText, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});

		var tweenImg = new TimelineMax()

			.to(fiveImg, 1, { transform: 'translateY(0) scale(1)'}); */

		// Создание таймлайна и анимации для заголовка

		var tweenTitle = gsap.timeline();

		tweenTitle.to(fiveTitle, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenTitleOut = gsap.timeline();

		tweenTitleOut.to(fiveTitle, {duration: 1, opacity: 0, y: '-50%', scale: 1});



		// Создание таймлайна и анимации для текста

		var tweenText = gsap.timeline();

		tweenText.to(fiveText, {duration: 1, opacity: 1, y: '0%', scale: 1});

		var tweenTextOut = gsap.timeline();

		tweenTextOut.to(fiveText, {duration: 1, opacity: 0, y: '-50%', scale: 1});



		// Создание таймлайна и анимации для изображения

		var tweenImg = gsap.timeline();

		tweenImg.to(fiveImg, {duration: 1, y: '0%', scale: 1});



		var tweenImgOut = gsap.timeline();

		tweenImgOut.to(fiveImg, {duration: 1, y: '10%', scale: 0.9});



		var tweenCloud1 = gsap.timeline();

		tweenCloud1.to(fiveCloud1, {duration: 1, y: '-80%', scale: 1});



		var tweenCloud2 = gsap.timeline();

		tweenCloud2.to(fiveCloud2, {duration: 1, y: '-100%', scale: 1});



		var tweenCloud3 = gsap.timeline();

		tweenCloud3.to(fiveCloud3, {duration: 1, y: '-70%', scale: 1});



		var tweenCloud4 = gsap.timeline();

		tweenCloud4.to(fiveCloud4, {duration: 1, y: '-80%', scale: 1});



		var tweenCloud5 = gsap.timeline();

		tweenCloud5.to(fiveCloud5, {duration: 1, y: '-90%', scale: 1});



		var tweenCloud1Out = gsap.timeline();

		tweenCloud1.to(fiveCloud1, {duration: 1, y: '0%', scale: 1});



		var tweenCloud2Out = gsap.timeline();

		tweenCloud2.to(fiveCloud2, {duration: 1, y: '0%', scale: 1});



		var tweenCloud3Out = gsap.timeline();

		tweenCloud3.to(fiveCloud3, {duration: 1, y: '0%', scale: 1});



		var tweenCloud4Out = gsap.timeline();

		tweenCloud4.to(fiveCloud4, {duration: 1, y: '0%', scale: 1});



		var tweenCloud5Out = gsap.timeline();

		tweenCloud5.to(fiveCloud5, {duration: 1, y: '0%', scale: 1});



		var sceneFiveTrigger = new ScrollMagic.Scene({triggerElement: ".js-five-section-trigger", duration: 30, offset: -450, triggerHook: 0})

			//.setPin(".js-four-section")

			/* .on('leave', function (event) {

				if(uikit.disableTriggers) return;

				// Проверяем, что направление прокрутки вверх

				if (event.scrollDirection === 'REVERSE') {

					uikit.scrollToSection('.js-four-section', 1, -60); // Прокрутка к следующему разделу, если скролим вверх

				}

			}) */

			.on('end', function (event) {

				// Проверяем, что направление прокрутки вниз

				/* if (event.scrollDirection === 'FORWARD') {

					uikit.scrollToSection('.js-five-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз

				} */

			})

			//.addIndicators({name: "five-trigger"})

			.addTo(this.controller);





		var sceneFiveTitle = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenTitle)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud1 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 890, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud1)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud2 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud2)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud3 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud3)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud4 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud4)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud5 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 650, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud5)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveText = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 200, triggerHook: 1})

			//.setPin(".three-section__container")

			.setTween(tweenText)

			//.addIndicators({name: "five-text"})

			.addTo(this.controller);



		var sceneFiveImg = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 1})

			//.setPin(".three-section__container")

			.setTween(tweenImg)

			//.addIndicators({name: "five-img"})

			.addTo(this.controller);



		var sceneFiveCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 950, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud1Out)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud2Out)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud3Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud3Out)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud4Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud4Out)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveCloud5Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud5Out)

			//.addIndicators({name: "five-title"})

			.addTo(this.controller);



		var sceneFiveTitleOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 400, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenTitleOut)

			//.addIndicators({name: "five-title-out"})

			.addTo(this.controller);



		var sceneFiveTextOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 1000, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenTextOut)

			//.addIndicators({name: "five-text-out"})

			.addTo(this.controller);



		var sceneFiveImgOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 400, triggerHook: 1})

			//.setPin(".three-section__container")

			.setTween(tweenImgOut)

			//.addIndicators({name: "five-img-out"})

			.addTo(this.controller);

	},



	animFiveXs: function () {

		var fiveHeight = this.wh(); //1250;

		//var fiveTitle = document.getElementsByClassName('js-five-title');

		//var fiveText = document.getElementsByClassName('js-five-text');

		//var fiveImg = document.getElementsByClassName('js-five-img');

		var fiveCloud1 = document.getElementsByClassName('js-five-cloud-1');

		var fiveCloud2 = document.getElementsByClassName('js-five-cloud-2');

		var fiveCloud3 = document.getElementsByClassName('js-five-cloud-3');

		var fiveCloud4 = document.getElementsByClassName('js-five-cloud-4');

		var fiveCloud5 = document.getElementsByClassName('js-five-cloud-5');

		



		/* var tweenTitle = new TimelineMax()

			.to(fiveTitle, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});

		var tweenText = new TimelineMax()

			.to(fiveText, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});

		var tweenImg = new TimelineMax()

			.to(fiveImg, 1, { transform: 'translateY(0) scale(1)'}); */

		// Создание таймлайна и анимации для заголовка

		/* var tweenTitle = gsap.timeline();

		tweenTitle.to(fiveTitle, {duration: 1, opacity: 1, y: '0%', scale: 1}); */

		/* var tweenTitleOut = gsap.timeline();

		tweenTitleOut.to(fiveTitle, {duration: 1, opacity: 0, y: '-50%', scale: 1}); */



		// Создание таймлайна и анимации для текста

		/* var tweenText = gsap.timeline();

		tweenText.to(fiveText, {duration: 1, opacity: 1, y: '0%', scale: 1}); */

		/* var tweenTextOut = gsap.timeline();

		tweenTextOut.to(fiveText, {duration: 1, opacity: 0, y: '-50%', scale: 1}); */



		// Создание таймлайна и анимации для изображения

		/* var tweenImg = gsap.timeline();

		tweenImg.to(fiveImg, {duration: 1, y: '0%', scale: 1}); */



		/* var tweenImgOut = gsap.timeline();

		tweenImgOut.to(fiveImg, {duration: 1, y: '10%', scale: 0.9}); */



		var tweenCloud1 = gsap.timeline();

		tweenCloud1.to(fiveCloud1, {duration: 1, y: '-20px', scale: 1});



		var tweenCloud2 = gsap.timeline();

		tweenCloud2.to(fiveCloud2, {duration: 1, y: '-30px', scale: 1});



		var tweenCloud3 = gsap.timeline();

		tweenCloud3.to(fiveCloud3, {duration: 1, y: '-15px', scale: 1});



		var tweenCloud4 = gsap.timeline();

		tweenCloud4.to(fiveCloud4, {duration: 1, y: '-20px', scale: 1});



		var tweenCloud5 = gsap.timeline();

		tweenCloud5.to(fiveCloud5, {duration: 1, y: '-25px', scale: 1});



		var tweenCloud1Out = gsap.timeline();

		tweenCloud1.to(fiveCloud1, {duration: 1, y: '10px', scale: 1});



		var tweenCloud2Out = gsap.timeline();

		tweenCloud2.to(fiveCloud2, {duration: 1, y: '20px', scale: 1});



		var tweenCloud3Out = gsap.timeline();

		tweenCloud3.to(fiveCloud3, {duration: 1, y: '25px', scale: 1});



		var tweenCloud4Out = gsap.timeline();

		tweenCloud4.to(fiveCloud4, {duration: 1, y: '10px', scale: 1});



		var tweenCloud5Out = gsap.timeline();

		tweenCloud5.to(fiveCloud5, {duration: 1, y: '15px', scale: 1});





		var sceneFiveCloud1 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 600, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud1)

			//.addIndicators({name: "five-cloud-1"})

			.addTo(this.controller);



		var sceneFiveCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 810, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud1Out)

			//.addIndicators({name: "five-cloud-1-out"})

			.addTo(this.controller);	



		var sceneFiveCloud2 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 250, offset: 650, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud2)

			//.addIndicators({name: "five-cloud-2"})

			.addTo(this.controller);



		var sceneFiveCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 330, offset: 920, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud2Out)

			//.addIndicators({name: "five-cloud-2-out"})

			.addTo(this.controller);



		var sceneFiveCloud3 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 300, offset: 700, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud3)

			//.addIndicators({name: "five-cloud-3"})

			.addTo(this.controller);



		var sceneFiveCloud3Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 350, offset: 1020, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud3Out)

			//.addIndicators({name: "five-cloud-3-out"})

			.addTo(this.controller);



		var sceneFiveCloud4 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 250, offset: 650, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud4)

			//.addIndicators({name: "five-cloud-4"})

			.addTo(this.controller);



		var sceneFiveCloud4Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 350, offset: 900, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud4Out)

			//.addIndicators({name: "five-cloud-4-out"})

			.addTo(this.controller);



		var sceneFiveCloud5 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 280, offset: 680, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud5)

			//.addIndicators({name: "five-cloud-5"})

			.addTo(this.controller);



		var sceneFiveCloud5Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 300, offset: 1000, triggerHook: 0.8})

			//.setPin(".three-section__container")

			.setTween(tweenCloud5Out)

			//.addIndicators({name: "five-cloud-5-out"})

			.addTo(this.controller);

	},



	animFooter: function(){

		var footerHeight = 300; //1250;

		//var footerScene = document.getElementsByClassName('js-footer');

		var footerLogo = document.getElementsByClassName('js-footer-logo');

		var footerText = document.getElementsByClassName('js-footer-text');

		var footerHero = document.getElementsByClassName('js-footer-hero');

		var footerScrollUp = document.getElementsByClassName('js-scroll-up');

		//var twoSection = document.getElementsByClassName('js-two-section');

		gsap.set(footerLogo, {opacity: '0', x: '-=50%', y: '+=200'});

		gsap.set(footerText, {opacity: '0', y: '-=200'});

		gsap.set(footerHero, {opacity: '0', x: '+=250'});

		gsap.set(footerScrollUp, {opacity: '0', x: '-=150'});



		var tweenLogo = gsap.timeline();

		tweenLogo.to(footerLogo, {

			duration: 1,

			opacity: 1,

			//clearProps: "transform", // Сбрасывает предыдущие значения transform

			x: '+=0%',

			y: 0

		});

		var tweenText = gsap.timeline()

			.to(footerText, {duration: 1, opacity: 1, y: 0});

		var tweenHero = gsap.timeline()

			.to(footerHero, {duration: 1, opacity: 1, x: 0});

		var tweenScrollUp = gsap.timeline()

			.to(footerScrollUp, {duration: 1, opacity: 1, x: 0});



		var sceneLogo = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 0, triggerHook: 0.6})

			//.setPin(".js-first-section")

			.setTween(tweenLogo)

			//.addIndicators({name: "footer-logo"})

			.addTo(this.controller);



		var sceneText = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 100), offset: 100, triggerHook: 0.6})

			//.setPin(".js-first-section")

			.setTween(tweenText)

			//.addIndicators({name: "footer-text"})

			.addTo(this.controller);



		var sceneHero = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 200), offset: 0, triggerHook: 0.7})

			//.setPin(".js-first-section")

			.setTween(tweenHero)

			//.addIndicators({name: "footer-hero"})

			.addTo(this.controller);



		var sceneScrollUp = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 400), offset: 0, triggerHook: 0.8})

			//.setPin(".js-first-section")

			.setTween(tweenScrollUp)

			//.addIndicators({name: "footer-scroll-up"})

			.addTo(this.controller);

	},

	

	animFooterXs: function(){

		var footerHeight = 300; //1250;

		//var footerScene = document.getElementsByClassName('js-footer');

		var footerLogo = document.getElementsByClassName('js-footer-logo');

		var footerText = document.getElementsByClassName('js-footer-text');

		var footerHero = document.getElementsByClassName('js-footer-hero');

		var footerScrollUp = document.getElementsByClassName('js-scroll-up');

		//var twoSection = document.getElementsByClassName('js-two-section');

		gsap.set(footerLogo, {opacity: '0', x: '-=0%', y: '+=100'});

		gsap.set(footerText, {opacity: '0', y: '-=100'});

		gsap.set(footerHero, {opacity: '0', x: '+=150'});

		gsap.set(footerScrollUp, {opacity: '0', x: '-=50'});



		var tweenLogo = gsap.timeline();

		tweenLogo.to(footerLogo, {

			duration: 1,

			opacity: 1,

			//clearProps: "transform", // Сбрасывает предыдущие значения transform

			x: '+=0%',

			y: 0

		});

		var tweenText = gsap.timeline()

			.to(footerText, {duration: 1, opacity: 1, y: 0});

		var tweenHero = gsap.timeline()

			.to(footerHero, {duration: 1, opacity: 1, x: 0});

		var tweenScrollUp = gsap.timeline()

			.to(footerScrollUp, {duration: 1, opacity: 1, x: 0});



		var sceneLogo = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 200, triggerHook: 1})

			//.setPin(".js-first-section")

			.setTween(tweenLogo)

			//.addIndicators({name: "footer-logo"})

			.addTo(this.controller);



		var sceneText = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 0), offset: 300, triggerHook: 1})

			//.setPin(".js-first-section")

			.setTween(tweenText)

			//.addIndicators({name: "footer-text"})

			.addTo(this.controller);



		var sceneHero = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 0), offset: 0, triggerHook: 0.7})

			//.setPin(".js-first-section")

			.setTween(tweenHero)

			//.addIndicators({name: "footer-hero"})

			.addTo(this.controller);



		var sceneScrollUp = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 0), offset: 0, triggerHook: 0.8})

			//.setPin(".js-first-section")

			.setTween(tweenScrollUp)

			//.addIndicators({name: "footer-scroll-up"})

			.addTo(this.controller);

	},



	scrollUp: function () {

		$('.js-scroll-up').click(function(){

			uikit.disableTriggers = true;

			uikit.scrollToSection('.js-first-section', 3, uikit.wh() * -1);

			

			setTimeout(function () {

				uikit.currentSlide = 0;

				uikit.disableTriggers = false;

			},1100);

			return false;

		});

	},



	setViewPort: function(){

		

		this.wwInit = this.wwOrigin();

		this.whInit = this.whOrigin();



		if(this.wwInit <= this.xs && this.isTouch()){

			$('head meta[name=viewport]').remove();

			//$('meta[name=viewport]').attr('content', 'width=880, initial-scale=0.7, maximum-scale=0.7');

			$(document).bind("mobileinit", function() 

			{ 

				if (navigator.userAgent.toLowerCase().indexOf("android") != -1) 

				{ 

					$.mobile.defaultPageTransition = 'none'; 

					$.mobile.defaultDialogTransition = 'none'; 

				} 

				else if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) 

				{ 

					$.mobile.allowCrossDomainPages = true; 

					$.support.cors = true; 

				} 

   

				$('<meta>', {

					name: 'viewport',

					content: 'width=880, initial-scale=0.7, maximum-scale=0.7'

				}).appendTo('head');

   

			});

			



			//window.innerWidth = 880;

			//document.documentElement.clientWidth = 880;



			$('body').addClass('is-xs');

			$('.js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').addClass('is-xs');



			$('.js-first-section').height(this.whInit);



			



		}else if(this.wwInit <= this.sm2 && this.isTouch()){

			//$('meta[name=viewport]').attr('content', 'width=980, initial-scale=0.7, maximum-scale=1, user-scalable=no');

			$('<meta>', {

				name: 'viewport',

				content: 'width=device-width, initial-scale=0.7, maximum-scale=0.7'

			}).appendTo('head');



			$('body').addClass('is-sm');

			$('.js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').addClass('is-sm');

		}else{

			$('<meta>', {

				name: 'viewport',

				content: 'width=device-width, initial-scale=1, maximum-scale=1'

			}).appendTo('head');

		}

	},



	debugData: function(){

		$('.js-debug-data').html(

			'<p>wwInit: '+this.wwInit+'</p>'+

			'<p>whInit: '+this.whInit+'</p>'+

			'<p>ww: '+this.ww()+'</p>'+

			'<p>wwOrigin: '+this.wwOrigin()+'</p>'+

			'<p>wh: '+this.wh()+'</p>'+

			'<p>whOrigin: '+this.whOrigin()+'</p>'+

			'<p>scale: '+this.scale()+'</p>'+

			'<p>resizing: '+this._resizing+'</p>'

		);

	},



	setScaleCss: function(){

		var scale = this.scale();

		let scaleProc = 100 - ((1 / scale) * 100);

	

		if (scale > 1 && scale <= 2) {

			

			console.log('+--'+scaleProc);

			$('<style>:root {--scale: ' + scaleProc + '%;}</style>').appendTo('head');

			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');



		}else if(uikit.ww() <= uikit.md && uikit.ww() > uikit.sm){

			scale = 1.25;

			//console.log('--'+scaleProc);

			$('<style>:root {--scale: ' + scaleProc + '%;}</style>').appendTo('head');

			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');

		}else{

			$('<style>:root {--scale: 0%;}</style>').appendTo('head');

		}



		if(uikit.wh() < 600){

			

			$('<style>:root {--scale: -0%;}</style>').appendTo('head');

			scale = 1.5;

			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');

		}

	},



    mainInit: function () {

		var clrTimeOut2;



        this.dottedAnim();

        this.animFirst();

        this.animThree();

		if(this.wwInit > this.sm2){

			this.animFour();

			this.animFive();

			this.animFooter();

		}

		

		if(this.wwInit <= this.xs){

			this.animFourXs();

			this.animFiveXs();

			this.animFooterXs();

		}

		this.scrollUp();

		//this.debugData();



		if(this.wwOrigin() > 1023 && this.whOrigin() < this.wwOrigin()){

			this.disableScroll();

		}



		//clearTimeout(clrTimeOut2);

		//console.log(uikit._resizing+'!');

    	clrTimeOut2 = setTimeout(() => {

			this._resizing = false;

			//console.log(uikit._resizing+'!?');

		}, 1000);

		//this.setMassCoordinSteps();

    },



	init: function(reload = false){

		this._resizing = true;

		this.setViewPort();



		var maxHeight = 178; // Максимальная высота изображения в пикселях

		var images = $('img');

		var loadedImages = 0;



		function updateProgress() {

			var totalImages = images.length;

			var pageLoadPercentage = (loadedImages / totalImages) * 100;

			var heightInPixels = (pageLoadPercentage / 100) * maxHeight;

			$('.js-loader-img').css('max-height', heightInPixels + 'px');

		}



		images.each(function() {

			if (this.complete) {

				loadedImages++;

				updateProgress();

			} else {

				$(this).on('load', function() {

					loadedImages++;

					updateProgress();

				}).on('error', function() {

					loadedImages++;

					updateProgress();

				});

			}

		});



		if(!reload){

			$(window).on('load', function() {

				//Принудительная прокрутка вверх

				uikit.disableTriggers = true;

				$('html, body').animate({scrollTop: 0}, 'fast');



				if(uikit.wwOrigin() > 1023 && uikit.whOrigin() < uikit.wwOrigin()){

					uikit.disableScroll();

				}else{

					uikit.enableScroll();

				}



				uikit.setScaleCss();

				

				//uikit.scrollToSection('.js-first-section',0);

				// Все элементы страницы полностью загружены



				setTimeout(()=>{

					

					$('.js-loader').fadeOut(400);

					$('.js-first-section').addClass('is-first-anim');

					$('.js-two-section').addClass('is-first-anim');

					uikit.mainInit();

				}, 200);



				setTimeout(()=>{

					$('.js-first-section').removeClass('is-first-anim');

					$('.js-two-section').removeClass('is-first-anim');

					$('body, html').removeClass('is-overflow');

					uikit.disableTriggers = false;

				}, 4200);

			});

		}else{

			

			// инициализация при ресайзе

			this.controller.destroy(true);

			this.controller = null;

			this.controller = new ScrollMagic.Controller();



			//uikit.disableTriggers = true;

			this.currentSlide = 0;

			$('html, body').animate({scrollTop: 0}, 'fast');



			if(this.wwOrigin() > 1023 && this.whOrigin() < this.wwOrigin()){

				this.disableScroll();

			}else{

				this.enableScroll();

			}



			this.setScaleCss();

				

			//uikit.scrollToSection('.js-first-section',0);

			// Все элементы страницы полностью загружены



			setTimeout(()=>{

				//$('.js-loader').fadeOut(400);

				//$('.js-first-section').addClass('is-first-anim');

				//$('.js-two-section').addClass('is-first-anim');

				this.mainInit();

			}, 500);



			/* setTimeout(()=>{

				$('.js-first-section').removeClass('is-first-anim');

				$('.js-two-section').removeClass('is-first-anim');

				$('body, html').removeClass('is-overflow');

				uikit.disableTriggers = false;

			}, 4200); */

		}

	}

};



$(document).ready(function() {

	uikit.init();

});





/* var clrTimeOut;

$(window).on('load', function (e) {

    clearTimeout(clrTimeOut);

    clrTimeOut = setTimeout(function () {

        

    }, 200);

}); */



/* $(window).resize(function () {

    clearTimeout(clrTimeOut);

    clrTimeOut = setTimeout(function () {

		//if(uikit.ww() 

		if(uikit._resizing === true){ 

			uikit._resizing = false;

			return;

		}

	

		$('head meta[name=viewport]').remove();

		$('body, .js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').removeClass('is-xs').removeClass('is-sm');



        uikit.init(true);

    }, 1000);



}); */



var lastOrientation = window.orientation;



$(window).on('orientationchange', function() {

    var currentOrientation = window.orientation;

    if (currentOrientation !== lastOrientation) {

        lastOrientation = currentOrientation;

        setTimeout(() => {

            $('head meta[name=viewport]').remove();

            $('body, .js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').removeClass('is-xs').removeClass('is-sm');

            uikit.init(true);

        }, 1000);

    }

});






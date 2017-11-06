if (self.CavalryLogger) { CavalryLogger.start_js(["uFK0k"]); }

__d("PixelRatioConst",[],(function a(b,c,d,e,f,g){f.exports={cookieName:"dpr"}}),null);
__d("FBJSON",[],(function a(b,c,d,e,f,g){f.exports={parse:JSON.parse,stringify:JSON.stringify}}),null);
__d('BGSyncConst',[],(function a(b,c,d,e,f,g){f.exports={msgTag:{requestID:'request-bg-sync-id',requestUpload:'request-bg-sync-upload',removeRequest:'remove-cached-request',queueRequest:'queue-request'},reqTag:{banzai:'banzai'}}}),null);
__d('CurrentUser',['Cookie','CurrentUserInitialData'],(function a(b,c,d,e,f,g){var h={getID:function i(){return c('CurrentUserInitialData').USER_ID},getAccountID:function i(){return c('CurrentUserInitialData').ACCOUNT_ID},getWorkUserID:function i(){return c('CurrentUserInitialData').WORK_USER_ID},getName:function i(){return c('CurrentUserInitialData').NAME},getShortName:function i(){return c('CurrentUserInitialData').SHORT_NAME},isLoggedIn:function i(){return c('CurrentUserInitialData').USER_ID&&c('CurrentUserInitialData').USER_ID!=='0'},isLoggedInNow:function i(){if(!h.isLoggedIn())return false;if(c('CurrentUserInitialData').IS_INTERN_SITE)return true;if(c('CurrentUserInitialData').IS_WORK_USER)return true;if(c('CurrentUserInitialData').ORIGINAL_USER_ID)return c('CurrentUserInitialData').ORIGINAL_USER_ID===c('Cookie').get('c_user');return c('CurrentUserInitialData').USER_ID===c('Cookie').get('c_user')},isEmployee:function i(){return !!c('CurrentUserInitialData').IS_EMPLOYEE},hasWorkUser:function i(){return !!c('CurrentUserInitialData').HAS_WORK_USER},isWorkUser:function i(){return !!c('CurrentUserInitialData').IS_WORK_USER},isGray:function i(){return !!c('CurrentUserInitialData').IS_GRAY},isUnderage:function i(){return !!c('CurrentUserInitialData').IS_UNDERAGE}};f.exports=h}),18);
__d('Miny',[],(function a(b,c,d,e,f,g){var h='Miny1',i='wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split(''),j={encode:function k(l){if(/^$|[~\\]|__proto__/.test(l))return l;var m=l.match(/\w+|\W+/g),n,o=Object.create(null);for(n=0;n<m.length;n++)o[m[n]]=(o[m[n]]||0)+1;var p=Object.keys(o);p.sort(function(s,t){return o[t]-o[s]});for(n=0;n<p.length;n++){var q=(n-n%32)/32;o[p[n]]=q?q.toString(32)+i[n%32]:i[n%32]}var r='';for(n=0;n<m.length;n++)r+=o[m[n]];p.unshift(h,p.length);p.push(r);return p.join('~')}};f.exports=j}),null);
__d('QueryString',[],(function a(b,c,d,e,f,g){function h(l){var m=[];Object.keys(l).sort().forEach(function(n){var o=l[n];if(typeof o==='undefined')return;if(o===null){m.push(n);return}m.push(encodeURIComponent(n)+'='+encodeURIComponent(o))});return m.join('&')}function i(l,m){var n={};if(l==='')return n;var o=l.split('&');for(var p=0;p<o.length;p++){var q=o[p].split('=',2),r=decodeURIComponent(q[0]);if(m&&Object.prototype.hasOwnProperty.call(n,r))throw new URIError('Duplicate key: '+r);n[r]=q.length===2?decodeURIComponent(q[1]):null}return n}function j(l,m){return l+(l.indexOf('?')!==-1?'&':'?')+(typeof m==='string'?m:k.encode(m))}var k={encode:h,decode:i,appendToUrl:j};f.exports=k}),null);
__d("ClientServiceWorkerMessage",[],(function a(b,c,d,e,f,g){function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new self.MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2])};f.exports=h}),null);
__d('FbtResultBase',['cx','ErrorUtils'],(function a(b,c,d,e,f,g,h){function i(k){}function j(k){'use strict';this.$FbtResultBase1=k;this.$FbtResultBase2=null}j.prototype.flattenToArray=function(){'use strict';return j.flattenToArray(this.$FbtResultBase1)};j.prototype.getContents=function(){'use strict';return this.$FbtResultBase1};j.prototype.toString=function(){'use strict';if(this.$FbtResultBase2!==null)return this.$FbtResultBase2;var k='',l=this.flattenToArray();for(var m=0;m<l.length;++m){var n=l[m];if(typeof n==='string'||n instanceof j){k+=n}else{var o=new Error('Converting to a string will drop content data');c('ErrorUtils').reportError(o,true)}}if(!Object.isFrozen(this))this.$FbtResultBase2=k;return k};j.prototype.toJSON=function(){'use strict';return this.toString()};j.flattenToArray=function(k){'use strict';var l=[];for(var m=0;m<k.length;++m){var n=k[m];if(Array.isArray(n)){l.push.apply(l,j.flattenToArray(n))}else if(n instanceof j){l.push.apply(l,n.flattenToArray())}else l.push(n);}return l};['replace','split','toLowerCase','toUpperCase','indexOf','charAt','charCodeAt','substr','substring','trim','lastIndexOf','search','match','slice','codePointAt','endsWith','includes','localeCompare','normalize','repeat','startsWith','toLocaleLowerCase','toLocaleUpperCase','trimLeft','trimRight','link','anchor','fontcolor','fontsize','big','blink','bold','fixed','italics','small','strike','sub','sup','contains'].forEach(function(k){j.prototype[k]=function(){'use strict';i(k);return this.toString()[k].apply(this,arguments)}}.bind(this));f.exports=j}),18);
__d("isScalar",[],(function a(b,c,d,e,f,g){function h(i){return /string|number|boolean/.test(typeof i)}f.exports=h}),null);
__d('DOM',['$','DOMQuery','ErrorUtils','Event','FbtResultBase','HTML','UserAgent_DEPRECATED','createArrayFromMixed','isNode','isScalar','isTextNode'],(function a(b,c,d,e,f,g){var h={create:function k(l,m,n){var o=document.createElement(l);if(m)h.setAttributes(o,m);if(n!=null)h.setContent(o,n);return o},setAttributes:function k(l,m){if(m.type)l.type=m.type;for(var n in m){var o=m[n],p=/^on/i.test(n);if(n=='type'){continue}else if(n=='style'){if(typeof o=='string'){l.style.cssText=o}else Object.assign(l.style,o);}else if(p){c('Event').listen(l,n.substr(2),o)}else if(n in l){l[n]=o}else if(l.setAttribute)l.setAttribute(n,o);}},prependContent:function k(l,m){if(!l)throw new Error('DOM.prependContent: reference element is not a node');return j(m,l,function(n){l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n)})},insertAfter:function k(l,m){if(!l||!l.parentNode)throw new Error('DOM.insertAfter: reference element does not '+'have a parent.');var n=l.parentNode;return j(m,n,function(o){l.nextSibling?n.insertBefore(o,l.nextSibling):n.appendChild(o)})},insertBefore:function k(l,m){if(!l||!l.parentNode)throw new Error('DOM.insertBefore: reference element does not have a parent.');var n=l.parentNode;return j(m,n,function(o){n.insertBefore(o,l)})},setContent:function k(l,m){if(!l)throw new Error('DOM.setContent: reference element is not a node.');while(l.firstChild)i(l.firstChild);return h.appendContent(l,m)},appendContent:function k(l,m){if(!l)throw new Error('DOM.appendContent: reference element is not a node.');return j(m,l,function(n){l.appendChild(n)})},replace:function k(l,m){if(!l||!l.parentNode)throw new Error('DOM.replace: reference element does not '+'have a parent.');var n=l.parentNode;return j(m,n,function(o){n.replaceChild(o,l)})},remove:function k(l){i(c('$')(l))},empty:function k(l){l=c('$')(l);while(l.firstChild)i(l.firstChild);}};Object.assign(h,c('DOMQuery'));function i(k){if(k.parentNode)k.parentNode.removeChild(k);}function j(k,l,m){k=c('HTML').replaceJSONWrapper(k);if(k instanceof c('HTML')&&l.firstChild===null&&-1===k.toString().indexOf('<scr'+'ipt')){var n=c('UserAgent_DEPRECATED').ie();if(!n||n>7&&!c('DOMQuery').isNodeOfType(l,['table','tbody','thead','tfoot','tr','select','fieldset'])){var o=n?'<em style="display:none;">&nbsp;</em>':'';l.innerHTML=o+k;n&&l.removeChild(l.firstChild);return Array.from(l.childNodes)}}else if(c('isTextNode')(l)){l.data=k;return [k]}var p=document.createDocumentFragment(),q,r=[],s=[];k=c('createArrayFromMixed')(k);if(k.length===1&&k[0] instanceof c('FbtResultBase'))k=k[0].getContents();for(var t=0;t<k.length;t++){q=c('HTML').replaceJSONWrapper(k[t]);if(q instanceof c('HTML')){s.push(q.getAction());var u=q.getNodes();for(var v=0;v<u.length;v++){r.push(u[v]);p.appendChild(u[v])}}else if(c('isScalar')(q)||q instanceof c('FbtResultBase')){var w=document.createTextNode(q);r.push(w);p.appendChild(w)}else if(c('isNode')(q)){r.push(q);p.appendChild(q)}}m(p);s.forEach(function(x){x()});return r}f.exports=h}),18);
__d('SharedClientServiceWorkerBackgroundSync',['BGSyncConst','ClientServiceWorkerMessage','DOM','ServiceWorkerBackgroundSyncGK','memoize'],(function a(b,c,d,e,f,g){var h=c('memoize')(function(){var l=new Uint32Array(1);return self.crypto.getRandomValues(l)[0].toString().substring(2,16)});function i(event,l,m){var n=h(),o=event.data&&event.data.data?event.data.data:{},p=l.toString();if(n&&o.param){if(p.indexOf('?')>-1){p+='&'}else p+='?';p=''+p+o.param+'&client_id='+n}if(m)m(p,o);}function j(l,m,n,o){new (c('ClientServiceWorkerMessage'))('bgSync',{clientID:h(),data:n,msgTag:l,reqTag:m},o).sendViaController()}var k={getBackgroundSyncUri:function l(m,n,o,p){if(k.isBackgroundSyncAvailable()){j(c('BGSyncConst').msgTag.requestID,n,o,function(event){return i(event,m,p)})}else if(p)p(m,o);},isBackgroundSyncAvailable:function l(){return self&&'serviceWorker' in self.navigator&&'SyncManager' in self&&!!self.navigator.serviceWorker.controller&&c('ServiceWorkerBackgroundSyncGK').background_sync_sw},makeFileList:function l(m){var n={},o=c('DOM').scry(m,'input'),p=0;for(var q=o,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++]}else{s=q.next();if(s.done)break;t=s.value}var u=t,v=u.files;if(v)for(var w=v,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++]}else{y=w.next();if(y.done)break;z=y.value}var aa=z;n[p++]=aa}}return n},makeFormData:function l(m){var n=c('DOM').convertFormToDictionary(m),o=k.makeFileList(m),p=new FormData();Object.values(o).forEach(function(r){p.append('filelist[]',r)});for(var q in n)p.append(q,n[q]);return p},postFailureHandler:function l(m,n){j(c('BGSyncConst').msgTag.requestUpload,n,null,null)},postSuccessHandler:function l(m,n,o){j(c('BGSyncConst').msgTag.removeRequest,n,{bgSyncID:o},null)},queueRequest:function l(m,n){if(k.isBackgroundSyncAvailable())j(c('BGSyncConst').msgTag.queueRequest,n,m,null);}};f.exports=k}),18);
__d('getCrossOriginTransport',['invariant','ex'],(function a(b,c,d,e,f,g,h){function i(){try{var j=new XMLHttpRequest();if(!('withCredentials' in j)&&typeof XDomainRequest!=='undefined')j=new XDomainRequest();return j}catch(k){throw new Error(c('ex')('getCrossOriginTransport: %s',k.message))}}i.withCredentials=function(){var j=i();'withCredentials' in j||h(0);var k=j.open;j.open=function(){k.apply(this,arguments);this.withCredentials=true};return j};f.exports=i}),null);
__d('ZeroRewrites',['URI','ZeroRewriteRules','getCrossOriginTransport','getSameOriginTransport','isFacebookURI'],(function a(b,c,d,e,f,g){var h={rewriteURI:function i(j){if(!c('isFacebookURI')(j)||h._isWhitelisted(j))return j;var k=h._getRewrittenSubdomain(j);if(k!==null&&k!==undefined)j=j.setSubdomain(k);return j},getTransportBuilderForURI:function i(j){return h._isRewritten(j)?c('getCrossOriginTransport').withCredentials:c('getSameOriginTransport')},isRewriteSafe:function i(j){if(Object.keys(c('ZeroRewriteRules').rewrite_rules).length===0||!c('isFacebookURI')(j))return false;var k=h._getCurrentURI().getDomain(),l=new (c('URI'))(j).qualify().getDomain();return k===l||h._isRewritten(j)},_isWhitelisted:function i(j){var k=j.getPath();if(!k.endsWith('/'))k+='/';return c('ZeroRewriteRules').whitelist&&c('ZeroRewriteRules').whitelist[k]==1},_getRewrittenSubdomain:function i(j){var k=new (c('URI'))(j).qualify().getSubdomain();return c('ZeroRewriteRules').rewrite_rules[k]},_isRewritten:function i(j){j=new (c('URI'))(j).qualify();if(Object.keys(c('ZeroRewriteRules').rewrite_rules).length===0||!c('isFacebookURI')(j)||h._isWhitelisted(j))return false;var k=j.getSubdomain(),l=h._getCurrentURI(),m=h._getRewrittenSubdomain(l);return j.getDomain()!==l.getDomain()&&k===m},_getCurrentURI:function i(){return new (c('URI'))('/').qualify()}};f.exports=h}),null);
__d('getAsyncHeaders',['ZeroCategoryHeader','isFacebookURI'],(function a(b,c,d,e,f,g){function h(i){var j={};if(c('isFacebookURI')(i)&&c('ZeroCategoryHeader').value)j[c('ZeroCategoryHeader').header]=c('ZeroCategoryHeader').value;return j}f.exports=h}),null);
__d('ServiceWorkerBackgroundSyncRequest',['getAsyncHeaders','SharedClientServiceWorkerBackgroundSync','URI','ZeroRewrites'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.setMethod('POST');this.setPostData(null);this.setTag(i);this.setBgSyncID('default');if(j!==undefined)this.setURI(j);}h.prototype.queueRequest=function(){'use strict';if(this.$ServiceWorkerBackgroundSyncRequest4===undefined)return;c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri(this.getURI(),this.$ServiceWorkerBackgroundSyncRequest2,null,function(i,j){return this.$ServiceWorkerBackgroundSyncRequest8(i,j)}.bind(this))};h.prototype.send=function(){'use strict';if(this.$ServiceWorkerBackgroundSyncRequest4===undefined)return;c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri(this.getURI(),this.$ServiceWorkerBackgroundSyncRequest2,null,function(i,j){return this.$ServiceWorkerBackgroundSyncRequest9(i,j)}.bind(this))};h.prototype.setBgSyncID=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest1=i;return this};h.prototype.getBgSyncID=function(){'use strict';return this.$ServiceWorkerBackgroundSyncRequest1};h.prototype.setMethod=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest3=i;return this};h.prototype.setPostData=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest5=i;return this};h.prototype.setTag=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest2=i;return this};h.prototype.getTag=function(){'use strict';return this.$ServiceWorkerBackgroundSyncRequest2};h.prototype.setURI=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest4=c('ZeroRewrites').rewriteURI(new (c('URI'))(i));return this};h.prototype.getURI=function(){'use strict';return this.$ServiceWorkerBackgroundSyncRequest4.getQualifiedURI().toString()};h.prototype.setErrorHandler=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest6=i;return this};h.prototype.setSuccessHandler=function(i){'use strict';this.$ServiceWorkerBackgroundSyncRequest7=i;return this};h.prototype.$ServiceWorkerBackgroundSyncRequest8=function(i,j){'use strict';this.setBgSyncID(j.bgSyncID);var k=new Blob([this.$ServiceWorkerBackgroundSyncRequest5],{type:'application/x-www-form-urlencoded'}),l={request:{body:k,credentials:'include',headers:c('getAsyncHeaders')(new (c('URI'))(i)),method:this.$ServiceWorkerBackgroundSyncRequest3,referrer:self.location.href,registeredTime:Date.now(),tryCount:1,url:i},bgSyncID:this.getBgSyncID()};c('SharedClientServiceWorkerBackgroundSync').queueRequest(l,this.$ServiceWorkerBackgroundSyncRequest2)};h.prototype.$ServiceWorkerBackgroundSyncRequest9=function(i,j){'use strict';if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())this.setBgSyncID(j.bgSyncID);var k=c('ZeroRewrites').getTransportBuilderForURI(this.$ServiceWorkerBackgroundSyncRequest4)();k.open(this.$ServiceWorkerBackgroundSyncRequest3,this.$ServiceWorkerBackgroundSyncRequest4.toString(),true);k.onreadystatechange=function(){if(k.readyState>=4){var l=void 0;try{l=k.status}catch(m){l=0}if(l===200){this.$ServiceWorkerBackgroundSyncRequest10(k.responseText)}else this.$ServiceWorkerBackgroundSyncRequest11(k.statusText);}}.bind(this);k.send(this.$ServiceWorkerBackgroundSyncRequest5)};h.prototype.$ServiceWorkerBackgroundSyncRequest11=function(i){'use strict';if(this.$ServiceWorkerBackgroundSyncRequest6)this.$ServiceWorkerBackgroundSyncRequest6(i);if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())c('SharedClientServiceWorkerBackgroundSync').postFailureHandler(i,this.$ServiceWorkerBackgroundSyncRequest2);};h.prototype.$ServiceWorkerBackgroundSyncRequest10=function(i){'use strict';if(this.$ServiceWorkerBackgroundSyncRequest7)this.$ServiceWorkerBackgroundSyncRequest7(i);if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())c('SharedClientServiceWorkerBackgroundSync').postSuccessHandler(i,this.$ServiceWorkerBackgroundSyncRequest2,this.$ServiceWorkerBackgroundSyncRequest1);};f.exports=h}),null);
__d('BanzaiAdapter',['Arbiter','CurrentUser','Miny','QueryString','Run','SiteData','UserAgent','URI','ZeroRewrites','BGSyncConst','ServiceWorkerBackgroundSyncRequest','SharedClientServiceWorkerBackgroundSync','getAsyncParams','setTimeoutAcrossTransitions','BanzaiConfig'],(function a(b,c,d,e,f,g){var h=[],i=new (c('Arbiter'))(),j='/ajax/bz',k='POST',l={},m=l.adapter={config:c('BanzaiConfig'),endpoint:j,getUserID:function n(){return c('CurrentUser').getID()},inform:function n(o){i.inform(o)},subscribe:function n(o,p){return i.subscribe(o,p)},cleanup:function n(){var o=h;h=[];o.forEach(function(p){if(p.readyState<4)p.abort();})},readyToSend:function n(){return c('UserAgent').isBrowser('IE <= 8')||navigator.onLine},send:function n(o,p,q,r){if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()){var s=new (c('ServiceWorkerBackgroundSyncRequest'))(c('BGSyncConst').reqTag.banzai);s.setURI(new (c('URI'))(j));s.setMethod(k);s.setSuccessHandler(function(){if(p)p();if(!r)m.inform(l.OK);});s.setErrorHandler(function(v){if(q)q(v.status);if(!r)m.inform(l.ERROR);});s.setPostData(m.prepForTransit(o));s.send();return}var t=c('ZeroRewrites').rewriteURI(new (c('URI'))(j)),u=c('ZeroRewrites').getTransportBuilderForURI(t)();u.open(k,t.toString(),true);u.setRequestHeader('Content-Type','application/x-www-form-urlencoded');u.onreadystatechange=function(){if(u.readyState>=4){var v;try{v=u.status}catch(w){v=0}if(v==200){if(p)p();if(!r)m.inform(l.OK);}else{if(q)q(v);if(!r)m.inform(l.ERROR);}}};h.push(u);u.send(m.prepForTransit(o))},addRequestAuthData:function n(o){return o},prepForTransit:function n(o){var p=c('getAsyncParams')(k);p.q=JSON.stringify(o);p.ts=Date.now();p.ph=c('SiteData').push_phase;if(l.isEnabled('miny_compression')){var q=Date.now(),r=c('Miny').encode(p.q);if(r.length<p.q.length){p.q=r;p.miny_encode_ms=Date.now()-q}}return c('QueryString').encode(p)},setHooks:function n(){},setUnloadHook:function n(){c('Run').onAfterUnload(l._unload)},onUnload:function n(o){c('Run').onAfterUnload(o)},isOkToSendViaBeacon:function n(){return true},queueRequest:function n(o){var p=new (c('ServiceWorkerBackgroundSyncRequest'))(c('BGSyncConst').reqTag.banzai,new (c('URI'))(j).getQualifiedURI());p.setMethod(k);p.setPostData(m.prepForTransit(o));p.queueRequest()}};f.exports=l}),18);
__d('WebPixelRatio',['Cookie','DOMEventListener','PixelRatioConst','Run'],(function a(b,c,d,e,f,g){var h=c('PixelRatioConst').cookieName,i=void 0,j=false,k=false;function l(){return window.devicePixelRatio||1}function m(){c('Cookie').set(h,String(l()))}function n(){c('Cookie').clear(h)}function o(){if(k)return;k=true;var q=l();if(q!==i){m()}else n();}var p={startDetecting:function q(r){i=r||1;n();if(j)return;j=true;if('onpagehide' in window)c('DOMEventListener').add(window,'pagehide',o);c('Run').onBeforeUnload(o,false)},get:function q(){return i||l()}};f.exports=p}),null);
__d('BanzaiServiceWorker',['BanzaiAdapter','BGSyncConst','ServiceWorkerBackgroundSyncBanzaiGK','SharedClientServiceWorkerBackgroundSync','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h=c('BanzaiAdapter').adapter,i=60000,j=void 0,k=void 0;function l(o){var p=Date.now()+o;if(!k||p<k){k=p;clearTimeout(j);j=c('setTimeoutAcrossTransitions')(n.sync,o)}}function m(o){h.queueRequest(o)}var n={flush:function o(){clearTimeout(j);j=0;n.sync()},isEnabled:function o(){return c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()&&c('ServiceWorkerBackgroundSyncBanzaiGK').sw_background_sync_banzai},send:function o(p,q,r,s){if(q){h.send(p);if(!s)return;}m(p);l(r)},sync:function o(){k=null;l(i);c('SharedClientServiceWorkerBackgroundSync').postFailureHandler(null,c('BGSyncConst').reqTag.banzai)}};f.exports=n}),18);
__d('BanzaiStreamPayloads',[],(function a(b,c,d,e,f,g){'use strict';var h={},i={addPayload:function j(k,l){h[k]=l},removePayload:function j(k){delete h[k]},unload:function j(k){Object.keys(h).forEach(function(l){var m=h[l];k(m.route,m.payload)})}};f.exports=i}),null);
__d('WebStorageMutex',['WebStorage','pageID','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h=null,i=false,j=c('pageID');function k(){if(!i){i=true;h=c('WebStorage').getLocalStorage()}return h}function l(m){'use strict';this.name=m}l.testSetPageID=function(m){'use strict';j=m};l.prototype.$WebStorageMutex1=function(){'use strict';if(!k())return j;var m=k().getItem('mutex_'+this.name);m=m?m.split(':'):null;return m&&m[1]>=Date.now()?m[0]:null};l.prototype.$WebStorageMutex2=function(m){'use strict';if(!k())return;var n=Date.now()+(m||10000);c('WebStorage').setItemGuarded(k(),'mutex_'+this.name,j+':'+n)};l.prototype.hasLock=function(){'use strict';return this.$WebStorageMutex1()==j};l.prototype.lock=function(m,n,o){'use strict';if(this.$WebStorageMutex3)clearTimeout(this.$WebStorageMutex3);if(j==(this.$WebStorageMutex1()||j))this.$WebStorageMutex2(o);this.$WebStorageMutex3=c('setTimeoutAcrossTransitions')(function(){this.$WebStorageMutex3=null;var p=this.hasLock()?m:n;if(p)p(this);}.bind(this),0)};l.prototype.unlock=function(){'use strict';if(this.$WebStorageMutex3)clearTimeout(this.$WebStorageMutex3);if(k()&&this.hasLock())k().removeItem('mutex_'+this.name);};f.exports=l}),null);
__d('Banzai',['BanzaiAdapter','BanzaiServiceWorker','BanzaiStreamPayloads','CurrentUser','ErrorUtils','ExecutionEnvironment','FBJSON','NavigationMetrics','TimeSlice','Visibility','WebStorage','emptyFunction','isInIframe','lowerFacebookDomain','pageID','setTimeoutAcrossTransitions','WebStorageMutex'],(function a(b,c,d,e,f,g){var h=c('BanzaiAdapter').adapter,i=c('isInIframe')(),j='bz:',k='ods:banzai',l='send_via_beacon_failure',m=0,n=1,o=2,p,q,r=[],s=null,t=[];function u(ia){return ia[2]>=Date.now()-(h.config.EXPIRY||c('BanzaiAdapter').EXPIRY)}function v(ia,ja){ia.__meta.status=m;ia[3]=(ia[3]||0)+1;if(!ia.__meta.retry&&ja>=400&&ja<600)r.push(ia);}function w(ia,ja,ka,la){var ma=[ia,ja,ka,0];ma.__meta={retry:la===true,pageID:c('pageID'),userID:c('CurrentUser').getID(),status:m};return ma}function x(){var ia=[];t.forEach(function(na){var oa=na.cb();oa.forEach(function(pa){var qa=na.route;if(qa){var ra=w(qa,pa,Date.now());ra.__meta.onSuccess=na.onSuccess;ra.__meta.onFailure=na.onFailure;ia.push(ra)}})});t=[];var ja=[],ka=[];ca(ja,ka,true,ia);if(ja.length>0){ja[0].send_method='beacon';var la=new Blob([h.addRequestAuthData(h.prepForTransit(ja))],{type:'application/x-www-form-urlencoded'}),ma=navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint,la);if(ma){ka.forEach(function(na){return ia.__meta&&na.__meta.onSuccess&&na.__meta.onSuccess()})}else ka.forEach(function(na){return ia.__meta&&na.__meta.onFailure&&na.__meta.onFailure()});}}function y(ia){var ja=Date.now()+ia;if(!q||ja<q){q=ja;clearTimeout(p);p=c('setTimeoutAcrossTransitions')(z,ia);return true}return false}var z=c('TimeSlice').guard(function(){aa(null,null)},'Banzai.send',{isContinuation:false});function aa(ia,ja){q=null;y(c('BanzaiAdapter').BASIC.delay);if(!h.readyToSend()){if(ja)ja();return}h.inform(c('BanzaiAdapter').SEND);var ka=[],la=[];r=ca(ka,la,true,r);if(ka.length<=0){h.inform(c('BanzaiAdapter').OK);if(ia)ia();return}ka[0].trigger=s;s=null;ka[0].send_method='ajax';h.send(ka,function(){la.forEach(function(ma){ma.__meta.status=o;if(ma.__meta.callback)ma.__meta.callback();});if(ia)ia();},function(ma){la.forEach(function(na){v(na,ma)});if(ja)ja();})}function ba(){if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))return;var ia=[],ja=[];r=ca(ia,ja,false,r);if(ia.length<=0)return;ia[0].send_method='beacon';var ka=new Blob([h.addRequestAuthData(h.prepForTransit(ia))],{type:'application/x-www-form-urlencoded'}),la=navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint,ka);if(!la){var ma;ja.forEach(function(na){r.push(na)});r.push(w(k,(ma={},ma[l]=[1],ma),Date.now()))}}function ca(ia,ja,ka,la){var ma={};return la.filter(function(na){var oa=na.__meta;if(oa.status>=o||!u(na))return false;if(oa.status>=n)return true;var pa=oa.pageID+oa.userID,qa=ma[pa];if(!qa){qa={user:oa.userID,page_id:oa.pageID,posts:[]};ma[pa]=qa;ia.push(qa)}oa.status=n;qa.posts.push(na);ja.push(na);return ka&&oa.retry})}var da,ea,fa=false;function ga(){if(!fa){fa=true;ea=c('WebStorage').getLocalStorage()}return ea}function ha(){if(!da)if(!i){da={store:function ia(){var ja=ga();if(!ja||r.length<=0)return;var ka=r.map(function(la){return [la[0],la[1],la[2],la[3]||0,la.__meta]});r=[];ja.setItem(j+c('pageID')+'.'+Date.now(),c('FBJSON').stringify(ka))},restore:function ia(){var ja=ga();if(!ja)return;var ka=c('WebStorageMutex');new ka('banzai').lock(function(la){var ma=[];for(var na=0;na<ja.length;na++){var oa=ja.key(na);if(oa.indexOf(j)===0&&oa.indexOf('bz:__')!==0)ma.push(oa);}ma.forEach(function(pa){var qa=ja.getItem(pa);ja.removeItem(pa);if(!qa)return;var ra=c('FBJSON').parse(qa,f.id);ra.forEach(function(sa){if(!sa)return;var ta=sa.__meta=sa.pop(),ua=u(sa);if(!ua)return;var va=c('CurrentUser').getID();if(ta.userID===va||va==='0'){ta.status=m;r.push(sa)}})});la.unlock()})}}}else da={store:c('emptyFunction'),restore:c('emptyFunction')};}c('BanzaiAdapter').SEND='Banzai:SEND';c('BanzaiAdapter').OK='Banzai:OK';c('BanzaiAdapter').ERROR='Banzai:ERROR';c('BanzaiAdapter').SHUTDOWN='Banzai:SHUTDOWN';c('BanzaiAdapter').VITAL_WAIT=1000;c('BanzaiAdapter').BASIC_WAIT=60000;c('BanzaiAdapter').EXPIRY=30*60000;c('BanzaiAdapter').VITAL={delay:h.config.MIN_WAIT||c('BanzaiAdapter').VITAL_WAIT};c('BanzaiAdapter').BASIC={delay:h.config.MAX_WAIT||c('BanzaiAdapter').BASIC_WAIT};c('BanzaiAdapter').isEnabled=function(ia){return h.config.gks&&h.config.gks[ia]};c('BanzaiAdapter').post=function(ia,ja,ka){if(!ia)c('ErrorUtils').reportError(new Error('Banzai.post called without specifying a route'));ka=ka||{};var la=ka.retry;if(h.config.disabled)return;if(!c('ExecutionEnvironment').canUseDOM)return;var ma=h.config.blacklist;if(ma)if(ma.indexOf)if(typeof ma.indexOf=='function')if(ma.indexOf(ia)!=-1)return;if(i&&c('lowerFacebookDomain').isValidDocumentDomain()){var na=void 0;try{na=b.top.require('Banzai')}catch(sa){na=null}if(na){na.post.apply(na,arguments);return}}var oa=w(ia,ja,Date.now(),la);if(ka.callback)oa.__meta.callback=ka.callback;var pa=ka.delay;if(pa==null)pa=c('BanzaiAdapter').BASIC_WAIT;if(c('BanzaiServiceWorker').isEnabled()){var qa=[{user:c('CurrentUser').getID(),page_id:c('pageID'),posts:[oa],trigger:ia}];c('BanzaiServiceWorker').send(qa,ka.signal,pa,la);return}if(ka.signal){oa.__meta.status=n;var ra=[{user:c('CurrentUser').getID(),page_id:c('pageID'),posts:[oa],trigger:ia}];h.send(ra,function(){oa.__meta.status=o;if(oa.__meta.callback)oa.__meta.callback();},function(sa){v(oa,sa)},true);if(!la)return;}r.push(oa);if(y(pa)||!s)s=ia;};c('BanzaiAdapter').registerToSendWithBeacon=function(ia,ja,ka,la){if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))return false;if(!ia){c('ErrorUtils').reportError(new Error('Banzai.registerToSendWithBeacon called without specifying a route'));return false}t.push({cb:ja,route:ia,onSuccess:ka,onFailure:la});return true};c('BanzaiAdapter').flush=function(ia,ja){clearTimeout(p);p=0;aa(ia,ja)};c('BanzaiAdapter').subscribe=h.subscribe;c('BanzaiAdapter').canUseNavigatorBeacon=function(){return navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()};c('BanzaiAdapter')._schedule=y;c('BanzaiAdapter')._store=function(ia){ha();c('ErrorUtils').applyWithGuard(da.store,da)};c('BanzaiAdapter')._restore=function(ia){ha();c('ErrorUtils').applyWithGuard(da.restore,da);y(h.config.RESTORE_WAIT||c('BanzaiAdapter').VITAL_WAIT)};c('BanzaiAdapter')._unload=function(){c('BanzaiStreamPayloads').unload(c('BanzaiAdapter').post);if(c('BanzaiServiceWorker').isEnabled())c('BanzaiServiceWorker').sync();if(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon())x();h.cleanup();h.inform(c('BanzaiAdapter').SHUTDOWN);if(c('BanzaiAdapter').isEnabled('beacon_hailmary')&&r.length>0)ba();if(r.length>0){ha();c('ErrorUtils').applyWithGuard(da.store,da)}};c('BanzaiAdapter')._testState=function(){return {postBuffer:r,triggerRoute:s}};(c('BanzaiAdapter')._initialize=function(){if(c('ExecutionEnvironment').canUseDOM){if(c('BanzaiAdapter').isEnabled('beacon_hailmary')&&c('Visibility').isSupported()){c('Visibility').addListener(c('Visibility').HIDDEN,function(){if(r.length>0)ba();if(r.length>0){ha();c('ErrorUtils').applyWithGuard(da.store,da)}})}else h.setHooks();h.setUnloadHook();c('NavigationMetrics').addListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(ia,ja){if(ja.pageType!=='normal')return;c('BanzaiAdapter')._restore();c('NavigationMetrics').removeCurrentListener()})}})();f.exports=c('BanzaiAdapter')}),18);
__d("camelize",[],(function a(b,c,d,e,f,g){var h=/-(.)/g;function i(j){return j.replace(h,function(k,l){return l.toUpperCase()})}f.exports=i}),18);
__d('hyphenate',[],(function a(b,c,d,e,f,g){var h=/([A-Z])/g;function i(j){return j.replace(h,'-$1').toLowerCase()}f.exports=i}),null);
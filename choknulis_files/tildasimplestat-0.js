!function(s,c,p){var g,o,u;p?(s.tilda_stat_callbacks&&s.tilda_stat_callbacks.length,g={},o={p10:0,p25:0,p50:0,p75:0,p90:0},new Date,u=!0,s.onVisibilityWindowChange=function(t){var e=!0;if(!t)throw new Error("no callback given");function a(){e||t(e=!0)}function i(){e&&t(e=!1)}try{"hidden"in document&&document.addEventListener("visibilitychange",function(){(document.hidden?i:a)()}),"mozHidden"in document&&document.addEventListener("mozvisibilitychange",function(){(document.mozHidden?i:a)()}),"webkitHidden"in document&&document.addEventListener("webkitvisibilitychange",function(){(document.webkitHidden?i:a)()}),"msHidden"in document&&document.addEventListener("msvisibilitychange",function(){(document.msHidden?i:a)()}),"onfocusin"in document&&(document.onfocusin=a,document.onfocusout=i),window.onpageshow=window.onfocus=a,window.onpagehide=window.onblur=i}catch(t){}},s.tildastat_scrollEvent=function(){var t=p(document).scrollTop(),e=p(window).height(),a=p(document).height(),i=0,n=0;new Date;if(u=!0,0<p("#t-header").length&&(i=p("#t-header").height()),0<p("#t-footer").length&&(n=p("#t-footer").height()),!((n=parseInt(100*(t-i+e)/(a-i-n)))<10))if(10<=n&&!o.p10)g.page="/tilda/scroll/10/",s.tildastat("pageview"),o.p10=!0;else{if(24<=n){if(0==o.p25)return g.page="/tilda/scroll/25/",s.tildastat("pageview"),void(o.p25=s.setTimeout(function(){s.clearTimeout(o.p25),o.p25=-1},5e3));if(n<51&&-1==o.p25)return void(o.p25=0)}if(49<=n){if(0==o.p50)return g.page="/tilda/scroll/50/",s.tildastat("pageview"),void(o.p50=s.setTimeout(function(){s.clearTimeout(o.p50),o.p50=-1},5e3));if(n<76&&-1==o.p50)return void(o.p50=0)}if(74<=n){if(0==o.p75)return g.page="/tilda/scroll/75/",s.tildastat("pageview"),void(o.p75=s.setTimeout(function(){s.clearTimeout(o.p75),o.p75=-1},5e3));if(n<91&&-1==o.p75)return void(o.p75=0)}89<=n&&(0==o.p90?(g.page="/tilda/scroll/90/",s.tildastat("pageview"),o.p90=s.setTimeout(function(){s.clearTimeout(o.p90),o.p90=-1},5e3)):-1==o.p90&&(o.p90=0))}},s.tildaHash=function(e){for(var t=Array(e.length),a=0;a<e.length;a++)t[a]=a;return Array.prototype.map.call(t,function(t){return e.charCodeAt(t).toString(16)}).join("")},s.tildastat=function(t,e){var a;if(!t)return!1;switch(e&&p.extend(g,e),t){case"create":"www."==(a=s.location.hostname).substring(0,4)&&(a=a.substring(4));try{a.lastIndexOf(".")==a.length-1&&(a=a.slice(0,-1))}catch(t){}g.page=a+s.location.pathname,g.referrer=c.referrer||"",g.userid="simple",g.sessionid="simple",g.user_agent=s.navigator.userAgent,g.user_language=s.navigator.userLanguage||s.navigator.language,g.projectid=p("#allrecords").data("tilda-project-id")||"0",g.pageid=p("#allrecords").data("tilda-page-id")||"0",g.pagealias=p("#allrecords").data("tilda-page-alias")||"",g.formskey=p("#allrecords").data("tilda-formskey")||"",g.params={},g.fingerprint="",(void 0===s.tildastatscroll||"yes"!=s.tildastatscroll&&"no"!=s.tildastatscroll)&&(s.tildastatscroll="yes"==p("#allrecords").data("tilda-statscroll")?"yes":"no");try{a=decodeURIComponent(s.location.search)}catch(t){a=s.location.search}if("?"<a&&(g.pagequery=a.substring(1).toLowerCase(),-1!=g.pagequery.indexOf("utm_"))){var i,n,o=g.pagequery.split("&");for(i in o)o[i]&&(1<(n=o[i].split("=")).length?"utm_referrer"==n[0]&&""==g.referrer?g.referrer=n[1]:g.params[n[0]]=n[1]:g.params[n[0]]="")}var r=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r=!0),g.ismobile=r,1==p("#tildastatscript").length&&(g.tildastatcode=p("#tildastatscript").get(0).key),"yes"==s.tildastatscroll)try{s.onVisibilityWindowChange(function(t){u=!!t}),p("body").on("mousewheel,mousemove",t_throttle(function(){u=!0},1e3)),p("body").on("keypress",t_throttle(function(){u=!0},1e3)),p("body").on("click",t_throttle(function(){u=!0},1e3))}catch(t){}try{if(g.fingerprint=(navigator.cookieEnabled?"cT":"cF")+(navigator.deviceMemory?"dm"+navigator.deviceMemory:"dm")+(navigator.hardwareConcurrency?"hc"+navigator.hardwareConcurrency:"hc")+(navigator.languages?"l"+navigator.languages.join(","):"l")+(navigator.platform?"p"+navigator.platform:"p")+(navigator.vendor?"v"+navigator.vendor:"v")+(navigator.appCodeName?"a"+navigator.appCodeName:"a")+(navigator.appName?"n"+navigator.appName:"n"),navigator.plugins){for(var l="",d=0;d<navigator.plugins.length;d++)l+=navigator.plugins[d].filename;g.fingerprint+="pl"+l}g.fingerprint=s.tildaHash(g.fingerprint)}catch(t){}break;case"pageview":if(!g.page){console.log("TildaStat: page empty"),"www."==(a=s.location.hostname).substring(0,4)&&(a=a.substring(4));try{a.lastIndexOf(".")==a.length-1&&(a=a.slice(0,-1))}catch(t){}g.page=a+s.location.pathname,s.location.hash&&0==s.location.hash.indexOf("#!")&&(g.page+=s.location.hash)}if("http:"!=window.location.protocol&&"https:"!=window.location.protocol)return console.log("TildaStat: cannot work on local page"),!1;if("/"==g.page.substring(0,1)&&(g.page=s.location.hostname+g.page),""<g.user_agent&&-1!=g.user_agent.indexOf("bot"))break;p.ajax({type:"POST",url:"https://stat.tildacdn.com/event/",data:g,dataType:"text",xhrFields:{withCredentials:!1},success:function(t){},fail:function(t){console.log("TildaStat: fail pageview"),console.log(t)},timeout:3e3}),g.page&&-1==g.page.indexOf("tilda/scroll")&&-1==g.page.indexOf("tilda/readtime")&&-1==g.page.indexOf("tilda/click")&&(g.referrer=g.page),g.page="",s.tildastatload=!0;break;case"readtime":try{"yes"==s.tildastatscroll&&(u&&(g.page="/tilda/readtime/",u=!1,s.tildastat("pageview")),s.setTimeout(function(){s.tildastat("readtime")},15e3))}catch(t){}break;case"scroll":try{"yes"==s.tildastatscroll&&p(s).on("scroll",t_throttle(s.tildastat_scrollEvent,500))}catch(t){}}},s.tildastat("create"),s.setTimeout(function(){s.tildastat("pageview"),s.tildastat("readtime"),s.tildastat("scroll")},2e3)):conole.log("jquery not initialized")}(window,document,jQuery);
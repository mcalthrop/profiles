/*

 Copyright (C) 2011 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */// lib/handlebars/base.js
/*jshint eqnull:true*/this.Handlebars={};(function(e){e.VERSION="1.0.0-rc.3";e.COMPILER_REVISION=2;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:">= 1.0.0-rc.3"};e.helpers={};e.partials={};e.registerHelper=function(e,t,n){n&&(t.not=n);this.helpers[e]=t};e.registerPartial=function(e,t){this.partials[e]=t};e.registerHelper("helperMissing",function(e){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+e+"'")});var t=Object.prototype.toString,n="[object Function]";e.registerHelper("blockHelperMissing",function(r,i){var s=i.inverse||function(){},o=i.fn,u="",a=t.call(r);a===n&&(r=r.call(this));return r===!0?o(this):r===!1||r==null?s(this):a==="[object Array]"?r.length>0?e.helpers.each(r,i):s(this):o(r)});e.K=function(){};e.createFrame=Object.create||function(t){e.K.prototype=t;var n=new e.K;e.K.prototype=null;return n};e.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(t,n){if(e.logger.level<=t){var r=e.logger.methodMap[t];typeof console!="undefined"&&console[r]&&console[r].call(console,n)}}};e.log=function(t,n){e.logger.log(t,n)};e.registerHelper("each",function(t,n){var r=n.fn,i=n.inverse,s=0,o="",u;n.data&&(u=e.createFrame(n.data));if(t&&typeof t=="object")if(t instanceof Array)for(var a=t.length;s<a;s++){u&&(u.index=s);o+=r(t[s],{data:u})}else for(var f in t)if(t.hasOwnProperty(f)){u&&(u.key=f);o+=r(t[f],{data:u});s++}s===0&&(o=i(this));return o});e.registerHelper("if",function(r,i){var s=t.call(r);s===n&&(r=r.call(this));return!r||e.Utils.isEmpty(r)?i.inverse(this):i.fn(this)});e.registerHelper("unless",function(t,n){var r=n.fn,i=n.inverse;n.fn=i;n.inverse=r;return e.helpers["if"].call(this,t,n)});e.registerHelper("with",function(e,t){return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})})(this.Handlebars);var errorProps=["description","fileName","lineNumber","message","name","number","stack"];Handlebars.Exception=function(e){var t=Error.prototype.constructor.apply(this,arguments);for(var n=0;n<errorProps.length;n++)this[errorProps[n]]=t[errorProps[n]]};Handlebars.Exception.prototype=new Error;Handlebars.SafeString=function(e){this.string=e};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},t=/[&<>"'`]/g,n=/[&<>"'`]/,r=function(t){return e[t]||"&amp;"};Handlebars.Utils={escapeExpression:function(e){return e instanceof Handlebars.SafeString?e.toString():e==null||e===!1?"":n.test(e)?e.replace(t,r):e},isEmpty:function(e){return!e&&e!==0?!0:Object.prototype.toString.call(e)==="[object Array]"&&e.length===0?!0:!1}}})();Handlebars.VM={template:function(e){var t={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,t,n){var r=this.programs[e];if(n)return Handlebars.VM.program(t,n);if(r)return r;r=this.programs[e]=Handlebars.VM.program(t);return r},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop,compilerInfo:null};return function(n,r){r=r||{};var i=e.call(t,Handlebars,n,r.helpers,r.partials,r.data),s=t.compilerInfo||[],o=s[0]||1,u=Handlebars.COMPILER_REVISION;if(o!==u){if(o<u){var a=Handlebars.REVISION_CHANGES[u],f=Handlebars.REVISION_CHANGES[o];throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+f+")."}throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+s[1]+")."}return i}},programWithDepth:function(e,t,n){var r=Array.prototype.slice.call(arguments,2);return function(n,i){i=i||{};return e.apply(this,[n,i.data||t].concat(r))}},program:function(e,t){return function(n,r){r=r||{};return e(n,r.data||t)}},noop:function(){return""},invokePartial:function(e,t,n,r,i,s){var o={helpers:r,partials:i,data:s};if(e===undefined)throw new Handlebars.Exception("The partial "+t+" could not be found");if(e instanceof Function)return e(n,o);if(!Handlebars.compile)throw new Handlebars.Exception("The partial "+t+" could not be compiled when running in runtime-only mode");i[t]=Handlebars.compile(e,{data:s!==undefined});return i[t](n,o)}};Handlebars.template=Handlebars.VM.template;
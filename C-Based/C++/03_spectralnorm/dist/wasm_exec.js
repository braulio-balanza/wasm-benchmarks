(()=>{var e={214:(e,t,n)=>{"use strict";var r="win32"===process.platform,i=n(323);function o(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];i&&"."!==i&&(".."===i?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(i))}return n}function a(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var s=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,c=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,l={};function u(e){var t=s.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",i=c.exec(r);return[n,i[1],i[2],i[3]]}function f(e){var t=s.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function p(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}l.resolve=function(){for(var e="",t="",n=!1,r=arguments.length-1;r>=-1;r--){var a;if(r>=0?a=arguments[r]:e?(a=process.env["="+e])&&a.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(a=e+"\\"):a=process.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var s=f(a),c=s.device,l=s.isUnc,u=s.isAbsolute,d=s.tail;if((!c||!e||c.toLowerCase()===e.toLowerCase())&&(e||(e=c),n||(t=d+"\\"+t,n=u),e&&n))break}}return l&&(e=p(e)),e+(n?"\\":"")+(t=o(t.split(/[\\\/]+/),!n).join("\\"))||"."},l.normalize=function(e){var t=f(e),n=t.device,r=t.isUnc,i=t.isAbsolute,a=t.tail,s=/[\\\/]$/.test(a);return(a=o(a.split(/[\\\/]+/),!i).join("\\"))||i||(a="."),a&&s&&(a+="\\"),r&&(n=p(n)),n+(i?"\\":"")+a},l.isAbsolute=function(e){return f(e).isAbsolute},l.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var r=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),l.normalize(r)},l.relative=function(e,t){e=l.resolve(e),t=l.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),i=a(t.split("\\")),o=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(o.length,s.length),u=c,f=0;f<c;f++)if(o[f]!==s[f]){u=f;break}if(0==u)return t;var p=[];for(f=u;f<o.length;f++)p.push("..");return(p=p.concat(i.slice(u))).join("\\")},l._makeLong=function(e){if(!i.isString(e))return e;if(!e)return"";var t=l.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},l.dirname=function(e){var t=u(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},l.basename=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},l.extname=function(e){return u(e)[3]},l.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===l.sep?n+r:n+l.sep+r:r},l.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=u(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},l.sep="\\",l.delimiter=";";var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,g={};function m(e){return d.exec(e).slice(1)}g.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var r=n>=0?arguments[n]:process.cwd();if(!i.isString(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,t="/"===r[0])}return(t?"/":"")+(e=o(e.split("/"),!t).join("/"))||"."},g.normalize=function(e){var t=g.isAbsolute(e),n=e&&"/"===e[e.length-1];return(e=o(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},g.isAbsolute=function(e){return"/"===e.charAt(0)},g.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n)}return g.normalize(e)},g.relative=function(e,t){e=g.resolve(e).substr(1),t=g.resolve(t).substr(1);for(var n=a(e.split("/")),r=a(t.split("/")),i=Math.min(n.length,r.length),o=i,s=0;s<i;s++)if(n[s]!==r[s]){o=s;break}var c=[];for(s=o;s<n.length;s++)c.push("..");return(c=c.concat(r.slice(o))).join("/")},g._makeLong=function(e){return e},g.dirname=function(e){var t=m(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},g.basename=function(e,t){var n=m(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},g.extname=function(e){return m(e)[3]},g.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+g.sep:"")+(e.base||"")},g.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=m(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},g.sep="/",g.delimiter=":",e.exports=r?l:g,e.exports.posix=g,e.exports.win32=l},746:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},579:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},323:(e,t,n)=>{var r=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,s=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),c=i[n];n<o;c=i[++n])g(c)||!v(c)?s+=" "+c:s+=" "+a(c);return s},t.deprecate=function(e,r){if(y(n.g.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var i=!1;return function(){if(!i){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),i=!0}return e.apply(this,arguments)}};var i,o={};function a(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,e,r.depth)}function s(e,t){var n=a.styles[t];return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function c(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return h(i)||(i=l(e,i,r)),i}var o=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return m(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}(e,n);if(o)return o;var a=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),w(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return u(n);if(0===a.length){if(E(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return u(n)}var v,T="",S=!1,A=["{","}"];return p(n)&&(S=!0,A=["[","]"]),E(n)&&(T=" [Function"+(n.name?": "+n.name:"")+"]"),b(n)&&(T=" "+RegExp.prototype.toString.call(n)),_(n)&&(T=" "+Date.prototype.toUTCString.call(n)),w(n)&&(T=" "+u(n)),0!==a.length||S&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),v=S?function(e,t,n,r,i){for(var o=[],a=0,s=t.length;a<s;++a)F(t,String(a))?o.push(f(e,t,n,r,String(a),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(f(e,t,n,r,i,!0))})),o}(e,n,r,s,a):a.map((function(t){return f(e,n,r,s,t,S)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(v,T,A)):A[0]+T+A[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i,o){var a,s,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),F(r,i)||(a="["+i+"]"),s||(e.seen.indexOf(c.value)<0?(s=g(n)?l(e,c.value,null):l(e,c.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),y(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function p(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function m(e){return"number"==typeof e}function h(e){return"string"==typeof e}function y(e){return void 0===e}function b(e){return v(e)&&"[object RegExp]"===T(e)}function v(e){return"object"==typeof e&&null!==e}function _(e){return v(e)&&"[object Date]"===T(e)}function w(e){return v(e)&&("[object Error]"===T(e)||e instanceof Error)}function E(e){return"function"==typeof e}function T(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(y(i)&&(i=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=process.pid;o[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else o[e]=function(){};return o[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=h,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=b,t.isObject=v,t.isDate=_,t.isError=w,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(579);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",C(),t.format.apply(t,arguments))},t.inherits=n(746),t._extend=function(e,t){if(!t||!v(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}},461:(e,t,n)=>{"use strict";e.exports=n.p+"fff29960ca804a34de9b.wasm"},679:()=>{}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{"use strict";var e;const t=(e="file:///workspace/C-Based/C++/03_spectralnorm/pkg/emscripten.js",function(t){var r,i,o=void 0!==(t=t||{})?t:{};o.ready=new Promise((function(e,t){r=e,i=t})),["_main","__Z3runv","_fflush","onRuntimeInitialized"].forEach((e=>{Object.getOwnPropertyDescriptor(o.ready,e)||Object.defineProperty(o.ready,e,{get:()=>re("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>re("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})}));var a=Object.assign({},o),s=[],c="object"==typeof window,l="function"==typeof importScripts,u="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f=!c&&!u&&!l;if(o.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var p,d,g,m="";function h(e){return o.locateFile?o.locateFile(e,m):m+e}if(u){if("undefined"==typeof process||!process.release||"node"!==process.release.name)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var y,b;m=l?n(214).dirname(m)+"/":"//",y=n(679),b=n(214),p=(e,t)=>(e=b.normalize(e),y.readFileSync(e,t?void 0:"utf8")),g=e=>{var t=p(e,!0);return t.buffer||(t=new Uint8Array(t)),O(t.buffer),t},d=(e,t,n)=>{e=b.normalize(e),y.readFile(e,(function(e,r){e?n(e):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),s=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof de))throw e})),process.on("unhandledRejection",(function(e){throw e})),o.inspect=function(){return"[Emscripten Module object]"}}else if(f){if("object"==typeof process||"object"==typeof window||"function"==typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");"undefined"!=typeof read&&(p=function(e){return read(e)}),g=function(e){let t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(t=read(e,"binary"),O("object"==typeof t),t)},d=function(e,t,n){setTimeout((()=>t(g(e))),0)},"undefined"!=typeof scriptArgs?s=scriptArgs:void 0!==arguments&&(s=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)}else{if(!c&&!l)throw new Error("environment detection error");if(l?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==(m=e).indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"","object"!=typeof window&&"function"!=typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");p=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},l&&(g=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),d=(e,t,n)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)}}var v,_,w=o.print||console.log.bind(console),E=o.printErr||console.warn.bind(console);function T(e,t){Object.getOwnPropertyDescriptor(o,e)||Object.defineProperty(o,e,{configurable:!0,get:function(){re("Module."+e+" has been replaced with plain "+t+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function S(e){Object.getOwnPropertyDescriptor(o,e)&&re("`Module."+e+"` was supplied but `"+e+"` not included in INCOMING_MODULE_JS_API")}function A(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function C(e){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get:function(){var t="`"+e+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line",n=e;n.startsWith("_")||(n="$"+e),t+=" (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE="+n+")",A(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),me(t)}})}function F(e){Object.getOwnPropertyDescriptor(o,e)||Object.defineProperty(o,e,{configurable:!0,get:function(){var t="'"+e+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";A(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),re(t)}})}Object.assign(o,a),a=null,Le(),o.arguments&&(s=o.arguments),T("arguments","arguments_"),o.thisProgram&&o.thisProgram,T("thisProgram","thisProgram"),o.quit&&o.quit,T("quit","quit_"),O(void 0===o.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),O(void 0===o.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),O(void 0===o.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),O(void 0===o.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),O(void 0===o.read,"Module.read option was removed (modify read_ in JS)"),O(void 0===o.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),O(void 0===o.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),O(void 0===o.setWindowTitle,"Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),O(void 0===o.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),T("read","read_"),T("readAsync","readAsync"),T("readBinary","readBinary"),T("setWindowTitle","setWindowTitle"),O(!f,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),o.wasmBinary&&(v=o.wasmBinary),T("wasmBinary","wasmBinary"),o.noExitRuntime,T("noExitRuntime","noExitRuntime"),"object"!=typeof WebAssembly&&re("no native wasm support detected");var L=!1;function O(e,t){e||re("Assertion failed"+(t?": "+t:""))}var I,M,k,R,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(e,t,n){for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.buffer&&x)return x.decode(e.subarray(t,i));for(var o="";t<i;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var c=63&e[t++];if(224==(240&a)?a=(15&a)<<12|s<<6|c:(240!=(248&a)&&me("Invalid UTF-8 leading byte 0x"+a.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),a=(7&a)<<18|s<<12|c<<6|63&e[t++]),a<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}function U(e){o.HEAP8=I=new Int8Array(e),o.HEAP16=new Int16Array(e),o.HEAP32=k=new Int32Array(e),o.HEAPU8=M=new Uint8Array(e),o.HEAPU16=new Uint16Array(e),o.HEAPU32=R=new Uint32Array(e),o.HEAPF32=new Float32Array(e),o.HEAPF64=new Float64Array(e)}var D=5242880;o.TOTAL_STACK&&O(D===o.TOTAL_STACK,"the stack size can no longer be determined at runtime");var N=o.INITIAL_MEMORY||16777216;function j(){var e=ke();O(0==(3&e)),R[e>>2]=34821223,R[e+4>>2]=2310721022,R[0]=1668509029}function z(){if(!L){var e=ke(),t=R[e>>2],n=R[e+4>>2];34821223==t&&2310721022==n||re("Stack overflow! Stack cookie has been overwritten at 0x"+e.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+n.toString(16)+" 0x"+t.toString(16)),1668509029!==R[0]&&re("Runtime error: The application has corrupted its heap memory area (address zero)!")}}T("INITIAL_MEMORY","INITIAL_MEMORY"),O(N>=D,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+N+"! (TOTAL_STACK="+D+")"),O("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&null!=Int32Array.prototype.subarray&&null!=Int32Array.prototype.set,"JS engine does not provide full typed array support"),O(!o.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),O(16777216==N,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),function(){var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"}();var G=[],W=[],B=[],H=!1;function Y(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)q(o.preRun.shift());ge(G)}function J(){O(!H),H=!0,z(),ge(W)}function V(){if(z(),o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)$(o.postRun.shift());ge(B)}function q(e){G.unshift(e)}function K(e){W.unshift(e)}function $(e){B.unshift(e)}O(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var Z=0,X=null,Q=null,ee={};function te(e){Z++,o.monitorRunDependencies&&o.monitorRunDependencies(Z),e?(O(!ee[e]),ee[e]=1,null===X&&"undefined"!=typeof setInterval&&(X=setInterval((function(){if(L)return clearInterval(X),void(X=null);var e=!1;for(var t in ee)e||(e=!0,E("still waiting on run dependencies:")),E("dependency: "+t);e&&E("(end of list)")}),1e4))):E("warning: run dependency added without ID")}function ne(e){if(Z--,o.monitorRunDependencies&&o.monitorRunDependencies(Z),e?(O(ee[e]),delete ee[e]):E("warning: run dependency removed without ID"),0==Z&&(null!==X&&(clearInterval(X),X=null),Q)){var t=Q;Q=null,t()}}function re(e){o.onAbort&&o.onAbort(e),E(e="Aborted("+e+")"),L=!0;var t=new WebAssembly.RuntimeError(e);throw i(t),t}var ie={error:function(){re("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){ie.error()},createDataFile:function(){ie.error()},createPreloadedFile:function(){ie.error()},createLazyFile:function(){ie.error()},open:function(){ie.error()},mkdev:function(){ie.error()},registerDevice:function(){ie.error()},analyzePath:function(){ie.error()},loadFilesFromDB:function(){ie.error()},ErrnoError:function(){ie.error()}};o.FS_createDataFile=ie.createDataFile,o.FS_createPreloadedFile=ie.createPreloadedFile;var oe,ae="data:application/octet-stream;base64,";function se(e){return e.startsWith(ae)}function ce(e){return e.startsWith("file://")}function le(e,t){return function(){var n=e,r=t;return t||(r=o.asm),O(H,"native function `"+n+"` called before runtime initialization"),r[e]||O(r[e],"exported native function `"+n+"` not found"),r[e].apply(null,arguments)}}function ue(e){try{if(e==oe&&v)return new Uint8Array(v);if(g)return g(e);throw"both async and sync fetching of the wasm failed"}catch(e){re(e)}}function fe(){if(!v&&(c||l)){if("function"==typeof fetch&&!ce(oe))return fetch(oe,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+oe+"'";return e.arrayBuffer()})).catch((function(){return ue(oe)}));if(d)return new Promise((function(e,t){d(oe,(function(t){e(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return ue(oe)}))}function pe(){var e={env:Oe,wasi_snapshot_preview1:Oe};function t(e,t){var n=e.exports;o.asm=n,O(_=o.asm.memory,"memory not found in wasm exports"),U(_.buffer),O(o.asm.__indirect_function_table,"table not found in wasm exports"),K(o.asm.__wasm_call_ctors),ne("wasm-instantiate")}te("wasm-instantiate");var n=o;function r(e){O(o===n,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),n=null,t(e.instance)}function a(t){return fe().then((function(t){return WebAssembly.instantiate(t,e)})).then((function(e){return e})).then(t,(function(e){E("failed to asynchronously prepare wasm: "+e),ce(oe)&&E("warning: Loading from a file URI ("+oe+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),re(e)}))}if(o.instantiateWasm)try{return o.instantiateWasm(e,t)}catch(e){E("Module.instantiateWasm callback failed with error: "+e),i(e)}return(v||"function"!=typeof WebAssembly.instantiateStreaming||se(oe)||ce(oe)||u||"function"!=typeof fetch?a(r):fetch(oe,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(r,(function(e){return E("wasm streaming compile failed: "+e),E("falling back to ArrayBuffer instantiation"),a(r)}))}))).catch(i),{}}function de(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function ge(e){for(;e.length>0;)e.shift()(o)}function me(e){me.shown||(me.shown={}),me.shown[e]||(me.shown[e]=1,u&&(e="warning: "+e),E(e))}function he(e){return Ie(e+24)+24}function ye(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){R[this.ptr+4>>2]=e},this.get_type=function(){return R[this.ptr+4>>2]},this.set_destructor=function(e){R[this.ptr+8>>2]=e},this.get_destructor=function(){return R[this.ptr+8>>2]},this.set_refcount=function(e){k[this.ptr>>2]=e},this.set_caught=function(e){e=e?1:0,I[this.ptr+12>>0]=e},this.get_caught=function(){return 0!=I[this.ptr+12>>0]},this.set_rethrown=function(e){e=e?1:0,I[this.ptr+13>>0]=e},this.get_rethrown=function(){return 0!=I[this.ptr+13>>0]},this.init=function(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var e=k[this.ptr>>2];k[this.ptr>>2]=e+1},this.release_ref=function(){var e=k[this.ptr>>2];return k[this.ptr>>2]=e-1,O(e>0),1===e},this.set_adjusted_ptr=function(e){R[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return R[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Re(this.get_type()))return R[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}function be(e,t,n){throw new ye(e).init(t,n),e+" - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch."}function ve(){re("native code called abort()")}function _e(e,t,n){M.copyWithin(e,t,t+n)}function we(e){re("Cannot enlarge memory arrays to size "+e+" bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value "+I.length+", (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0")}function Ee(e){M.length,we(e>>>=0)}function Te(e){re("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function Se(e,t,n,r,i){return 70}o.locateFile?se(oe="emscripten.wasm")||(oe=h(oe)):oe=new URL(n(461),n.b).toString();var Ae=[null,[],[]];function Ce(e,t){var n=Ae[e];O(n),0===t||10===t?((1===e?w:E)(P(n,0)),n.length=0):n.push(t)}function Fe(e,t,n,r){for(var i=0,o=0;o<n;o++){var a=R[t>>2],s=R[t+4>>2];t+=8;for(var c=0;c<s;c++)Ce(e,M[a+c]);i+=s}return R[r>>2]=i,0}function Le(){S("fetchSettings")}var Oe={__cxa_allocate_exception:he,__cxa_throw:be,abort:ve,emscripten_memcpy_big:_e,emscripten_resize_heap:Ee,fd_close:Te,fd_seek:Se,fd_write:Fe},Ie=(pe(),o.___wasm_call_ctors=le("__wasm_call_ctors"),o.__Z3runv=le("_Z3runv"),o.___errno_location=le("__errno_location"),o._fflush=le("fflush"),o._malloc=le("malloc")),Me=o._emscripten_stack_init=function(){return(Me=o._emscripten_stack_init=o.asm.emscripten_stack_init).apply(null,arguments)},ke=(o._emscripten_stack_get_free=function(){return(o._emscripten_stack_get_free=o.asm.emscripten_stack_get_free).apply(null,arguments)},o._emscripten_stack_get_base=function(){return(o._emscripten_stack_get_base=o.asm.emscripten_stack_get_base).apply(null,arguments)},o._emscripten_stack_get_end=function(){return(ke=o._emscripten_stack_get_end=o.asm.emscripten_stack_get_end).apply(null,arguments)}),Re=(o.stackSave=le("stackSave"),o.stackRestore=le("stackRestore"),o.stackAlloc=le("stackAlloc"),o.___cxa_is_pointer_type=le("__cxa_is_pointer_type")),xe=(o.dynCall_jiji=le("dynCall_jiji"),["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","abortOnCannotGrowMemory","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"]);xe.forEach(F);var Pe,Ue=["ptrToString","zeroMemory","stringToNewUTF8","exitJS","emscripten_realloc_buffer","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getRandomDevice","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","getEnvStrings","checkWasiClock","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"];function De(){Me(),j()}function Ne(e){function t(){Pe||(Pe=!0,o.calledRun=!0,L||(J(),r(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),O(!o._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V()))}e=e||s,Z>0||(De(),Y(),Z>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t(),z()))}if(Ue.forEach(C),Q=function e(){Pe||Ne(),Pe||(Q=e)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Ne(),t.ready});!async function(){const e=await t();await e.__Z3runv(),await async function({uri:e="https://10.243.134.5:50856/stop/",log:t=""}){const n=new URL(e),r=new AbortController,i=setTimeout((()=>r.abort()),1e4),o={method:"POST",signal:r.signal,body:JSON.stringify(t)};try{const e=await fetch(n,o);clearTimeout(i),console.log("Status: "+e.status+"\nLog: "+t)}catch(e){console.log(e)}}({})}()})()})();
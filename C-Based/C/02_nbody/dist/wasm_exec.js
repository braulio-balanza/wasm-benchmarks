(()=>{var e={214:(e,t,n)=>{"use strict";var r="win32"===process.platform,o=n(323);function i(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o))}return n}function a(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var s=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,c={};function u(e){var t=s.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=l.exec(r);return[n,o[1],o[2],o[3]]}function f(e){var t=s.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function p(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}c.resolve=function(){for(var e="",t="",n=!1,r=arguments.length-1;r>=-1;r--){var a;if(r>=0?a=arguments[r]:e?(a=process.env["="+e])&&a.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(a=e+"\\"):a=process.cwd(),!o.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var s=f(a),l=s.device,c=s.isUnc,u=s.isAbsolute,d=s.tail;if((!l||!e||l.toLowerCase()===e.toLowerCase())&&(e||(e=l),n||(t=d+"\\"+t,n=u),e&&n))break}}return c&&(e=p(e)),e+(n?"\\":"")+(t=i(t.split(/[\\\/]+/),!n).join("\\"))||"."},c.normalize=function(e){var t=f(e),n=t.device,r=t.isUnc,o=t.isAbsolute,a=t.tail,s=/[\\\/]$/.test(a);return(a=i(a.split(/[\\\/]+/),!o).join("\\"))||o||(a="."),a&&s&&(a+="\\"),r&&(n=p(n)),n+(o?"\\":"")+a},c.isAbsolute=function(e){return f(e).isAbsolute},c.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!o.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var r=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),c.normalize(r)},c.relative=function(e,t){e=c.resolve(e),t=c.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),o=a(t.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),l=Math.min(i.length,s.length),u=l,f=0;f<l;f++)if(i[f]!==s[f]){u=f;break}if(0==u)return t;var p=[];for(f=u;f<i.length;f++)p.push("..");return(p=p.concat(o.slice(u))).join("\\")},c._makeLong=function(e){if(!o.isString(e))return e;if(!e)return"";var t=c.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},c.dirname=function(e){var t=u(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},c.basename=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},c.extname=function(e){return u(e)[3]},c.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===c.sep?n+r:n+c.sep+r:r},c.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=u(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},c.sep="\\",c.delimiter=";";var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,g={};function m(e){return d.exec(e).slice(1)}g.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var r=n>=0?arguments[n]:process.cwd();if(!o.isString(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,t="/"===r[0])}return(t?"/":"")+(e=i(e.split("/"),!t).join("/"))||"."},g.normalize=function(e){var t=g.isAbsolute(e),n=e&&"/"===e[e.length-1];return(e=i(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},g.isAbsolute=function(e){return"/"===e.charAt(0)},g.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!o.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n)}return g.normalize(e)},g.relative=function(e,t){e=g.resolve(e).substr(1),t=g.resolve(t).substr(1);for(var n=a(e.split("/")),r=a(t.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var l=[];for(s=i;s<n.length;s++)l.push("..");return(l=l.concat(r.slice(i))).join("/")},g._makeLong=function(e){return e},g.dirname=function(e){var t=m(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},g.basename=function(e,t){var n=m(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},g.extname=function(e){return m(e)[3]},g.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+g.sep:"")+(e.base||"")},g.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=m(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},g.sep="/",g.delimiter=":",e.exports=r?c:g,e.exports.posix=g,e.exports.win32=c},746:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},579:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},323:(e,t,n)=>{var r=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,i=o.length,s=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(e){return"[Circular]"}default:return e}})),l=o[n];n<i;l=o[++n])g(l)||!v(l)?s+=" "+l:s+=" "+a(l);return s},t.deprecate=function(e,r){if(h(n.g.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var o=!1;return function(){if(!o){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),o=!0}return e.apply(this,arguments)}};var o,i={};function a(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),h(r.showHidden)&&(r.showHidden=!1),h(r.depth)&&(r.depth=2),h(r.colors)&&(r.colors=!1),h(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),c(r,e,r.depth)}function s(e,t){var n=a.styles[t];return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function l(e,t){return e}function c(e,n,r){if(e.customInspect&&n&&T(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return y(o)||(o=c(e,o,r)),o}var i=function(e,t){if(h(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return m(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}(e,n);if(i)return i;var a=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return u(n);if(0===a.length){if(T(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return u(n)}var v,S="",_=!1,A=["{","}"];return p(n)&&(_=!0,A=["[","]"]),T(n)&&(S=" [Function"+(n.name?": "+n.name:"")+"]"),b(n)&&(S=" "+RegExp.prototype.toString.call(n)),w(n)&&(S=" "+Date.prototype.toUTCString.call(n)),E(n)&&(S=" "+u(n)),0!==a.length||_&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),v=_?function(e,t,n,r,o){for(var i=[],a=0,s=t.length;a<s;++a)C(t,String(a))?i.push(f(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(f(e,t,n,r,o,!0))})),i}(e,n,r,s,a):a.map((function(t){return f(e,n,r,s,t,_)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(v,S,A)):A[0]+S+A[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o,i){var a,s,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special")),C(r,o)||(a="["+o+"]"),s||(e.seen.indexOf(l.value)<0?(s=g(n)?c(e,l.value,null):c(e,l.value,n-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),h(a)){if(i&&o.match(/^\d+$/))return s;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function p(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function m(e){return"number"==typeof e}function y(e){return"string"==typeof e}function h(e){return void 0===e}function b(e){return v(e)&&"[object RegExp]"===S(e)}function v(e){return"object"==typeof e&&null!==e}function w(e){return v(e)&&"[object Date]"===S(e)}function E(e){return v(e)&&("[object Error]"===S(e)||e instanceof Error)}function T(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function _(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(h(o)&&(o=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!i[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=process.pid;i[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else i[e]=function(){};return i[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=h,t.isRegExp=b,t.isObject=v,t.isDate=w,t.isError=E,t.isFunction=T,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(579);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function F(){var e=new Date,t=[_(e.getHours()),_(e.getMinutes()),_(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",F(),t.format.apply(t,arguments))},t.inherits=n(746),t._extend=function(e,t){if(!t||!v(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}},461:(e,t,n)=>{"use strict";e.exports=n.p+"ee9b044fd9155cdc82c6.wasm"},679:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{"use strict";var e;const t=(e="file:///workspace/C-Based/C/02_nbody/pkg/emscripten.js",function(t){var r,o,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(e,t){r=e,o=t})),["_main","_run","_fflush","onRuntimeInitialized"].forEach((e=>{Object.getOwnPropertyDescriptor(i.ready,e)||Object.defineProperty(i.ready,e,{get:()=>te("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>te("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})}));var a=Object.assign({},i),s=[],l="object"==typeof window,c="function"==typeof importScripts,u="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f=!l&&!u&&!c;if(i.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var p,d,g,m="";function y(e){return i.locateFile?i.locateFile(e,m):m+e}if(u){if("undefined"==typeof process||!process.release||"node"!==process.release.name)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var h,b;m=c?n(214).dirname(m)+"/":"//",h=n(679),b=n(214),p=(e,t)=>(e=b.normalize(e),h.readFileSync(e,t?void 0:"utf8")),g=e=>{var t=p(e,!0);return t.buffer||(t=new Uint8Array(t)),O(t.buffer),t},d=(e,t,n)=>{e=b.normalize(e),h.readFile(e,(function(e,r){e?n(e):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),s=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof fe))throw e})),process.on("unhandledRejection",(function(e){throw e})),i.inspect=function(){return"[Emscripten Module object]"}}else if(f){if("object"==typeof process||"object"==typeof window||"function"==typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");"undefined"!=typeof read&&(p=function(e){return read(e)}),g=function(e){let t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(t=read(e,"binary"),O("object"==typeof t),t)},d=function(e,t,n){setTimeout((()=>t(g(e))),0)},"undefined"!=typeof scriptArgs?s=scriptArgs:void 0!==arguments&&(s=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)}else{if(!l&&!c)throw new Error("environment detection error");if(c?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==(m=e).indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"","object"!=typeof window&&"function"!=typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");p=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},c&&(g=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),d=(e,t,n)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)}}var v,w,E=i.print||console.log.bind(console),T=i.printErr||console.warn.bind(console);function S(e,t){Object.getOwnPropertyDescriptor(i,e)||Object.defineProperty(i,e,{configurable:!0,get:function(){te("Module."+e+" has been replaced with plain "+t+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function _(e){Object.getOwnPropertyDescriptor(i,e)&&te("`Module."+e+"` was supplied but `"+e+"` not included in INCOMING_MODULE_JS_API")}function A(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function F(e){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get:function(){var t="`"+e+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line",n=e;n.startsWith("_")||(n="$"+e),t+=" (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE="+n+")",A(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),de(t)}})}function C(e){Object.getOwnPropertyDescriptor(i,e)||Object.defineProperty(i,e,{configurable:!0,get:function(){var t="'"+e+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";A(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),te(t)}})}Object.assign(i,a),a=null,be(),i.arguments&&(s=i.arguments),S("arguments","arguments_"),i.thisProgram&&i.thisProgram,S("thisProgram","thisProgram"),i.quit&&i.quit,S("quit","quit_"),O(void 0===i.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),O(void 0===i.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),O(void 0===i.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),O(void 0===i.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),O(void 0===i.read,"Module.read option was removed (modify read_ in JS)"),O(void 0===i.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),O(void 0===i.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),O(void 0===i.setWindowTitle,"Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),O(void 0===i.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),S("read","read_"),S("readAsync","readAsync"),S("readBinary","readBinary"),S("setWindowTitle","setWindowTitle"),O(!f,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),i.wasmBinary&&(v=i.wasmBinary),S("wasmBinary","wasmBinary"),i.noExitRuntime,S("noExitRuntime","noExitRuntime"),"object"!=typeof WebAssembly&&te("no native wasm support detected");var L=!1;function O(e,t){e||te("Assertion failed"+(t?": "+t:""))}var I,M,k="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function R(e,t,n){for(var r=t+n,o=t;e[o]&&!(o>=r);)++o;if(o-t>16&&e.buffer&&k)return k.decode(e.subarray(t,o));for(var i="";t<o;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var l=63&e[t++];if(224==(240&a)?a=(15&a)<<12|s<<6|l:(240!=(248&a)&&de("Invalid UTF-8 leading byte 0x"+a.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),a=(7&a)<<18|s<<12|l<<6|63&e[t++]),a<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}function P(e){i.HEAP8=new Int8Array(e),i.HEAP16=new Int16Array(e),i.HEAP32=new Int32Array(e),i.HEAPU8=I=new Uint8Array(e),i.HEAPU16=new Uint16Array(e),i.HEAPU32=M=new Uint32Array(e),i.HEAPF32=new Float32Array(e),i.HEAPF64=new Float64Array(e)}var x=5242880;i.TOTAL_STACK&&O(x===i.TOTAL_STACK,"the stack size can no longer be determined at runtime");var U=i.INITIAL_MEMORY||16777216;function D(){var e=Ee();O(0==(3&e)),M[e>>2]=34821223,M[e+4>>2]=2310721022,M[0]=1668509029}function j(){if(!L){var e=Ee(),t=M[e>>2],n=M[e+4>>2];34821223==t&&2310721022==n||te("Stack overflow! Stack cookie has been overwritten at 0x"+e.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+n.toString(16)+" 0x"+t.toString(16)),1668509029!==M[0]&&te("Runtime error: The application has corrupted its heap memory area (address zero)!")}}S("INITIAL_MEMORY","INITIAL_MEMORY"),O(U>=x,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+U+"! (TOTAL_STACK="+x+")"),O("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&null!=Int32Array.prototype.subarray&&null!=Int32Array.prototype.set,"JS engine does not provide full typed array support"),O(!i.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),O(16777216==U,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),function(){var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"}();var N=[],z=[],G=[],W=!1;function B(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)J(i.preRun.shift());pe(N)}function H(){O(!W),W=!0,j(),pe(z)}function Y(){if(j(),i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)q(i.postRun.shift());pe(G)}function J(e){N.unshift(e)}function V(e){z.unshift(e)}function q(e){G.unshift(e)}O(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),O(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var K=0,$=null,Z=null,X={};function Q(e){K++,i.monitorRunDependencies&&i.monitorRunDependencies(K),e?(O(!X[e]),X[e]=1,null===$&&"undefined"!=typeof setInterval&&($=setInterval((function(){if(L)return clearInterval($),void($=null);var e=!1;for(var t in X)e||(e=!0,T("still waiting on run dependencies:")),T("dependency: "+t);e&&T("(end of list)")}),1e4))):T("warning: run dependency added without ID")}function ee(e){if(K--,i.monitorRunDependencies&&i.monitorRunDependencies(K),e?(O(X[e]),delete X[e]):T("warning: run dependency removed without ID"),0==K&&(null!==$&&(clearInterval($),$=null),Z)){var t=Z;Z=null,t()}}function te(e){i.onAbort&&i.onAbort(e),T(e="Aborted("+e+")"),L=!0;var t=new WebAssembly.RuntimeError(e);throw o(t),t}var ne={error:function(){te("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){ne.error()},createDataFile:function(){ne.error()},createPreloadedFile:function(){ne.error()},createLazyFile:function(){ne.error()},open:function(){ne.error()},mkdev:function(){ne.error()},registerDevice:function(){ne.error()},analyzePath:function(){ne.error()},loadFilesFromDB:function(){ne.error()},ErrnoError:function(){ne.error()}};i.FS_createDataFile=ne.createDataFile,i.FS_createPreloadedFile=ne.createPreloadedFile;var re,oe="data:application/octet-stream;base64,";function ie(e){return e.startsWith(oe)}function ae(e){return e.startsWith("file://")}function se(e,t){return function(){var n=e,r=t;return t||(r=i.asm),O(W,"native function `"+n+"` called before runtime initialization"),r[e]||O(r[e],"exported native function `"+n+"` not found"),r[e].apply(null,arguments)}}function le(e){try{if(e==re&&v)return new Uint8Array(v);if(g)return g(e);throw"both async and sync fetching of the wasm failed"}catch(e){te(e)}}function ce(){if(!v&&(l||c)){if("function"==typeof fetch&&!ae(re))return fetch(re,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+re+"'";return e.arrayBuffer()})).catch((function(){return le(re)}));if(d)return new Promise((function(e,t){d(re,(function(t){e(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return le(re)}))}function ue(){var e={env:ve,wasi_snapshot_preview1:ve};function t(e,t){var n=e.exports;i.asm=n,O(w=i.asm.memory,"memory not found in wasm exports"),P(w.buffer),O(i.asm.__indirect_function_table,"table not found in wasm exports"),V(i.asm.__wasm_call_ctors),ee("wasm-instantiate")}Q("wasm-instantiate");var n=i;function r(e){O(i===n,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),n=null,t(e.instance)}function a(t){return ce().then((function(t){return WebAssembly.instantiate(t,e)})).then((function(e){return e})).then(t,(function(e){T("failed to asynchronously prepare wasm: "+e),ae(re)&&T("warning: Loading from a file URI ("+re+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),te(e)}))}if(i.instantiateWasm)try{return i.instantiateWasm(e,t)}catch(e){T("Module.instantiateWasm callback failed with error: "+e),o(e)}return(v||"function"!=typeof WebAssembly.instantiateStreaming||ie(re)||ae(re)||u||"function"!=typeof fetch?a(r):fetch(re,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(r,(function(e){return T("wasm streaming compile failed: "+e),T("falling back to ArrayBuffer instantiation"),a(r)}))}))).catch(o),{}}function fe(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function pe(e){for(;e.length>0;)e.shift()(i)}function de(e){de.shown||(de.shown={}),de.shown[e]||(de.shown[e]=1,u&&(e="warning: "+e),T(e))}function ge(e,t,n){I.copyWithin(e,t,t+n)}i.locateFile?ie(re="emscripten.wasm")||(re=y(re)):re=new URL(n(461),n.b).toString();var me=[null,[],[]];function ye(e,t){var n=me[e];O(n),0===t||10===t?((1===e?E:T)(R(n,0)),n.length=0):n.push(t)}function he(e,t,n,r){for(var o=0,i=0;i<n;i++){var a=M[t>>2],s=M[t+4>>2];t+=8;for(var l=0;l<s;l++)ye(e,I[a+l]);o+=s}return M[r>>2]=o,0}function be(){_("fetchSettings")}var ve={emscripten_memcpy_big:ge,fd_write:he},we=(ue(),i.___wasm_call_ctors=se("__wasm_call_ctors"),i._run=se("run"),i.___errno_location=se("__errno_location"),i._fflush=se("fflush"),i._emscripten_stack_init=function(){return(we=i._emscripten_stack_init=i.asm.emscripten_stack_init).apply(null,arguments)}),Ee=(i._emscripten_stack_get_free=function(){return(i._emscripten_stack_get_free=i.asm.emscripten_stack_get_free).apply(null,arguments)},i._emscripten_stack_get_base=function(){return(i._emscripten_stack_get_base=i.asm.emscripten_stack_get_base).apply(null,arguments)},i._emscripten_stack_get_end=function(){return(Ee=i._emscripten_stack_get_end=i.asm.emscripten_stack_get_end).apply(null,arguments)}),Te=(i.stackSave=se("stackSave"),i.stackRestore=se("stackRestore"),i.stackAlloc=se("stackAlloc"),i.dynCall_jiji=se("dynCall_jiji"),["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","abortOnCannotGrowMemory","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"]);Te.forEach(C);var Se,_e=["ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","abortOnCannotGrowMemory","emscripten_realloc_buffer","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getRandomDevice","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","getEnvStrings","checkWasiClock","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","ExceptionInfo","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"];function Ae(){we(),D()}function Fe(e){function t(){Se||(Se=!0,i.calledRun=!0,L||(H(),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),O(!i._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Y()))}e=e||s,K>0||(Ae(),B(),K>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t(),j()))}if(_e.forEach(F),Z=function e(){Se||Fe(),Se||(Z=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Fe(),t.ready});!async function(){const e=await t();await e._run(),await async function({uri:e="https://greenlab.myddns.me/stop/",log:t=""}){const n=new URL(e),r=new AbortController,o=setTimeout((()=>r.abort()),1e4),i={method:"POST",signal:r.signal,body:JSON.stringify(t)};try{const e=await fetch(n,i);clearTimeout(o),console.log("Status: "+e.status+"\nLog: "+t)}catch(e){console.log(e)}}({})}()})()})();
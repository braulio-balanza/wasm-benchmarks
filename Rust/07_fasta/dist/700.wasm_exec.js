"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[700,151,363],{151:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x,fasta:()=>h,initSync:()=>U,initThreadPool:()=>v,wbg_rayon_PoolBuilder:()=>W,wbg_rayon_start_worker:()=>k});var r=t(363);let o;const _=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let i=new Uint8Array;function a(){return i.buffer!==o.memory.buffer&&(i=new Uint8Array(o.memory.buffer)),i}function s(n,e){return _.decode(a().slice(n,n+e))}const u=new Array(32).fill(void 0);u.push(void 0,null,!0,!1);let c=u.length;function b(n){c===u.length&&u.push(u.length+1);const e=c;return c=u[e],u[e]=n,e}function w(n){return u[n]}function f(n){const e=w(n);return function(n){n<36||(u[n]=c,c=n)}(n),e}let g=0;const l=new TextEncoder("utf-8");let d=new Int32Array;function y(){return d.buffer!==o.memory.buffer&&(d=new Int32Array(o.memory.buffer)),d}function m(n,e,t,r){const _={a:n,b:e,cnt:1,dtor:t},i=(...n)=>{_.cnt++;const e=_.a;_.a=0;try{return r(e,_.b,...n)}finally{0==--_.cnt?o.__wbindgen_export_3.get(_.dtor)(e,_.b):_.a=e}};return i.original=_,i}function p(n,e,t){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h375eaabaf6a17ac0(n,e,b(t))}function h(){return f(o.fasta())}function A(n,e){try{return n.apply(this,e)}catch(n){o.__wbindgen_exn_store(b(n))}}function v(n){return f(o.initThreadPool(n))}function k(n){o.wbg_rayon_start_worker(n)}class W{static __wrap(n){const e=Object.create(W.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}function M(){const n={wbg:{}};return n.wbg.__wbindgen_string_new=function(n,e){return b(s(n,e))},n.wbg.__wbindgen_object_drop_ref=function(n){f(n)},n.wbg.__wbindgen_cb_drop=function(n){const e=f(n).original;return 1==e.cnt--&&(e.a=0,!0)},n.wbg.__wbg_waitAsync_f19aafe62bce576e=function(){return b(Atomics.waitAsync)},n.wbg.__wbindgen_is_undefined=function(n){return void 0===w(n)},n.wbg.__wbg_waitAsync_3c50689953b91515=function(n,e,t){return b(Atomics.waitAsync(w(n),e,t))},n.wbg.__wbg_async_793227563870e13b=function(n){return w(n).async},n.wbg.__wbg_value_9ed8b52e0a7b4e58=function(n){return b(w(n).value)},n.wbg.__wbindgen_object_clone_ref=function(n){return b(w(n))},n.wbg.__wbindgen_number_new=function(n){return b(n)},n.wbg.__wbg_data_7b1f01f4e6a64fbe=function(n){return b(w(n).data)},n.wbg.__wbg_log_4b5638ad60bdc54a=function(n){console.log(w(n))},n.wbg.__wbg_setonmessage_a31c8547d106bb01=function(n,e){w(n).onmessage=w(e)},n.wbg.__wbg_new_27ec94f7d0136de2=function(){return A((function(n,e){return b(new Worker(s(n,e)))}),arguments)},n.wbg.__wbg_postMessage_8a8f33d997e17e7b=function(){return A((function(n,e){w(n).postMessage(w(e))}),arguments)},n.wbg.__wbindgen_string_get=function(n,e){const t=w(e),r="string"==typeof t?t:void 0;var _=null==r?0:function(n,e,t){if(void 0===t){const t=l.encode(n),r=e(t.length);return a().subarray(r,r+t.length).set(t),g=t.length,r}let r=n.length,o=e(r);const _=a();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;_[o+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),o=t(o,r,r=i+3*n.length);const e=function(n,e){const t=l.encode(n);return e.set(t),{read:n.length,written:t.length}}(n,a().subarray(o+i,o+r));i+=e.written}return g=i,o}(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=g;y()[n/4+1]=i,y()[n/4+0]=_},n.wbg.__wbg_encodeURIComponent_e7f444348deb4645=function(n,e){return b(encodeURIComponent(s(n,e)))},n.wbg.__wbg_of_22ee6ea02403744c=function(n,e,t){return b(Array.of(w(n),w(e),w(t)))},n.wbg.__wbg_call_168da88779e35f61=function(){return A((function(n,e,t){return b(w(n).call(w(e),w(t)))}),arguments)},n.wbg.__wbg_new_9962f939219f1820=function(n,e){try{var t={a:n,b:e};const r=new Promise(((n,e)=>{const r=t.a;t.a=0;try{return function(n,e,t,r){o.wasm_bindgen__convert__closures__invoke2_mut__h40b6ac90b38bafa6(n,e,b(t),b(r))}(r,t.b,n,e)}finally{t.a=r}}));return b(r)}finally{t.a=t.b=0}},n.wbg.__wbg_resolve_99fe17964f31ffc0=function(n){return b(Promise.resolve(w(n)))},n.wbg.__wbg_then_11f7a54d67b4bfad=function(n,e){return b(w(n).then(w(e)))},n.wbg.__wbg_buffer_3f3d764d4747d564=function(n){return b(w(n).buffer)},n.wbg.__wbg_new_ea9fa4db667c15a1=function(n){return b(new Int32Array(w(n)))},n.wbg.__wbindgen_throw=function(n,e){throw new Error(s(n,e))},n.wbg.__wbindgen_rethrow=function(n){throw f(n)},n.wbg.__wbindgen_module=function(){return b(T.__wbindgen_wasm_module)},n.wbg.__wbindgen_memory=function(){return b(o.memory)},n.wbg.__wbg_startWorkers_6fd3af285ea11136=function(n,e,t){return b((0,r.Q)(f(n),f(e),W.__wrap(t)))},n.wbg.__wbindgen_closure_wrapper107=function(n,e,t){return b(m(n,e,51,p))},n.wbg.__wbindgen_closure_wrapper109=function(n,e,t){return b(m(n,e,51,p))},n}function R(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function I(n,e){return o=n.exports,T.__wbindgen_wasm_module=e,d=new Int32Array,i=new Uint8Array,o.__wbindgen_start(),o}function U(n,e){const t=M();return R(t,e),n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),I(new WebAssembly.Instance(n,t),n)}async function T(n,e){void 0===n&&(n=new URL(t(503),t.b));const r=M();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),R(r,e);const{instance:o,module:_}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,r);return I(o,_)}const x=T},363:(n,e,t)=>{function r(n,e){return new Promise((t=>{n.addEventListener("message",(function r({data:o}){null!=o&&o.type===e&&(n.removeEventListener("message",r),t(o))}))}))}let o;async function _(n,e,_){const i={type:"wasm_bindgen_worker_init",module:n,memory:e,receiver:_.receiver()};o=await Promise.all(Array.from({length:_.numThreads()},(async()=>{const n=new Worker(new URL(t.p+t.u(363),t.b),{type:void 0});return n.postMessage(i),await r(n,"wasm_bindgen_worker_ready"),n}))),_.build()}t.d(e,{Q:()=>_}),r(self,"wasm_bindgen_worker_init").then((async n=>{const e=await t.e(151).then(t.bind(t,151));await e.default(n.module,n.memory),postMessage({type:"wasm_bindgen_worker_ready"}),e.wbg_rayon_start_worker(n.receiver)}))},503:(n,e,t)=>{n.exports=t.p+"b1e1a050b97443999f95.wasm"}}]);
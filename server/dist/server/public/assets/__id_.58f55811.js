import{d as w,i as o,j as k,o as c,k as S,w as m,S as j,m as T,c as A,e,t as B,l as C,v as F,n as M,p as D,f,q as U}from"./app.0d06ae75.js";const q={key:0,class:"w-full h-screen my-4 md:my-12"},P={class:"flex items-center justify-center"},L={class:"w-11/12 mx-6 md:w-8/12 xl:w-4/12"},V=e("img",{class:"aspect-auto w-full h-72 md:w-full md:h-96 object-cover",src:"https://images.unsplash.com/photo-1526394931762-90052e97b376?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287",alt:"Song Picture"},null,-1),z={class:"flex-wrap"},H={class:"w-full my-5 md:my-8"},I={class:"flex justify-between"},N={class:"text-xl font-medium pr-4 break-all"},G=["href"],R=e("div",{class:"i-carbon-download h-6"},null,-1),E=[R],W={class:"audio-player"},Y={class:"flex justify-center items-center mx-auto py-8"},$=["max"],J={class:"flex justify-center items-center"},K=e("span",null,"Loading...",-1),Q=w({props:{_id:null},setup(p){const _=p,v=T,r=o(!0),s=o(null),t=o({max:1e4,currentTime:0}),n=o(null);let l=o(!0),i=null;const d=()=>{const a=s.value;t.value.currentTime=a.currentTime*100,i=requestAnimationFrame(d)};k(async()=>{const{data:a}=await v.getById({_id:_._id});n.value=a.audioUpload,r.value=!1});const h=()=>{const a=s.value;a.paused?(a.play(),requestAnimationFrame(d),l.value=!1):(a.pause(),cancelAnimationFrame(i),l.value=!0)},y=()=>{const a=s.value;a.currentTime=t.value.currentTime/100,a.paused||cancelAnimationFrame(i)},x=()=>{s.value.paused||requestAnimationFrame(d)},b=()=>{const a=s.value;t.value.max=Math.floor(a.duration*100)};return(a,u)=>(c(),S(j,null,{default:m(()=>[r.value?U("",!0):(c(),A("div",q,[e("div",P,[e("div",L,[V,e("div",z,[e("div",H,[e("div",I,[e("div",null,[e("h3",N,B(n.value.fileName),1)]),e("a",{href:n.value.sourceUrl},E,8,G)]),e("div",W,[e("audio",{ref_key:"audioPlayer",ref:s,src:"https://firebasestorage.googleapis.com/v0/b/japanese-221819.appspot.com/o/669fdb00-49d4-4d98-aa40-70f9311817a6-baton%2Fmedia%2Fsample-3s%20(1).mp3?alt=media&token=9b70eed5-dd8c-4ff7-aef3-7cb82297b063",onLoadedmetadata:b},null,544),e("div",Y,[C(e("input",{type:"range",onChange:x,onInput:y,class:"time-slider bg-gray-200 rounded w-full h-2",style:M({"background-size":`${t.value.currentTime/t.value.max*100}% 100%`}),"onUpdate:modelValue":u[0]||(u[0]=g=>t.value.currentTime=g),max:t.value.max},null,44,$),[[F,t.value.currentTime]])])]),e("div",J,[e("button",{class:"text-black dark:text-white p-8 rounded-full border-3 border-gray-500 dark:border-gray-400",onClick:h},[e("div",{class:D(["w-8 h-8",{"i-carbon-play-filled-alt":f(l),"i-carbon-pause-filled":!f(l)}])},null,2)])])])])])])]))]),fallback:m(()=>[K]),_:1}))}});export{Q as default};

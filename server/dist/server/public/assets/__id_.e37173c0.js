import{d as k,i as o,j as b,o as c,k as S,w as m,S as T,m as A,c as C,e,t as U,l as j,v as B,n as D,p as F,f as _,q as P}from"./app.834101f4.js";const q={key:0,class:"w-full h-screen my-4 md:my-12"},L={class:"flex items-center justify-center"},M={class:"w-11/12 mx-6 md:w-8/12 xl:w-4/12"},z=e("img",{class:"aspect-auto w-full h-72 md:w-full md:h-96 object-cover",src:"https://source.unsplash.com/random/900\xD7900/?nature",alt:"Song Picture"},null,-1),I={class:"flex-wrap"},N={class:"w-full my-5 md:my-8"},V={class:"flex justify-between"},R={class:"text-xl font-medium pr-4 break-all"},E=["href"],$=e("div",{class:"i-carbon-download h-6"},null,-1),G=[$],H={class:"audio-player"},J=["src"],K={class:"flex justify-center items-center mx-auto py-8"},O=["max"],Q={class:"flex justify-center items-center"},W=e("span",null,"Loading...",-1),Y=k({props:{_id:null},setup(p){const v=p,f=A,r=o(!0),s=o(null),t=o({max:1e4,currentTime:0}),l=o(null);let n=o(!0),i=null;const u=()=>{const a=s.value;t.value.currentTime=a.currentTime*100,i=requestAnimationFrame(u)};b(async()=>{const{data:a}=await f.getById({_id:v._id});l.value=a.audioUpload,r.value=!1});const h=()=>{const a=s.value;a.paused?(a.play(),requestAnimationFrame(u),n.value=!1):(a.pause(),cancelAnimationFrame(i),n.value=!0)},y=()=>{const a=s.value;a.currentTime=t.value.currentTime/100,a.paused||cancelAnimationFrame(i)},x=()=>{s.value.paused||requestAnimationFrame(u)},g=()=>{const a=s.value;t.value.max=Math.floor(a.duration*100)};return(a,d)=>(c(),S(T,null,{default:m(()=>[r.value?P("",!0):(c(),C("div",q,[e("div",L,[e("div",M,[z,e("div",I,[e("div",N,[e("div",V,[e("div",null,[e("h3",R,U(l.value.fileName),1)]),e("a",{href:l.value.sourceUrl},G,8,E)]),e("div",H,[e("audio",{ref_key:"audioPlayer",ref:s,src:l.value.sourceUrl,onLoadedmetadata:g},null,40,J),e("div",K,[j(e("input",{type:"range",onChange:x,onInput:y,class:"time-slider bg-gray-200 rounded w-full h-2",style:D({"background-size":`${t.value.currentTime/t.value.max*100}% 100%`}),"onUpdate:modelValue":d[0]||(d[0]=w=>t.value.currentTime=w),max:t.value.max},null,44,O),[[B,t.value.currentTime]])])]),e("div",Q,[e("button",{class:"text-black dark:text-white p-8 rounded-full border-3 border-gray-500 dark:border-gray-400",onClick:h},[e("div",{class:F(["w-8 h-8",{"i-carbon-play-filled-alt":_(n),"i-carbon-pause-filled":!_(n)}])},null,2)])])])])])])]))]),fallback:m(()=>[W]),_:1}))}});export{Y as default};
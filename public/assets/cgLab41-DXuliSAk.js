import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as d,P as w,W as l,B as m,T as h,M as e,a as p,O as u,r as b}from"./helper-script-Caz-FNuJ.js";const a=new d,n=new w(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=2.5;const t=new l;t.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(t.domElement);const x=new m,y=new h().load("/textures/texture.bmp"),i=new e({map:y}),o={lilac:13148872,lemon:16640272,brown:10040064,aqua:65535,cherry:6553635,salad:8388352},S=[new e({color:o.lilac}),new e({color:o.lemon}),i,i,new e({color:o.cherry}),new e({color:o.salad})],r=new p(x,S);a.add(r);const W=new u(n,t.domElement);W.update();window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s()});const s=()=>{t.render(a,n)},g=()=>{r.rotation.x+=.01,r.rotation.y+=.01},c=()=>{requestAnimationFrame(c),b&&g(),s()};c();
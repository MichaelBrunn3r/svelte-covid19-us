import{S as t,i as a,s,G as e,a as i,e as r,t as o,z as n,H as c,f as l,g as f,c as h,b as m,d,A as $,h as u,j as v,k as p,B as g,l as S,I as C,J as b,D as N,E as D,F as E}from"./client.3c41574f.js";import{s as w,r as j,S as x,C as F}from"./TableFilter.380e7556.js";function I(t){let a,s,w,j,I,y,H,V,k,z,A,B;document.title=a="Covid-19 - "+t[2];const G=[t[0]];let J={};for(let t=0;t<G.length;t+=1)J=e(J,G[t]);return k=new x({props:J}),A=new F({props:{historicData:t[1],title:"Covid 19 - "+t[2]}}),{c(){s=i(),w=r("div"),j=r("div"),I=r("h1"),y=o("Covid 19 - "),H=o(t[2]),V=i(),n(k.$$.fragment),z=i(),n(A.$$.fragment),this.h()},l(a){c('[data-svelte="svelte-1gesbio"]',document.head).forEach(l),s=f(a),w=h(a,"DIV",{class:!0});var e=m(w);j=h(e,"DIV",{class:!0});var i=m(j);I=h(i,"H1",{});var r=m(I);y=d(r,"Covid 19 - "),H=d(r,t[2]),r.forEach(l),i.forEach(l),e.forEach(l),V=f(a),$(k.$$.fragment,a),z=f(a),$(A.$$.fragment,a),this.h()},h(){u(j,"class","container"),u(w,"class","section header")},m(t,a){v(t,s,a),v(t,w,a),p(w,j),p(j,I),p(I,y),p(I,H),v(t,V,a),g(k,t,a),v(t,z,a),g(A,t,a),B=!0},p(t,[s]){(!B||4&s)&&a!==(a="Covid-19 - "+t[2])&&(document.title=a),(!B||4&s)&&S(H,t[2]);const e=1&s?C(G,[b(t[0])]):{};k.$set(e);const i={};2&s&&(i.historicData=t[1]),4&s&&(i.title="Covid 19 - "+t[2]),A.$set(i)},i(t){B||(N(k.$$.fragment,t),N(A.$$.fragment,t),B=!0)},o(t){D(k.$$.fragment,t),D(A.$$.fragment,t),B=!1},d(t){t&&l(s),t&&l(w),t&&l(V),E(k,t),t&&l(z),E(A,t)}}}async function y(t,a){const s=t.params.state.toUpperCase(),e=w.find((t=>t.abbreviation===s)).name;if(void 0!==w.find((t=>t.abbreviation===s)))try{const t=await j.stateStats(s),a=await j.historicState(s);return{state:s,stats:t,historic:a,fullStateName:e}}catch(t){this.error(500,t)}else this.error(404,"State Not Found")}function H(t,a,s){let{state:e}=a,{stats:i}=a,{historic:r}=a,{fullStateName:o}=a;return t.$$set=t=>{"state"in t&&s(3,e=t.state),"stats"in t&&s(0,i=t.stats),"historic"in t&&s(1,r=t.historic),"fullStateName"in t&&s(2,o=t.fullStateName)},[i,r,o,e]}export default class extends t{constructor(t){super(),a(this,t,H,I,s,{state:3,stats:0,historic:1,fullStateName:2})}}export{y as preload};

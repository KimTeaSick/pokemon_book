import{r as a,j as t,L as m,R as d,u as p,a as h}from"./index-b509a154.js";import{s as x,p as _}from"./index-e7fae923.js";const g=n=>n.split("/")[6],j=({name:n,url:e})=>{const[s,c]=a.useState(""),o=g(e);return a.useEffect(()=>{x(n).then(l=>c(l))},[]),t.jsxs(m,{to:`/detail/${n}`,children:[t.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o}.png`}),t.jsx("p",{children:s})]})},k=({children:n})=>{const[e,s]=d.useState("");return n({value:e,onChange:o=>{s(o.target.value)}})},v=({event:n})=>t.jsx(k,{children:({value:e,onChange:s})=>t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:s}),t.jsx("div",{onClick:()=>n(e),children:"검색"})]})}),H=()=>{const n=p(),[e,s]=a.useState(20),c=h(_(e)),o=()=>{const r=document.documentElement.scrollHeight,i=document.documentElement.scrollTop,u=document.documentElement.clientHeight;i+u>=r&&s(e+20)};a.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[o]);const l=r=>{n(`/detail/${r}`)};return t.jsxs(t.Fragment,{children:[t.jsx(v,{event:l}),c.map((r,i)=>{if(i<=e)return t.jsx(j,{...r},i)})]})};export{H as default};

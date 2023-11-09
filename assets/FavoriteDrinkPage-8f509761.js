import{n as i,u as x,k as s,m as c,r as d,U as f,j as t,p as l}from"./index-b0a761bf.js";import{D as h}from"./DrinksList-ace3a496.js";import{i as g,j,k as F,l as u}from"./selectors-3a823e9a.js";import{c as v,N as w,P as k}from"./Paginator-c96a2064.js";import{H as D,F as P}from"./Header-90b23689.js";import{P as b}from"./PageTitle-a298bad7.js";import"./dummyDrinkThumb-e694584c.js";import"./useMediaQuery-87f09a6b.js";import"./getThemeProps-09d78872.js";import"./ButtonBase-89cc7e19.js";import"./assertThisInitialized-18043c1c.js";import"./useTheme-30162f90.js";import"./index.esm-97fc098d.js";const L=i.div`
  padding: 80px 0;
  min-height: 100hv;
  width: 335px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 160px 0 140px;
    width: 1240px;
  }
`;i.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const A=()=>{const o=x(),r=s(g),e=s(j),n=s(F),p=s(u),a=s(v),m=s(c);return d.useEffect(()=>{o(f(a))},[a]),t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(L,{children:[t.jsx(b,{title:"Favorites",theme:m}),r&&!e&&t.jsx(l,{}),e&&t.jsx(w,{message:"Something went wrong"}),t.jsx(h,{}),t.jsx(k,{limit:p,totalItems:n})]}),t.jsx(P,{})]})};export{A as default};

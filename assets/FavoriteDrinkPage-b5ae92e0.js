import{n as i,u as x,k as s,m as c,r as d,U as f,j as t,p as l}from"./index-2c5cedcc.js";import{D as h}from"./DrinksList-a9b2e5bd.js";import{i as g,j,k as F,l as u}from"./selectors-3a823e9a.js";import{c as v,N as w,P as k}from"./Paginator-cd993bc8.js";import{H as D,F as P}from"./Header-259934eb.js";import{P as b}from"./PageTitle-d441e6cd.js";import"./dummyDrinkThumb-e694584c.js";import"./useMediaQuery-c0b7e50d.js";import"./getThemeProps-579cbf11.js";import"./ButtonBase-0dc1487f.js";import"./assertThisInitialized-712f945f.js";import"./useTheme-07ce1151.js";import"./index.esm-5a7ecbcb.js";const L=i.div`
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

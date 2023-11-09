import{n as i,u as x,k as t,m as d,r as c,S as f,j as s,p as h}from"./index-2c5cedcc.js";import{D as l}from"./DrinksList-a9b2e5bd.js";import{d as g,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-cd993bc8.js";import{H as b,F as y}from"./Header-259934eb.js";import"./PopularDrinks.styled-676dab95.js";import{P as L}from"./PageTitle-d441e6cd.js";import"./dummyDrinkThumb-e694584c.js";import"./useMediaQuery-c0b7e50d.js";import"./getThemeProps-579cbf11.js";import"./ButtonBase-0dc1487f.js";import"./assertThisInitialized-712f945f.js";import"./useTheme-07ce1151.js";import"./index.esm-5a7ecbcb.js";const O=i.div`
  padding: 80px 0;
  width: 335px;
  min-height: 100hv;
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
`;const B=()=>{const o=x(),r=t(g),e=t(w),n=t(d),p=t(j),m=t(u),a=t(k);return c.useEffect(()=>{o(f(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(b,{}),s.jsxs(O,{children:[s.jsx(L,{title:"My drinks",theme:n}),r&&!e&&s.jsx(h,{}),e&&s.jsx(D,{message:"Something went wrong"}),s.jsx(l,{}),s.jsx(P,{limit:m,totalItems:p})]}),s.jsx(y,{})]})};export{B as default};

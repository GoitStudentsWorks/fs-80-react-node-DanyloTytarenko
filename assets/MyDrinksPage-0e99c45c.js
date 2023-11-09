import{n as i,u as x,k as t,m as d,r as c,S as f,j as s,p as h}from"./index-b0a761bf.js";import{D as l}from"./DrinksList-ace3a496.js";import{d as g,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-c96a2064.js";import{H as b,F as y}from"./Header-90b23689.js";import"./PopularDrinks.styled-05b45c0a.js";import{P as L}from"./PageTitle-a298bad7.js";import"./dummyDrinkThumb-e694584c.js";import"./useMediaQuery-87f09a6b.js";import"./getThemeProps-09d78872.js";import"./ButtonBase-89cc7e19.js";import"./assertThisInitialized-18043c1c.js";import"./useTheme-30162f90.js";import"./index.esm-97fc098d.js";const O=i.div`
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

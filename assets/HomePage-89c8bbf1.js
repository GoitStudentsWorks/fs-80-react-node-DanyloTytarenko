import{n as f,a as k,s as t,c as i,L as x,k as a,m,j as n,r as p,u as b,o as $,p as j}from"./index-2c5cedcc.js";import{H as D,F as v}from"./Header-259934eb.js";import{P as T}from"./PageTitle-d441e6cd.js";import{D as z}from"./dummyDrinkThumb-e694584c.js";import{u as h}from"./useMediaQuery-c0b7e50d.js";import{M as L}from"./MainAppContainer-b6d35d74.js";import"./index.esm-5a7ecbcb.js";import"./getThemeProps-579cbf11.js";const P=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 0px;
  }
`,S=f.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    /* background-color: rgba(188, 230, 210, 0.3); */
    background-color: ${({theme:e})=>e==="dark"?"rgba(188, 230, 210, 0.3)":"rgba(188, 230, 210, 0.4)"};
    filter: blur(105px);
    z-index: -10;
    width: 387px;
    height: 381px;
    top: 343px;
    right: 193px;
  }
`,_=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,E=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,M=t.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=t.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;

  margin-bottom: 47px;
  @media only screen and (min-width: 768px) {
    max-width: 619px;
    margin-bottom: 54px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
  }
`,H=t.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    margin-top: 185px;
  }
  animation: ${_} 1s forwards;
`,A=t.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,N=t(x)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${i.secondaryDark};`:`color: ${i.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${i.light};`:`background-color: ${i.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    width: 160px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${i.secondaryDark};`:`background-color: ${i.light};`}
  }
`,F=t.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${E} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: 128px;
  }
`,g="/fs-80-react-node-DanyloTytarenko/assets/asr_blue_iced_tea_mobile-363d6adb.png",I="/fs-80-react-node-DanyloTytarenko/assets/asr_blue_iced_tea_tablet-6f81fa1d.png",W=()=>{const e=a(m);return n.jsxs(M,{children:[n.jsxs(H,{children:[n.jsx(T,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),n.jsxs(C,{children:[n.jsx(A,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),n.jsx(N,{to:"/add",theme:e,children:"Add drinks"})]})]}),n.jsx(F,{children:n.jsxs("picture",{children:[n.jsx("source",{media:"(min-width: 768px)",srcSet:`${I}`,width:"359",height:"445"}),n.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}`,width:"252",height:"313"}),n.jsx("img",{src:g,alt:"Coctail image",width:"252",height:"313"})]})})]})},Y=e=>e.newDrinks.items,X=e=>e.newDrinks.isLoading,B=e=>e.newDrinks.error,G=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,O=t.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,Q=t.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,R=t.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,U=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,q=t.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`,J=t.div`
  display: flex;
  justify-content: space-between;
`,K=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,V=t(x)`
  
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?"color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
  }
`,Z=t(x)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${i.secondaryDark};`:`color: ${i.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${i.light};`:`background-color: ${i.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${i.light};`:`color: ${i.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${i.secondaryDark};`:`background-color: ${i.light};`}
  }
`,ee=()=>{const e=a(Y),c=h("(max-width: 767px)"),s=h("(min-width: 768px) and (max-width: 1439px)"),r=a(m),[w,y]=p.useState(e);return p.useEffect(()=>{const d=c?1:s?2:3,o=e.map(l=>({...l,drinks:l.drinks.slice(0,d)}));y(o)},[c,s,e]),n.jsxs(n.Fragment,{children:[n.jsx(G,{children:w.map(d=>n.jsxs(Q,{children:[n.jsx(O,{theme:r,children:d.category}),n.jsx(R,{children:d.drinks.map((o,l)=>n.jsxs(U,{children:[n.jsx(q,{src:o.drinkThumb,alt:`Photo of ${o.drink}`,onError:u=>{u.currentTarget.src=z}}),n.jsxs(J,{children:[n.jsx(K,{theme:r,children:o.drink}),n.jsx(V,{to:`/drink/${o._id}`,theme:r,children:"See more"})]})]},l))})]},d.category))}),n.jsx(Z,{to:"/drinks",children:"Other drinks"})]})},ce=()=>{const e=b(),c=a(X),s=a(B),r=a(m);return p.useEffect(()=>{e($())},[e]),c?n.jsx(j,{}):s?n.jsxs("p",{children:["Error: ",s.message]}):n.jsxs(n.Fragment,{children:[n.jsx(D,{}),n.jsxs(L,{children:[n.jsxs(P,{theme:r,children:[n.jsx(W,{}),n.jsx(ee,{})]}),n.jsx(S,{theme:r})]}),n.jsx(v,{})]})};export{ce as default};

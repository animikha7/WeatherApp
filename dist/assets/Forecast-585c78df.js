import{u as n,e as c,j as e,W as m}from"./index-c2546d62.js";import{W as x,H as u}from"./HourlyForecast-d43998f4.js";function h(){const{lat:i,lng:r}=n(s=>s.geolocation.geolocation),{data:t,isSuccess:a}=c({lat:i,lng:r});function d(s){return new Date(s*1e3).toLocaleString("en-us",{weekday:"short"})}return a&&console.log(t),e.jsx(e.Fragment,{children:a&&[t.list].map(s=>s.slice(1,11).map((l,o)=>e.jsxs("div",{className:"flex w-full flex-row items-center justify-between overflow-hidden rounded-3xl px-6 shadow-lg dark:bg-neutral-800 md:h-full md:flex-col md:py-4",children:[e.jsx("div",{className:"font-GilroyBold w-auto text-2xl font-semibold",children:d(l.dt)}),e.jsx("div",{className:"w-28",children:e.jsx(m,{iconType:l.weather[0].icon,id:l.weather[0].id,size:"36"})}),e.jsx("div",{className:"w-auto pb-1",children:e.jsxs("div",{className:"flex flex-row gap-1",children:[e.jsxs("div",{className:"font-KardustBold text-3xl",children:[Math.round(l.temp.day),"°"]}),e.jsxs("div",{className:"font-KardustBold text-3xl text-gray-400",children:[Math.round(l.temp.night),"°"]})]})})]},o)))})}function v(){return e.jsx(e.Fragment,{children:e.jsx("main",{className:"container mx-auto",children:e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("div",{className:"p-6 sm:p-0 md:w-1/3",children:[e.jsx(x,{}),e.jsx(u,{})]}),e.jsx("div",{className:"mt-4 md:mt-0 md:w-2/3",children:e.jsx("div",{className:"grid grid-cols-1 justify-items-center gap-4 overflow-hidden px-6 md:max-h-[33rem] md:grid-cols-4 md:hover:overflow-y-auto lg:grid-cols-5 lg:overflow-visible lg:hover:overflow-visible",children:e.jsx(h,{})})})]})})})}export{v as default};

import{d as r,r as l,w as c,o as p,c as u,a as n,b as i,e as m,u as h,f as _,R as v}from"./index-muAx2HX-.js";const f=[{title:"概览",key:"guide",path:"/examples/guide"},{title:"表单",path:"/examples/form/base",children:[{title:"基础表单",path:"/examples/form/base"},{title:"搜索表单",path:"/examples/form/search-form"}]},{title:"表格",path:"/examples/table",children:[{title:"基础表格",path:"/examples/table/base"},{title:"数据表格",path:"/examples/table/data"}]}],x=[{title:"动画",path:"/devtools/transitions",children:[{title:"折叠动画",path:"/devtools/transitions/base"}]},{title:"下载",path:"/devtools/download"},{title:"调试",path:"/devtools/devtool"}],b={devtools:x,examples:f},g={class:"standard-page-layout"},w={class:"standard-page-layout__left-menu"},y={class:"standard-page-layout__content"},k=r({__name:"index",setup(M){const d=_(),t=l(""),a=l([]);return c(()=>d.currentRoute.value,s=>{var o;const e=(o=s.path)==null?void 0:o.match(/^\/(devtools|examples)\/.*?$/)[1];t.value!==e&&(t.value=e,a.value=b[e]||[])},{immediate:!0}),(s,e)=>(p(),u("div",g,[n("div",w,[i(m,{items:a.value},null,8,["items"])]),n("div",y,[i(h(v))])]))}});export{k as default};
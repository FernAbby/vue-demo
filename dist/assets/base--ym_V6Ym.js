import{p as f}from"./index-dTnI-aCE.js";import{d as h,r as i,o as b,f as g,w as n,u as v,g as y,a as T,b as l,h as s,_}from"./index-DEaIOkFu.js";const k=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],C={class:"page-footer"},w=h({__name:"base",setup(x){const d={age:[{min:1,max:100,message:"Length should be 1 to 100",trigger:"change"}],grade:[{required:!0,message:"grade is required",trigger:"change"}]},o=k.map((e,r)=>({value:`${r}`,label:e})),u={renderType:"Object",properties:{baseInfo:{title:"基本信息",renderType:"SectionTitle"},name:{title:"姓名",renderType:"InputText",required:!0},address:{title:"家庭地址",renderType:"Description"},age:{title:"年龄",renderType:"InputNumber",required:!0,renderOptions:{max:10}},sex:{title:"性别",renderType:"RadioGroup",renderOptions:{options:[{label:"男",value:"male"},{label:"女",value:"female"}]}},grade:{title:"年级",renderType:"Select",required:!0,renderOptions:{multiple:!0,options:[{label:"一年级",value:"1"},{label:"二年级",value:"2"},{label:"三年级",value:"3"},{label:"四年级",value:"4"},{label:"五年级",value:"5"}]}},divider:{title:"分割线",renderType:"Divider"},course:{title:"课程",renderType:"Checkbox",renderOptions:{options:[{label:"语文",value:"1"},{label:"数学",value:"2"},{label:"英语",value:"3"},{label:"化学",value:"4"}]},required:!0},city:{title:"城市",renderType:"SearchSelect",renderOptions:{remoteMethod:e=>e?Promise.resolve(o.filter(r=>r.label.toLowerCase().includes(e.toLowerCase()))):Promise.resolve(o)}},comment:{title:"评分",renderType:"Rate",required:!0},date:{title:"报名日期",renderType:"DateTime",required:!0},range:{title:"课程时间",renderType:"DateTimeRange",required:!0},color:{title:"颜色",renderType:"ColorPicker",required:!0},enable:{title:"是否启用",renderType:"Switch",required:!0},percent:{title:"进度",renderType:"Slider",required:!0,renderOptions:{style:{width:"60%"}}}}},t=i(),c=i({name:"章三",age:10,address:"四川省成都市高新区天府三街世豪瑞丽1栋2单元2506",color:"#ffffff",percent:60}),p=()=>{var e;(e=t.value)==null||e.validate((r,a)=>{console.log("isValid====>",r,a)})},m=()=>{var e;(e=t.value)==null||e.reset()};return(e,r)=>{const a=y("el-button");return b(),g(v(f),{ref_key:"formRef",ref:t,schema:u,model:c.value,rules:d,"label-width":"70px"},{append:n(()=>[T("div",C,[l(a,{onClick:m},{default:n(()=>[s("重置")]),_:1}),l(a,{type:"primary",onClick:p},{default:n(()=>[s("提交")]),_:1})])]),_:1},8,["model"])}}}),M=_(w,[["__scopeId","data-v-966c943e"]]);export{M as default};

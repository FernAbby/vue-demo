function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}const n={name:{title:"姓名",renderType:"InputText"},sex:{title:"性别",renderType:"Select",renderOptions:{options:[{label:"男",value:"male"},{label:"女",value:"female"}]}},grade:{title:"班级",renderType:"InputText"},date:{title:"入学时间",renderType:"DateTime"}},r=[{title:"姓名",dataIndex:"name",columnProps:{width:100}},{title:"性别",dataIndex:"sex"},{title:"联系方式",dataIndex:"mobile"},{title:"班级",dataIndex:"class"},{title:"地址",dataIndex:"address"}],l=(e=50)=>new Array(e).fill(0,0).map((t,x)=>({id:a(),name:`张三 ${x+1}`,sex:x%2===0?"男":"女",mobile:"18888888888",class:"3年级2班",address:"成都市高新区天府二街世豪广场"}));export{r as c,l as g,n as s};

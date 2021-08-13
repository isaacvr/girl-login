import{d as t,p as e,a as n,c as a,F as i,r as l,o as s,n as o,t as r,b as d,w as c,v as u,e as v,f as p,g}from"./vendor.9c27b797.js";var w=t({name:"Navbar",data:function(){return{list:[{text:"Inicio",active:!1},{text:"Portafolio",active:!1},{text:"Soporte",active:!1},{text:"Registro",active:!0}]}},methods:{selectItem:function(t){this.list.forEach((t=>t.active=!1)),t.active=!0}}});e("data-v-3b2ac758");const h=["onClick"];n(),w.render=function(t,e,n,d,c,u){return s(),a("ul",null,[(s(!0),a(i,null,l(t.list,(e=>(s(),a("li",{class:o({active:e.active}),key:e.text,onClick:()=>t.selectItem(e)},r(e.text),11,h)))),128))])},w.__scopeId="data-v-3b2ac758";var m=t({name:"LoginForm",data:function(){return{user:"",password:""}},mounted:function(){this.user="myuser@gmail.com",this.password="mypassword"}});e("data-v-0f7c7aab");const f={class:"form"},k=d("h3",null,"Iniciar sesión",-1),x={class:"input"},C=d("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[d("title",null,"Iconly/Curved/Profile"),d("g",{id:"Iconly/Curved/Profile","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},[d("g",{id:"Profile",transform:"translate(5.000000, 2.400000)","stroke-width":"1.5"},[d("path",{d:"M6.84454545,19.261909 C3.15272727,19.261909 -8.52651283e-14,18.6874153 -8.52651283e-14,16.3866334 C-8.52651283e-14,14.0858516 3.13272727,11.961909 6.84454545,11.961909 C10.5363636,11.961909 13.6890909,14.0652671 13.6890909,16.366049 C13.6890909,18.6658952 10.5563636,19.261909 6.84454545,19.261909 Z",id:"Stroke-1"}),d("path",{d:"M6.83729838,8.77363636 C9.26002565,8.77363636 11.223662,6.81 11.223662,4.38727273 C11.223662,1.96454545 9.26002565,-1.0658141e-14 6.83729838,-1.0658141e-14 C4.41457111,-1.0658141e-14 2.45,1.96454545 2.45,4.38727273 C2.44184383,6.80181818 4.39184383,8.76545455 6.80638929,8.77363636 C6.81729838,8.77363636 6.82729838,8.77363636 6.83729838,8.77363636 Z",id:"Stroke-3"})])])],-1),y={class:"input"},I=d("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[d("title",null,"Iconly/Curved/Lock"),d("g",{id:"Iconly/Curved/Lock","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},[d("g",{id:"Lock",transform:"translate(3.500000, 2.000000)","stroke-width":"1.5"},[d("path",{d:"M12.9709,7.4033 L12.9709,5.2543 C12.9399,2.7353 10.8719,0.7193 8.3539,0.7503 C5.8869,0.7813 3.8919,2.7673 3.8499,5.2343 L3.8499,7.4033",id:"Stroke-1"}),d("line",{x1:"8.4103",y1:"12.1562",x2:"8.4103",y2:"14.3772",id:"Stroke-3"}),d("path",{d:"M8.4103,6.8242 C2.6653,6.8242 0.7503,8.3922 0.7503,13.0952 C0.7503,17.7992 2.6653,19.3672 8.4103,19.3672 C14.1553,19.3672 16.0713,17.7992 16.0713,13.0952 C16.0713,8.3922 14.1553,6.8242 8.4103,6.8242 Z",id:"Stroke-5"})])])],-1),b=d("button",null,"Continuar",-1);n(),m.render=function(t,e,n,i,l,o){return s(),a("div",f,[k,d("div",x,[C,c(d("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>t.user=e)},null,512),[[u,t.user]])]),d("div",y,[I,c(d("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=e=>t.password=e)},null,512),[[u,t.password]])]),b])},m.__scopeId="data-v-0f7c7aab";var L=t({name:"App",components:{Navbar:w,LoginForm:m}});e("data-v-4970e0a5");const S=d("div",{class:"light1"},null,-1),_=d("div",{class:"light2"},null,-1),F=d("div",{class:"light3"},null,-1),M=d("div",{class:"light4"},null,-1),P=d("div",{class:"light5"},null,-1),j=d("img",{class:"girl",src:"/girl-login/assets/girl.ae098014.png",alt:""},null,-1);n(),L.render=function(t,e,n,l,o,r){const d=v("Navbar"),c=v("LoginForm");return s(),a(i,null,[S,_,F,M,P,j,p(d),p(c)],64)},L.__scopeId="data-v-4970e0a5",g(L).mount("#app");

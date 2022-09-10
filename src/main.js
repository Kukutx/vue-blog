// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'
import Routes from './routes'

//全局配置
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)

//axios的默认配置   ，也可用axios-auth来配置
axios.defaults.baseURL= 'https://vuedemo-b60b9-default-rtdb.firebaseio.com'   //此配置之后，会将所有的axios请求自动加上该网址
// axios.defaults.headers.common['Authorization']= 'Toke'                        //配置默认头
// axios.defaults.headers.post['Content-type']= 'application/urlencode'   
// axios.defaults.headers.get['Accepts']= 'application/json'   


// 自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#" + Math.random().toString(16).slice(2,8);  //随机颜色
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1260px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})

// 自定义过滤器
// Vue.filter("to-uppercase",(value)=>{  //转换大写
//   return value.toUpperCase();
// })

Vue.filter("snippet",(value)=>{
  return value.slice(0,100) + "...";
})


//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"               //保存上一个网页的历史记录
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})


//打包指令是 npm run build ，然后会生成dist文件夹将这目录下的文件发布到服务器上就行了，记得把index.html的/static跳转链接删除 / 不然不会显示
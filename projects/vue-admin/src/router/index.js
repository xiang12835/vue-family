
import {
    createRouter, // 用来新建路由实例
    createWebHashHistory, //用来配置我们内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分。
  } from 'vue-router'
  import Home from '../pages/home.vue'
  import About from '../pages/about.vue'
  import Login from '../components/Login.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    { 
      path: '/login', 
      component: Login, 
      hidden: true, 
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  
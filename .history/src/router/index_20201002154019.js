import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    meta:{
      istoken:true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    meta:{
      istoken:true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/userinfo.vue')
  },
  {
    path: '/',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(!localStorage.getItem('token')&&!localStorage.getItem('id')&&to.meta.istoken==true){
    router.push('/login');
    Vue.prototype.$msg.fail('请重新登录！')
    return
  }
  next();
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '@/views/Overview.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import store from '../store'

Vue.use(VueRouter)

const checkSession = (to, from, next) => {
  if (to.name === 'Overview') {
    if(!store.state.userToken) {
      next({ name: 'Login' })
    }
  }
  next()
}


const routes = [
  {
    path: '/overview/:userId',
    name: 'Overview',
    component: Overview,
    beforeEnter: checkSession
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: RegisterView,
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})


export default router

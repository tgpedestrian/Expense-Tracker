import { createRouter, createWebHistory } from 'vue-router'
import headerVue from '../views/HeaderVue.vue'
import loginVue from '../components/LoginVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginVue',
      component: loginVue
    },
    {
      path: '/headerVue',
      name: 'headerVue',
      component: headerVue
    },
  
  ]
})

export default router

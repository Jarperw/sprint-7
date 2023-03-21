import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bienbenida',
      component: ()=> import('../views/BienvenidaView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    }
  ]
})

export default router

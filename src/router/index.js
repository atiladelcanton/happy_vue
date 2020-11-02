import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Localization from '../views/Localization.vue'
import NewOrphanage from '../views/NewOrphanage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/localization',
    name: 'Localization',
    component: Localization
  },
  {
    path: '/new-orphanage',
    name: 'NewOrpanage',
    component: NewOrphanage
  }
]

const router = new VueRouter({
  routes
})

export default router

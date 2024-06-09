import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AgendarTour from '../views/AgendarTour.vue'
import Gastronomia from '../views/Gastronomia.vue'
import Home from '../views/Home.vue'
import Tours from '../views/Tours.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/tours',
    name: 'tours',
    component: Tours
  },

  {
    path: '/gastronomia',
    name: 'gastronomia',
    component: Gastronomia
  },

  {
    path: '/agendar-tour',
    name: 'agendar-tour',
    component: AgendarTour
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

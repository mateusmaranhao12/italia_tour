import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AgendarTour from '../views/AgendarTour.vue'
import Home from '../views/Home.vue'
import Tours from '../views/Tours.vue'
import TourDetails from '../components/TourDetails.vue'

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
    path: '/agendar-tour',
    name: 'agendar-tour',
    component: AgendarTour
  },

  {
    path: '/tour-details:id',
    name: 'TourDetails',
    component: TourDetails
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

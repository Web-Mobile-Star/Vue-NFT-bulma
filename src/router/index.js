import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Explore')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Gallery')
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HowItWorks')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

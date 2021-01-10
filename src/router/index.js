import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/genres',
    name: 'Genres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Genres.vue')
  },
  {
    path: '/best-sellers',
    name: 'BestSellers',
    component: () => import(/* webpackChunkName: "about" */ '../views/BestSellers.vue')
  },
  {
    path: '/by-years',
    name: 'ByYears',
    component: () => import(/* webpackChunkName: "about" */ '../views/ByYears.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../components/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

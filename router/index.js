import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Contact_single from '../views/Contact_single.vue'
import Nofound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog/:id',
    name: 'Contact_single',
    component: Contact_single,
    props: true
  },
  //404
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: Nofound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

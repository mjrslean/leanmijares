import { createRouter, createWebHashHistory } from 'vue-router'
import { Contact, Home, Projects, Skills } from './components/section'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/skills', name: 'skills', component: Skills },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    return {
      el: document.getElementById(to.name),
      behavior: 'smooth',
      top: 70,
    }
  },
})

export default router

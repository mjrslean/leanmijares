import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [{ path: '/:section?', component: App }]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const section = to.params.section || 'about'

    return new Promise((resolve) => {
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          resolve({
            el: `#${section}`,
            behavior: 'smooth',
            top: 90,
          })
        } else {
          resolve({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    })
  },
})

export default router

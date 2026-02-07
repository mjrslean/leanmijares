import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'
import { Icon } from '@iconify/vue'

createApp(App).use(router).use(MasonryWall).component('Icon', Icon).mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(router)
    .use(MasonryWall)
    .mount('#app')

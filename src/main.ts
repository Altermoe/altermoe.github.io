import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { router } from '@/router'
import { resourceManager } from './resources'

const app = createApp(App)

app
  .use(router)
  .use(resourceManager)
  .mount('#app')

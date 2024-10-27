import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { router } from '@/router'
import { resourceManager } from './resources'
import { createPinia } from 'pinia'
import { BSON } from 'bson'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(resourceManager)
  .mount('#app')

Reflect.set(globalThis, 'BSON' , {
  serialize: BSON.serialize,
  deserialize: BSON.deserialize,
})

import { createApp } from 'vue'
import App from './App.vue'

// importing the router created in src if u manually created this...
import router from './router'

// importing the css Tailwind directives
import './assets/css/style.css'

const app = createApp(App)
    app.use(router) // using the router...
    app.mount('#app')
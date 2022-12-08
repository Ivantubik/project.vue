import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"
import { Fancybox } from "@fancyapps/ui";

// import './assets/css/style.css'
// import './assets/css/normalize.css'

window.Fancybox = Fancybox
import "@fancyapps/ui/dist/fancybox.css";


createApp(App).use(router).use(store).mount('#app')

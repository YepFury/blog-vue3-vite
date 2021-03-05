import { createApp } from 'vue'
import ELementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/common.css'
import router from './router'
import store from './store'
import App from './App.vue'


createApp(App).use(ELementPlus).use(store).use(router).mount('#app')

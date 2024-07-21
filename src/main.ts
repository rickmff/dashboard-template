import './styles/index.scss' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import '@/styles/custom-tippy.scss'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';

const app = createApp(App)

app.use(createPinia())
app.use(Antd)
app.use(router)
app.use(
    VueTippy,
    {
        directive: 'tippy',
        component: 'tippy',
        componentSingleton: 'tippy-singleton',
        defaultProps: {
            placement: 'top',
            allowHTML: true,
        },
    }
)

app.mount('#app')

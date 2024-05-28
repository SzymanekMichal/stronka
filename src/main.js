import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Phones from './Pages/Phones.vue'
import Watches from './Pages/Watches.vue'
import Rtv from './Pages/Rtv.vue'
import Antiques from './Pages/Antiques.vue'
import Paintings from './Pages/Paintings.vue'
import Form from './Pages/Form.vue'
import Stats from './Pages/Stats.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/phones', name: 'Phones', component: Phones },
        { path: '/watches', name: 'Watches', component: Watches},
        { path: '/rtv', name: 'Rtv', component: Rtv },
        { path: '/antiques', name: 'Antiques', component: Antiques },
        { path: '/paintings', name: 'Paintings', component: Paintings },
        {path: '/form', name: 'Form', component: Form},
        {path: '/stats', name: 'Stats', component: Stats},
    ],
    })

createApp(App).use(router).mount('#app')

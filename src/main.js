import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'

const router = createRouter({
    routes: [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/blog',
        component: Blog,
        name: 'blog',
    }],
    history: createWebHistory()
})

const app = createApp(App);
app.use(router)
app.mount('#app')

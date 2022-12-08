import { createRouter, createWebHistory  } from "vue-router"
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import Restaurant from "@/pages/Restaurant.vue"
import Error from '@/pages/Error.vue'




const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/restaurant', component: Restaurant },
    { path: '/:pathMatch(.*)*', component: Error }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router
import HomePage from "@/views/HomePage.vue";
import TextField from "@/views/TextField.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path:"/login",
        component: TextField
    },
    {
        path:"/home",
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
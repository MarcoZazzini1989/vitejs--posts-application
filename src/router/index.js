import { createRouter, createWebHistory} from "vue-router";
import Homeview from '../views/Homeview.vue'
import PostCreate from '../views/PostCreate.vue'




const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path:'/',
            name : 'home',
            component : Homeview
        },
        {
            path:'/post-create',
            name : 'post-create',
            component : PostCreate
        }

    ]
})


export default router
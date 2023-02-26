//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from "../pages/Home.vue";
import News from "@/../../24_src_路由的props配置和replace模式/pages/News.vue";
import Message from "@/../../24_src_路由的props配置和replace模式/pages/Message.vue";
import Detail from "@/../../24_src_路由的props配置和replace模式/pages/Detail.vue";

//创建并暴露一个路由器，去管理一组一组的路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        //query参数
                        // {
                        //     path:'detail',
                        //     component:Detail
                        // }
                        //params参数
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',   //占位符
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})

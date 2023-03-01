//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

//创建并暴露一个路由器，去管理一组一组的路由器
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{
                title:'关于',
                isAuth:true
            }
        },
        {
            name:'shouye',
            path:'/home',
            component:Home,
            meta:{
                title:'首页'
            },
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{   //配置需要鉴权才能访问
                        isAuth:true,
                        title:'新闻'
                    },
                    // beforeEnter:(to,from,next) => {
                    //     if (to.meta.isAuth) {   //判断当前路由是否需要进行权限控制
                    //         if (localStorage.getItem('school') === 'atguigu') {   //权限控制的具体规则
                    //             document.title = to.meta.title || '尚硅谷'
                    //             next()   //放行
                    //         } else {
                    //             alert('学校名不对，无权限查看！')
                    //         }
                    //     } else {
                    //         document.title = to.meta.title || '尚硅谷'
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        //query参数
                        // {
                        //     path:'detail',
                        //     component:Detail,
                        //     //props的第三种写法，值为函数
                        //     props($route){
                        //         return {
                        //             id:$route.query.id,
                        //             title:$route.query.title
                        //         }
                        //     }
                        // },
                        //params参数
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',   //占位符
                            component:Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
                            // 使用较少，因为传递的是固定数据
                            //props:{a:1,b:'hello'},
                            //props的第二种写法，值为布尔值。若布尔值为真，就会把该路由组件收到的params参数
                            // 以props的形式传递给Detail组件
                            props:true,
                            meta:{
                                title:'消息'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫，初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next) => {
//     if(to.path === '/home/news' || to.path === '/home/message'){
//         if(localStorage.getItem('school') === 'atguigu'){
//             next()
//         }else{
//             alert('学校名不对，无权限查看')
//         }
//     }else{
//         next()
//     }
// })
// router.beforeEach((to,from,next) => {
//     if(to.meta.isAuth){   //判断当前路由是否需要进行权限控制
//         if(localStorage.getItem('school') === 'atguigu'){   //权限控制的具体规则
//             document.title = to.meta.title || '尚硅谷'
//             next()   //放行
//         }else{
//             alert('学校名不对，无权限查看！')
//         }
//     }else{
//         document.title = to.meta.title || '尚硅谷'
//         next()
//     }
// })
//
// //全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to,from) => {
//     document.title = to.meta.title || '尚硅谷'
//
// })

export default router

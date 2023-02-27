import Vue from 'vue'
import App from './App.vue'

//引入vue-router
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

//使用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})

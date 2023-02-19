import Vue from 'vue'
import App from './App.vue'
//引入vue-resource插件
import vueResource from 'vue-resource'
//引入store
import store from './store'

Vue.config.productionTip = false
//使用vue-resource插件
Vue.use(vueResource)


new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})

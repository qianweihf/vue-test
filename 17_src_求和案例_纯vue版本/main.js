import Vue from 'vue'
import App from './App.vue'
//引入vue-resource插件
import vueResource from 'vue-resource'
//引入vuex
import Vuex from 'vuex'

Vue.config.productionTip = false
//使用vue-resource插件
Vue.use(vueResource)
//使用Vuex
Vue.use(Vuex)

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})

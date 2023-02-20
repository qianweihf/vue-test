//该文件用于创建Vuex中最为核心的store

//引入vuex
import Vuex from 'vuex'

import countOptions from './modules/count'

import personOptions from './modules/person'
//引入Vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})



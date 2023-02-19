//该文件用于创建Vuex中最为核心的store

//引入vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

const countOptions = {
    namespaced:true,
    actions:{
        jiaOdd(context,value){
            if(context.state.sum % 2){
                context.commit('JIA',value);
            }
        },
        jiaWait(context,value){
            setTimeout(()=>{
                context.commit('JIA',value);
            },500)
        }
    },
    mutations:{
        JIA(state,value){
            state.sum += value;
        },
        JIAN(state,value){
            state.sum -= value;
        },
    },
    state:{
        sum:0,  //当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10;
        }
    }
}

const personOptions = {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{}
}

//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})



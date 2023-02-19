//该文件用于创建Vuex中最为核心的store

//引入vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

//准备actions ，用于响应组件中的动作
const actions= {
    //此处的jia和jian中没有业务逻辑，可在组件中直接调用commit
    // jia(context,value){
    //     context.commit('JIA',value);
    // },
    // jian(context,value){
    //     context.commit('JIAN',value);
    // },
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
}

// 准备mutations 用于操作数据（state）
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value);
    }
}

//准备State 用于存储数据
const state = {
    sum:0,  //当前的和
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

//准备getters，用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})



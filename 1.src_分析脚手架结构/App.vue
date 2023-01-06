<template>
  <div>
    <h1 v-text="msg" ref="titile"></h1>
    <button @click="showDOM" ref="btn">点我提示上述DOM结构</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
  import School from './components/School.vue'

  export default{
    name:'App',
    components:{
      School
    },
    data(){
      return {
        msg:'欢迎学习Vue'
      }
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title);   //真实DOM元素
        console.log(this.$refs.btn);     // 真实DOM元素
        console.log(this.$refs.sch);     // School组件的实例对象（vc）
      }
    }
  }
</script>
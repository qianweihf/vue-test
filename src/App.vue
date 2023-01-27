<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!--通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <Student/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
export default {
    name:'App',
    components:{School,Student},
    data(){
        return {
            msg:'你好啊'
        }
    },
  methods:{
      getSchoolName(name){
        console.log('App收到了学校名',name);
      }
  }
}
</script>

<style scoped>
    .app{
      background-color:gray;
      padding:5px;
    }
</style>

<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名：{{studentName}}</h1>
    <!--通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用@或v-on）-->
    <!--    <Student v-on:atguigu="getStudentName"/>-->
    <Student @atguigu.once="getStudentName" @demo="m1" @click.native="m2"/>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref）-->
    <!--    <Student ref="student"/>-->
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好啊',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名', name);
    },
    getStudentName(name, ...params) {
      console.log('App收到了学生名', name, params);
      this.studentName=name;
    },
    m1() {
      console.log('demo事件被触发了')
    },
    m2(){
      alert('12345')
    }
  },
  mounted() {
    //绑定自定义事件
    // this.$refs.student.$on('atguigu',this.getStudentName);
    //this.$refs.student.$once('atguigu', this.getStudentName);  //事件只触发一次

    //绑定自定义事件时，如果将回调函数直接配置在参数中时，必须写成箭头函数，此时函数中的this是App，否则this是Student实例对象
    this.$refs.student.$on('atguigu',(name,...params)=>{
      console.log('App收到了学生名', name, params);
      this.studentName=name;
    })
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>

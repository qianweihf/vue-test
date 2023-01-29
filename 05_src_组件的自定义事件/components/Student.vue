<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
  methods: {
    //vc或vm销毁后所有Student实例的自定义事件全部不奏效
    sendStudentName() {
      //触发Student组件实例身上的atguigu事件
      this.$emit('atguigu', this.name);
      //this.$emit('demo');
    },
    unbind() {
      this.$off('atguigu');   //解绑一个自定义事件
      //this.$off(['atguigu', 'demo']);   //解绑多个自定义事件
      //this.$off();   //解绑所有自定义事件
    }
  }
}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>

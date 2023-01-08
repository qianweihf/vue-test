<template>
  <div>
    <!--此处age需要传入Number，必须使用v-bind，否则传入的是字符串，在组件中进行算术运算时会报错-->
    <Student name="李四" sex="女" :age="18"></Student>
  </div>
</template>

<script>
  import Student from './components/Student.vue'

  export default {
    name: "App",
    components:{Student}
}
</script>

<style scoped>

</style>
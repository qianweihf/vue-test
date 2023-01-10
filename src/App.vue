<template>
  <div>
    <!--此处age需要传入Number，必须使用v-bind，否则传入的是字符串，在组件中进行算术运算时会报错-->
    <Student></Student>
    <hr/>
    <School></School>
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue'

  export default {
    name: "App",
    components:{Student,School}
}
</script>

<style scoped>

</style>
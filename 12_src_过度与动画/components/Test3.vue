<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--transition中的name属性决定着样式中进入和离开的样式名称，如果没有name属性，则样式名称为 v-enter-active-->
    <transition-group
        name="animate__animated animate__bounce"
        appear
        enter-active-class="animate__swing"
        leave-active-class="animate__bounceOutUp"
    >
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name:'Test',
    data(){
      return {
        isShow:true,
      }
    }
  }
</script>

<style scoped>
  h1{
    background-color:orange;
  }
</style>

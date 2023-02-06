<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--transition中的name属性决定着样式中进入和离开的样式名称，如果没有name属性，则样式名称为 v-enter-active-->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
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

  .hello-enter-active{
    animation: atguigu 1s linear;
  }

  .hello-leave-active{
    animation: atguigu 1s linear reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }

</style>

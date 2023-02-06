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
    /* 谁变谁加动画，指定h1的动画*/
    /*transition: 1s linear;*/
  }
  /* 进入的起点、离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }

  /* 进入的终点、离开的起点 */
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }

  /* 进入、离开的过程中 */
  .hello-enter-active,.hello-leave-active{
    transition: 1s linear;
  }

  /*!* 离开的起点 *!*/
  /*.hello-leave{*/
  /*  transform: translateX(0);*/
  /*}*/

  /*!* 离开的终点 *!*/
  /*.hello-leave-to{*/
  /*  transform: translateX(-100%);*/
  /*}*/
</style>

<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷',
        address:'北京'
      }
    },
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('我是School组件，我收到了Student组件的数据',data);
      })
    },
    //组件销毁时，需要解绑在事件总线上绑定的自定义事件
    beforeDestroy() {
      this.$bus.$off('hello');
    }
  }
</script>

<style scoped>
  .school{
    background-color:skyblue;
    padding:5px;
  }
</style>

<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
  export default {
    name:'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next) {
      if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
          next()
        }else{
          alert('无权限进入')
        }
      }else{
        next()
      }
    },
    beforeRouteLeave(to,from,next) {
      next()
    }
  }
</script>

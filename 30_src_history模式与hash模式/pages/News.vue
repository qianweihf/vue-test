<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
  export default {
    name:'News',
    data(){
      return {
        opacity: 1
      }
    },
    // mounted(){
    //   this.timer = setInterval(() => {
    //     this.opacity -= 0.1
    //     if(this.opacity <= 0){
    //       this.opacity = 1
    //     }
    //   },16)
    // },
    // beforeDestroy() {
    //   clearInterval(this.timer)
    // }
    activated() {
      this.timer = setInterval(() => {
        this.opacity -= 0.1
        if (this.opacity <= 0) {
          this.opacity = 1
        }
      }, 16)
    },
    deactivated() {
      clearInterval(this.timer)
    }
  }
</script>

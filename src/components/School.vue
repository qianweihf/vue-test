<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  methods:{
    demo(msgName,data){
      console.log('hello消息收到了',data);
    }
  },
  mounted(){
    //this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
      //此处事件的回调直接写的话，必须写成箭头函数，不能写成普通函数，否则this指向有问题
      //console.log('由点发布了hello消息，hello消息的回调执行了',msgName,data);
    //})
    this.pubId = pubsub.subscribe('hello',this.demo);
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId);
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

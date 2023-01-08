<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="updateAge">点我学生年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'欢迎学习Vue',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++;
    }
  },
  //props:['name','sex','age']  //简单接收

  //接收的同时，对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  //接收的同时，对数据进行类型限制+默认值的指定+必要性的限制
  props:{
    name:{
      type:String,   //name的类型是字符串
      required:true    //name是必要的
    },
    age:{
      type:Number,
      default:20    //age的默认值是20
    },
    sex:{
      type:String,
      required:true
    }
  }
}
</script>
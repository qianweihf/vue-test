<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name:'ToDoHeader',
    data(){
      return {
        title:''    //此处定义title，是为了操作输入框，方便清空，避免直接操作DOM
      }
    },
    methods:{
      add(){   //Header中已经定义了add，App中定义的方法不能叫做add，避免冲突
        //校验数据
        if(!this.title.trim()){
          return alert('输入不能为空');
        }
        //将用户的输入包装成一个ToDo对象
        const todoObj = {id:nanoid(),title:this.title,done:false};
        //通知App组件去添加一个todo对象
        //this.addToDo(todoObj);
        this.$emit('addToDo',todoObj);
        //清空输入
        this.title='';
      }
    }
  }
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

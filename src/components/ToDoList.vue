<template>
  <ul class="todo-main">
    <ToDoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
  </ul>
</template>

<script>
  import ToDoItem from './ToDoItem.vue'

  export default {
    name:'ToDoList',
    components:{
      ToDoItem
    },

    data(){
      return {
        todos:[
          {id:'001',title:'吃饭',done:false},
          {id:'002',title:'上课',done:false},
          {id:'003',title:'逛街',done:false}
        ]
      }
    }
  }
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
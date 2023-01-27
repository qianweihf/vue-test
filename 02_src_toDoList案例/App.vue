<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addToDo="addToDo"/>
      <ToDoList :todos="todos" :checkToDo="checkToDo" :deleteToDo="deleteToDo"/>
      <ToDoFooter :todos="todos" :checkAllToDo="checkAllToDo" :clearAllToDo="clearAllToDo"/>
    </div>
  </div>
</template>

<script>
 import ToDoHeader from './components/ToDoHeader.vue';
 import ToDoList from './components/ToDoList.vue';
 import ToDoFooter from './components/ToDoFooter.vue';

  export default {
    name: "App",
    components:{ToDoHeader,ToDoList,ToDoFooter},
    data(){
      return {
        todos:[
          {id:'001',title:'吃饭',done:true},
          {id:'002',title:'上课',done:false},
          {id:'003',title:'逛街',done:true}
        ]
      }
    },
    methods:{
      //添加一个todo
      addToDo(todoObj){
        this.todos.unshift(todoObj);
      },
      //勾选or取消勾选一个todo
      checkToDo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id){
            todo.done = !todo.done;
          }
        })
      },
      //删除一个todo
      deleteToDo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id;
        })
      },
      //全选or全不选
      checkAllToDo(done){
        this.todos.forEach((todo)=>{
          todo.done = done;
        })
      },
      //清空已完成的
      chearAllToDo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done;
        })
      }
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
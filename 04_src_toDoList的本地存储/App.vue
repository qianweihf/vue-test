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
        //增加一个空数组，是为了初始化时，解析的todos为null，footer组件获取null的长度会报错，增加空数组就不会报错
        todos:JSON.parse(localStorage.getItem('todos')) || []
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
    },
    watch:{
      //此处todos必须使用深度监视，是为了监视对象的属性发生变化，并进行存储
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value));
        }
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
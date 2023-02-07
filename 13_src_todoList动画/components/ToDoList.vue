<template>
  <ul class="todo-main">
    <!--也可以给整个todo list加动画效果，此时需要使用transition-group-->
    <!-- <transition-group name="todoList" appear> -->
    <ToDoItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
    />
    <!-- </transition-group> -->
  </ul>
</template>

<script>
  import ToDoItem from './ToDoItem.vue'

  export default {
    name:'ToDoList',
    components:{
      ToDoItem
    },
    props:['todos']
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

.todoList-enter-active {
  animation: atguigu 1s linear;
}

.todoList-leave-active {
  animation: atguigu 1s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

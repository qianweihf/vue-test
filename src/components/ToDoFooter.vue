<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'ToDoFooter',
    props:['todos'],
    computed:{
      doneTotal(){
        /*  直接遍历数组中的对象，统计有几个done为true的
        let i = 0;
        this.todos.forEach((todo)=>{
          if(todo.done){
            i++;
          }
        });
        return i;
         */
        /* 使用数组的reduce方法，统计
        const x = this.todos.reduce((pre,current)=>{
          return pre + (current.done ? 1 : 0);
        },0);
        return x;
         */
        //对上述reduce进行简写
        return this.todos.reduce((pre,todo)=> pre + (todo.done?1:0),0);
      }
    }
  }
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
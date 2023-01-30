<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
      <!--此处也可以绑定change事件-->
      <!--<input type="checkbox" :checked="todo.done" @change="handleChcek(todoObj.id)"/>-->
      <!--做勾选时，可以直接使用v-model来绑定todo.done，不太推荐，因为违反原则，修改了props
          因为todo是一个对象，Vue对props的监视是浅层次的，属性发生变化时，不会报错
          但ESlint语法检查时，会报错，不能做双向绑定
       -->
      <!--<input type="checkbox" v-model="todoObj.done"/>-->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name:'ToDoItem',
    props:['todo'],
    methods:{
      //勾选or取消勾选
      handleCheck(id){
        //通知App改变
        //this.checkToDo(id);
        this.$bus.$emit('checkToDo',id);
      },
      //删除
      handleDelete(id){
        if(confirm('确定删除吗？')){
          //this.deleteToDo(id);
          this.$bus.$emit('deleteToDo',id);
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>

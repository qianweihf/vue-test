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
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js';
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
          //使用事件总线触发自定义事件
          //this.$bus.$emit('deleteToDo',id);
          //发布消息
          pubsub.publish('deleteToDo',id);
        }
      },
      //编辑
      handleEdit(todo){
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit=true;
        }else{
          this.$set(todo,'isEdit',true);
        }
        //Vue是将整合方法执行完成后，在解析DOM；所以直接获取焦点是不行的
        //nextTick中的回调是在解析完DOM之后再进行获取焦点，所以可以实现
        this.$nextTick(function(){
          this.$refs.inputTitle.focus();
        })
        //使用定时器也可以解决此问题
        // setTimeout(function(){
        //   this.$refs.inputTitle.focus();
        // },200)
      },
      //失去焦点回调（真正执行修改逻辑）
      handleBlur(todo,e){
        todo.isEdit = false;
        if(!e.target.value.trim()){
          return alert('输入不能为空');
        }
        this.$bus.$emit('updateToDo',todo.id,e.target.value);
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

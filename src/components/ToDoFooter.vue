<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--checked表示初始状态，change表示交互，可以使用v-model进行读取和修改，此时不需要配置methods-->
<!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearALl">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'ToDoFooter',
    props:['todos','checkAllToDo','clearAllToDo'],
    computed:{
      total(){
        return this.todos.length;
      },
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
      },
      isAll:{
        get() {
          return this.doneTotal === this.total && this.total > 0;
        },
        set(value){
          this.checkAllToDo(value);
        }
      }
    },
    methods:{
      checkAll(e){
        this.checkAllToDo(e.target.checked);
      },
      clearAll(){
        this.clearAllToDo();
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
<template>
    <!--组件的结构-->
    <div class="demo">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'尚硅谷',
            address:'北京昌平'
        }
    },
    methods:{
        showName(){
            alert(this.name);
        }
    }
}
</script>


<style>
/* 组件的样式*/
    .demo{
        background-color: orange;
    }
</style>

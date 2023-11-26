<!--
 * @作者: kerwin
-->
<template>
    <div>
        <button @click="handleClick">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default{
    methods:{
        handleClick(){
            console.log("click")
        }
    }
}
</script>
<style scoped>
  div{
    background: gray;
  }
</style>

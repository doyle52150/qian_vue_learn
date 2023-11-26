<!--
 * @作者: kerwin
-->
<template>
    <div>
        navbar--{{title}}
        <button @click="handleClick">click</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                  title:"navbar"
            }
        },
        methods:{
            handleClick(){
                console.log("click")
            }
        }
    }
</script>

<style scoped>
    div{
        background: red;
    }
</style>
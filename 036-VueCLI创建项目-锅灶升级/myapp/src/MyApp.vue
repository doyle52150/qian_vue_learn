<!--
 * @作者: kerwin
-->
<template>
    <div>
        {{myapptitle}}
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Content></Content>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
export default{
    data(){
        return {
            myapptitle:"app-title"
        }
    },
    //局部
    components:{
        Navbar,
        Sidebar,
        Content
    }
}
</script>


<style>
    div{
        background: yellow;
    }
</style>
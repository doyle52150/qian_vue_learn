<!--
 * @作者: kerwin
-->
<template>
    <div>
        sidebar
        <sidebar-button></sidebar-button>
    </div>
</template>

<script>
import sidebarButton from './SidebarButton'
export default{
    components:{
        sidebarButton
    }
}
</script>

<style scoped>
    div{
        background: blue;
    }
</style>
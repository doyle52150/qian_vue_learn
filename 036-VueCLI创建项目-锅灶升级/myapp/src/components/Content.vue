<!--
 * @作者: kerwin
-->
<template>
    <div>
        content
        <button @click="handleClick">click</button>
    </div>
</template>

<script>
    export default{
        methods:{
            handleClick(){
                // console.log("click")
                fetch("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4").then(res=>res.json())
                .then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>
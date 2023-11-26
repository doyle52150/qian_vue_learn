import  {createApp} from 'vue'
import App from './MyApp.vue'

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
createApp(App)
.component("Navbar",Navbar)
.component("Sidebar",Sidebar)
.mount('#app')


/*
 Vue
 
 //es6 第一种导入导出
 export default {
    createApp:function(){

    }
 }

 import Vue from 'vue'
 Vue.createApp

 //es6 第二种
  function createApp(){}
  export {createApp}


  import {createApp} from 'vue'
*/

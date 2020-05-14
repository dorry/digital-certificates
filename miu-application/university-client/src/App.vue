<template>
  <div id="app">
      <nav-bar> </nav-bar>
      <dashboard> </dashboard>
      <router-view></router-view>
      </div>

</template>
<script>
import navbar from "./components/features/navbar";
import db from "./components/Dashboard";
export default {
  components:{
    "nav-bar":navbar,
    "dashboard" : db
  },
  name: 'app'  
}
</script>
<style>
body
{
   background-image: url('./assets/webbg.png');
   background-repeat: no-repeat;
     background-size: 1920px 1080px;

}
</style>

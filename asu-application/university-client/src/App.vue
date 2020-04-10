<template>
  <div id="app">
      <nav-bar> </nav-bar>
      <router-view></router-view>
      </div>

</template>
<script>
import navbar from "./components/features/navbar";
export default {
  components:{
    "nav-bar":navbar
  },
  name: 'app'  
}
</script>
<style>
body {
   background-image: url('./assets/webbg.png');; 
}
</style>

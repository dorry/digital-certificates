<template>
  <div id="app">
      <nav-bar> </nav-bar>
      <dashboard></dashboard>  
      <router-view></router-view>
    </div>
</template>

<script>
import navbar from './components/navbar'
import Dboard from './components/Dashboard'

export default {
  components : {
    'nav-bar':navbar,
    'dashboard':Dboard
  },
  name: 'app'  
  
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body
{
  background-image: url('./assets/webbg.jpg');
  background-size: 1920px 1080px;
}


</style>

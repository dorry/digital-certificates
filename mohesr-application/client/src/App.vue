<template>
  <div id="app">
       <nav-bar> </nav-bar>  
      <router-view></router-view>

    
    </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  components : {
    'nav-bar':navbar
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


</style>

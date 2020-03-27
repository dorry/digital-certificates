<template>
  <div id="app">

      <router-view></router-view>
      </div>

</template>

<script>

export default {
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
.top-bar{ 
  min-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
}
.top-bar-menu{
  height: 70px;
  min-width: 100%;
  position:fixed;
  background-color: blueviolet;
  opacity: 0.8;
}
.top-bar-img{
  min-width: 100%;
  height: 400px;
}

</style>

<template>  
<div>
    <div id = "parent-container1"> 
    <div class = "parent-container">
    <div class = "login-container">
    <div class="login-content">

        

    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>

#form
{

  justify-content: center;
  align-items: center;
}
.login-container
{
  height: 45%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #343A40;
  border-radius: 5%;
  padding-top: 8%;
}
.parent-container
{
  margin-top: 4%;
  margin-left: 4%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  text-align: center;
  color:white;
  margin-bottom: 11%;
}

</style>
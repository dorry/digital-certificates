<template>
    <div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:3%">Requests: </h2>
    <br>
  
  <ul>
    <li
    v-for="personName of names" 
    v-bind:key="personName['.key']">
    The Student Name :
    {{personName.name}} from Email : {{personName.mail}}  
    <br>
    <b-button @click="approve(personName['.key'])">Approve</b-button>
    <b-button>Deny</b-button>
    </li>
  </ul>    
    </div>
    </div>
    </div>

  </div>

</template>

<script>
import {namesRef} from './firebase'
export default {
  methods:{
   approve(id) 
   {
       var dialogbox = confirm("Are you sure you want to approve this certificate?");
     
      if (dialogbox == true) {
        namesRef.child(id).remove();
        this.$router.push('addcert')
        alert("Please fill out this student's certificate information "); 
       } 
      else
       {
        alert("Refused");
        namesRef.child(id).remove();

      }
  },    
 },
  firebase: {
    names: namesRef
  },
  computed:{
    
  },
  data() {
    return {
    
    currentPage: 1,
    names: [

        ],
    }
 }

}
</script>

<style scoped>
ul{
    margin-left: 3%;
    justify-content: center;
    align-items: center;
}
li{
  font-weight: bold;
  font-size: 110%;
}
.login-container
{
  height: 45%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #343A40;
  border-radius: 2%;
  padding-top: 3%;
  padding-bottom: 1%;
}
.parent-container
{
  margin-top: 3%;
  margin-left: 5%;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  color:white;
}
</style>
<template>
    <div>
    <div  class = "parent-container">     
    <div class = "login-container">
      <h2 style = "color:white;"> طلبات الشهادات</h2>
    <div class="login-content">
    
    <br>
  
  <ul>
    <li v-for="personName of names" 
    v-bind:key="personName['.key']">
    Student : {{personName.name}} from {{personName.University}}
    <br>
    <b-button @click="approve(personName['.key'])">قبول</b-button>
    <b-button>رفض</b-button>
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
        namesRef.child(id).remove();
        alert("Refused");
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(1,3,5,0.9);
  border-radius: 2%;
  padding-top: 3%;
  padding-bottom: 1%;
  margin-right: 10%;
}
.parent-container
{
  margin-top: 3%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.login-content
{
  color:white;
  margin-right: 50%;
}
</style>
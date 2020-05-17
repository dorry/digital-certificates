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
    <b-button @click="approve(personName['.key'],personName.name,personName.mail)">Approve</b-button>
    <b-button @click="deny(personName['.key'])">Deny</b-button>
    </li>
  </ul>    
    </div>
    </div>
    </div>

  </div>

</template>

<script>
import {namesRef} from './firebase'
import {MohserRef} from './firebase'

export default {
  methods:{
  deny(id)
  {
    var Dialogbox = confirm("Are you sure you want to deny the request?")
    if(Dialogbox == true)
    {

        namesRef.child(id).remove();
        this.$router.push('addcert')
        alert("The request has been deleted , please contact the student for the reason of certificate refusal "); 
    }
    else {alert("Refused"); }

  },
   approve(id,name,mail) 
   {
       var dialogbox = confirm("Are you sure you want to approve this certificate?");
      if (dialogbox == true) {
        MohserRef.child(id).child("Request").set(1);
        MohserRef.child(id).child("University").set("Misr International University");
        MohserRef.child(id).child("mail").set(mail);
        MohserRef.child(id).child("name").set(name);
        this.$router.push('addcert')
        alert("The request has been sent to the Ministry Of Higher Education for approval."); 
       } 
      else
       {
        alert("Refused to approve.");
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
  background-color: #a11f1f;
  border-radius: 2%;
  padding-top: 3%;
  padding-bottom: 1%;
}
.parent-container
{
  margin-top: 3%;
  margin-left: 5%;
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
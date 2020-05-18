<template>
    <div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:3%">تفاصيل الرخصة </h2>
    <br>
  
    <h3
    v-for="personName of names" 
    v-bind:key="personName['.key']">
    الرخصة لشركة : 
    {{personName.company}} فعالة 
    <br>
     من  {{personName.paymonth}}/{{personName.payday}}/{{personName.payyear}} 
    <br>
    حتي 
     {{personName.paymonth}}/{{personName.payday}}/{{personName.expirationdate}}
    <b-button @click="getcompany(personName['.key'])">اظهار التفاصيل</b-button>

    <br>
    </h3>
    </div>
    </div>
    </div>

  </div>

</template>

<script>
import {companiesRef} from './firebase'
export default {
  mounted() 
  {
    this.getcompany();
  },
  methods:{
   getcompany(id)
   {
       
   },

   approve(id) 
   {
       var dialogbox = confirm("Are you sure you want to approve this certificate?");
     
      if (dialogbox == true) {
        companiesRef.child(id).remove();
        this.$router.push('addcert')
        alert("Please fill out this student's certificate information "); 
       } 
      else
       {
        alert("Refused to approve.");
      }
  },    
 },
  firebase: {
    names: companiesRef
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
  background-color: rgba(1,3,5,0.9);
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
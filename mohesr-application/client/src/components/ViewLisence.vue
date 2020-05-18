<template>  
<div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:3%">تفاصيل الرخصة </h2>
    <br>
  
    <b-button @click="getcompany(identity)">اظهار التفاصيل</b-button>
    </div>
    </div>
    </div>

</div>
</template>

<script>
import {companiesRef} from './firebase'
import firebase from 'firebase'

// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
  methods:
  {
    getcompany(mail)
    {
     companiesRef.on("value", function(snapshot) {
        console.log(snapshot.val());
        }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        });
    }  
  },
  data: function() {
    return {

    };
  },
  computed: {
        identity()
        {
            return this.$store.state.identity;
        },
        firstName()
        {
            return this.$store.state.firstName;
        },
    },
   firebase: 
   {
    names: companiesRef
   },
  methods: 
  {
   getcompany(m)
   {
      

   },
  }
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
  background-color:rgba(1,3,5,0.9);
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
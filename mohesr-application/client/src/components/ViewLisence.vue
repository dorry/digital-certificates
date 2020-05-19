<template>  
<div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:3%">تفاصيل الرخصة </h2>
    <br>
    <b-button @click="getcompany('sherifali121@gmail.com')">
      عرض التفاصيل
    </b-button>
    d
   {{x}}
    <br>
    <b-table 
      id="my-table"
      :items="getitems" 
    >
    </b-table>
    </div>
    </div>
    </div>

</div>
</template>

<script>
import {companiesRef , db} from './firebase'
import firebase from 'firebase'

// import image from "../assets/lamp.png"
export default {
  
  data(){
    return {
    x:{},
    items:""

  }
  },
  computed: {
         getx(){
          return this.x;
     
       },
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
          companiesRef.orderByChild('mail')
          .equalTo(m)
          .once("value", function(snapshot) {
              var key;
              snapshot.forEach(function (childSnapshot) {
                  key = childSnapshot.key;
                  return true;
              });
              if (key) {
                var companies2 = db.ref('Companies').child(key);
                companies2.on("value", function(data, prevChildKey) {
                var x = data.val();
                console.log(x);
                //this.x = x;
              this.items="red";
                return x;
                
               });
              } else {
                  console.log("There is nothing of this category");
                  return 0;
              }
          });
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
<template>
<div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:3%">تفاصيل الرخصة </h2>
    <br>
    <b-button @click="getcompany(identity)">
      عرض   
    </b-button>
    {{X}}
    <br>
    </div>
    </div>
    </div>

</div>
</template>


<script>
import {companiesRef , db} from './firebase'
import firebase from 'firebase'
export default {
data(){
 return {
    x:"",
    items:[],

    };

  },  
 computed: {
        X(){
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
                alert(x.company + "   اشتراكها فعال حتي   " + x.paymonth +"/" + x.payday + "/" + x.expirationdate );
              });
              } 
              else {console.log("اشتراكك انتهي او لم يتم الدفع");}
          });

   },
 }
}
</script>

<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
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
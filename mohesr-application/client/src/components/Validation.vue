<template>
    <div id="container">
<div>

  <div  class = "parent-container">
  <div class = "login-container">
    <div class="login-content">
      <h1>التحقق من صحة الشهادة</h1>
      <h2> ادخل بيانات المتخرج</h2>
  <input v-model="validationKey" id="fname"  placeholder="رقم التحقق من صحة الشهادة" style="border-radius: 10px; width: 300px; text-align: center;"><br>
  <br>
  <br>
  <input @click="validate()" type="submit" value=" دخول" id="btn1" style="border-radius: 20px;">
  <div v-if="notEmptyObject()">
  <div  v-for="(data,key) in certificateData" :key="key" style="margin-top:20px">
    <div v-if="key!='screenshot'">
  {{key}} : {{data}}
    </div>
    <div v-else> 
      <img v-bind:src="data" />

    </div>
  </div>
    </div>
    </div>
  </div>

</div>

  

</div>
<span  v-if="admin==false && trigger==true" hidden> {{getcompany(identity)}}</span>

</div>
</template>

<script>
import { eventBus } from '../main'
import APIService from "../services/APIService";
import {companiesRef , db} from './firebase'
import firebase from 'firebase'
export default {
  data(){
    return{
      trigger : true,
      certificateData:{},
      validationKey:"",
      identity:""
    }
  },

  created: function (){
      this.identity = this.$store.state.identity;
   
  },
   computed:
  {   
    admin()
    {
      return this.$store.state.isadmin;
    },
    id(){
       return this.$store.state.identity;
    },
    fn(){
      return this.$store.state.firstName;
    },
    rows() 
    {
    return this.items.length
    },
  },
  methods:{
  getcompany(m)
{
  var d = new Date()  
  this.trigger = false;
  var Dialogbox = confirm("هل اشتركت؟")
    if(Dialogbox == true)
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
            alert("تستطيع التحقق"); 
 
          });
            } 
          else {
            alert("اشتراك الرخصة انتهي او لم يتم الدفع");
            document.location.href = './CreateLisence'

          }
          });

    }
  
  else 
       {
        document.location.href = './ViewLisence'
       }   

},
    async validate(){
  ///  console.log(this.identity);
    const apiResponse = await APIService.validateCertificate("appadmin",this.validationKey);
    console.log(this.id);
    console.log(apiResponse.data);
     if(apiResponse.data=="Valid certificate"){
       const apiResponse = await APIService.readCertificate("appadmin",this.validationKey);
       console.log("Data :");
       console.log(apiResponse.data);
       this.certificateData=apiResponse.data; 
       
     }
     else{
     }
   },
    notEmptyObject(){
      return Object.keys(this.certificateData).length>0;
      console.log(this.certificateData);
    }
  },

    
}
</script>

<style scoped> 

#btn1
{
  color: white;
  background-color: rgb(67, 6, 117);
  border: none;
  width: 100px;
}
#ContainerCheckCertificate
{
  text-align: right;
  margin-top: -215px;
  margin-left: 1220px;
  position: fixed;
}
form
{
  text-align: center;
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
  margin-right: 15%;
  padding-bottom: 5%;
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

}
</style>
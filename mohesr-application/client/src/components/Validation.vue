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
    </div>
    </div>
  </div>

</div>
<div v-if="notEmptyObject()">
  <div  v-for="(data,key) in certificateData" :key="key" style="margin-top:20px">
    <div v-if="key!='screenshot'">
  {{key}} : {{data}}
    </div>
    <div v-else> 
      <img v-bind:src="data" />

    </div>
  </div>
  <img v-bind:src="'data:image/jpeg;base64,'+imageBytes" />

</div>

</div>

</template>

<script>
import { eventBus } from '../main'
import APIService from "../services/APIService";

export default {
  data(){
    return{
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
    async validate(){
  ///  console.log(this.identity);
    const apiResponse = await APIService.validateCertificate(this.id,this.validationKey);
    console.log(apiResponse.data);
     if(apiResponse.data=="Valid certificate"){
       const apiResponse = await APIService.readCertificate(this.validationKey);
       console.log("Data :");
       console.log(apiResponse.data);
       this.certificateData=apiResponse.data; 
       alert(response);
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
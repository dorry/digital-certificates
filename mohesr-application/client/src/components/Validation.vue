<template>

    <div id="container">
    <div>
<h1 style="text-align: right;    position: relative;">التحقق من صحة الشهادة</h1>

    </div>
<div id="ContainerCheckCertificate">
</div>
<h1 style="text-align: center;"> </h1>
<div>
  <h2> ادخل بيانات المتخرج</h2>
  <input v-model="validationKey" id="fname"  placeholder="رقم التحقق من صحة الشهادة" style="border-radius: 10px; width: 300px; text-align: center;"><br>
  <br>
  <br>
  <input @click="validate()" type="submit" value=" دخول" id="btn1" style="border-radius: 20px;">

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

  methods:{

    async validate(){
    console.log(this.identity);
    const apiResponse = await APIService.validateCertificate(this.validationKey);
    console.log(apiResponse.data);
     if(apiResponse.data=="Valid certificate"){
       const apiResponse = await APIService.readCertificate(this.validationKey);
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

<style> 
ul {
  list-style-type: none;
  vertical-align: bottom;
  margin: -8px;
  margin-top: -8px;
  padding: 0px;
  width: 101%;
  height: auto;
  position: absolute;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #ffffff;
  border-bottom: 2px solid gold;
  opacity: 0.5;
  display: flex;
  align-items: flex-end;
}

li {
  float: left;

}

li a {
  display: inline-block;
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 14px 16px;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  bottom: 0px;
  width: 115px;

}
a
{
  border: 10px;
}

li a:hover:not(.active) {
  background-color: rgb(255, 255, 255);
}
#container {
  position: relative;

}
#img1
{
  margin-left: -1%;
  min-width: 100%;
  height: 400px;
  border: 0;
  margin-top: -8px;
}
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
</style>
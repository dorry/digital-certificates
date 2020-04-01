<template>
    <div id="container">
<div id="ContainerCheckCertificate">
<h1 style="text-align: right;"> تحديد هوية</h1>
</div>
<h1 style="text-align: center;"> </h1>
<div>
  <h2> حدد الهوية من المحفظة</h2>
  <input v-model="identity" id="fname"  placeholder="اسم الهوية" style="border-radius: 10px; width: 300px; text-align: center;"><br>
  <br>
  <br>
  <input @click="checkidentity()" type="submit" value=" دخول" id="btn1" style="border-radius: 20px;">

</div>
</div>
</template>

<script>
import APIService from "../services/APIService";
import {eventBus} from "../main";
export default {
  
  data () {
    return {
      identity: ""
    }
  },

  methods:{
     async checkidentity(){
      const apiResponse = await APIService.validateWallet(this.identity);
      console.log(apiResponse.data);
      if(apiResponse.data=="wallet exist"){
        this.$store.state.identity= this.identity;
        this.$router.push("/validation");
      }
    }

  }

  


}
</script>

<style >


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

<template>
<div>
<ul>
  <li><a href="#3">مركز المعلومات</a></li>
  <li><a href="#4">الخدمات</a></li>
  <li><a href="#5">البحث العلمي</a></li>
  
  <li><a href="#6">مؤسسات التعليم العالي</a></li>

  <li  v-if="identity != ''"><b><router-link to="/Validation" > التحقق من شهادة </router-link></b></li>
  <li  v-if="identity != ''"><b><router-link to="/publicunis"> الجامعات </router-link></b></li>
  <li><b><router-link to="/">الرئيسية</router-link></b></li>
  <li  v-if="identity != ''"><b><router-link to="/login" > تسجيل خروج </router-link></b></li>
  <li v-else><b><router-link to="/login">تسجيل دخول </router-link></b></li>     
  <li v-if="identity != ''"><h3> <b> مرحبا {{firstName }} </b> </h3></li>
  <li style="float:right"><img src="../assets/flagg.png" alt="Egypt" style="width:200px;height:200px;border:0;margin-left:250px;"></li>
</ul>
<img src="../assets/grad.png" alt="grad" id="img1">
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
computed: {
        identity(){
            return this.$store.state.identity;
        },
        firstName(){
            return this.$store.state.firstName;
        }
    },
     
}
</script>
<style scoped>
#img1
{
  min-width: 100%;
  height: 400px;
  border: 0;
  margin-top: -8px;
}
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
</style>
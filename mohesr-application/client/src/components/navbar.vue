<template>
<div>

    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-nav-item>{{firstName}} مرحبا </b-nav-item>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item><router-link to="/home"> الصفحة الاساسية </router-link></b-nav-item>        
        <b-nav-item  v-if="identity ==''"><router-link to="/login"> تسجيل دخول </router-link></b-nav-item>
        <b-nav-item  v-else><router-link to="/login" > تسجيل خروج </router-link></b-nav-item>
        <b-navbar-brand> <b> وزارة التعليم العالي و البحث العلمي <img src="../assets/flagg.png" alt="Egypt" style="width:50px;height:50px;">  </b></b-navbar-brand>
          
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </template>
<!-- <ul>
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
 
</ul> -->

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
  min-width: 100%;;
  height: 400px;
  border: 0;
  margin-top: -220px;
}
#nb
{
  margin-left: 2%;
}
.bg-dark {
 background-color:rgba(1,3,5,0.9)!important;
}
a
{
  color: #ffffff;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  margin-top: 5%;

}
a:hover
{
  padding: 5px 5px;
  background-color: rgb(255, 255, 255);
  color:rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
}
</style>
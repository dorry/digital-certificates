<template>
<div>
  <b-navbar id = "hh"  toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand class = "aligning"> <b> وزارة التعليم العالي و البحث العلمي <img src="../assets/flagg.png" alt="Egypt" style="width:50px;height:50px;">  </b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nb" class = "aligningForItems">
        <b-nav-item ><router-link to="/home">  الصفحة الاساسية </router-link></b-nav-item>        
        <b-nav-item  v-if="identity =='' "><router-link to="/login">تسجيل دخول  </router-link></b-nav-item>
        <b-nav-item  v-else><router-link to="/login"> تسجيل خروج </router-link></b-nav-item>

      </b-navbar-nav>
      <b-navbar-nav class="mr-auto">
        
        <b-nav-item-dropdown v-if="identity !='' && admin==true" right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em >{{firstName}},مرحبا</em>
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {

computed: {
        admin(){
          return this.$store.state.isadmin;
        },
        identity(){
            return this.$store.state.identity;
        },
        firstName(){
            return this.$store.state.firstName;
        }
    },
     
}
</script>

<style>
#hh
{
  height: 6vh;
}
.aligningForItems
{
  position: absolute; 
  right: 0%;
  margin-right: 17%;
}
.aligning
{
  position: absolute; 
  right: 0%;
}
.bg-dark {
 background-color:rgba(1,3,5,0.9)!important;
}
#nb
{
  margin-left: 2%;
}
#logo
{
  margin-left: 2%;
}
a
{
   
    color: #ffffff;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
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
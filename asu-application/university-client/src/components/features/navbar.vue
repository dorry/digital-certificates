<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">PUBLIC UNIVERSITY</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/home"> Home </router-link></b-nav-item>        
        <b-nav-item  v-if="identity ==''"><router-link to="/login"> Login </router-link></b-nav-item>
        <b-nav-item  v-else><router-link to="/login"> Logout </router-link></b-nav-item>

      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown v-if="identity !=''" right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em >{{firstName}}</em>
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
a{
  color:#919497;
}
</style>
<template>
<div>
  <div class=" vertical-nav" >
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item active>All Certificates</b-nav-item>
        <b-nav-item>Add Certificate</b-nav-item>
        <b-nav-item>Register Admin</b-nav-item>
        <b-nav-item >Statistics</b-nav-item>
    </b-nav>
    <add-cert style="margin-top:-150px"> </add-cert>

</div>
</div>
</template>

<script>
import add from "./AddCertificate.vue";
export default {
components:{
    "addCert":add
  },
}
</script>

<style>
.vertical-nav{
    background-color:#343A40 ;
    width: 15%;
    height: 100vh;
}
.horizontol-line{
    height: .1em;
   
    background-color: white;
}

</style>
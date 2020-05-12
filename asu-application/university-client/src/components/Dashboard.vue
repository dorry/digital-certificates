<template>
<div>
  <div class=" vertical-nav" >
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item  v-if="id !=''"><router-link to="/addcert"> AddCertificate </router-link></b-nav-item>
        <b-nav-item v-if="id !=''">Register Admin</b-nav-item>
        <b-nav-item  v-if="id !=''"><router-link to="/university"> All Certificates </router-link></b-nav-item>
        <b-nav-item v-if="id !=''" ><router-link to="/stats">Statistics </router-link></b-nav-item>
        <b-nav-item v-if="id !=''" ><router-link to="/Request">Request Certificate </router-link></b-nav-item>
        
    </b-nav>
    <!-- <add-cert style=" margin-top:-150px"> </add-cert> -->

</div>

</div>
</template>

<script>
import APIService from "../services/APIService";
import add from "./AddCertificate.vue";
export default {
 data(){
  return {
   response:[],
   Electronics:0,
   MassComm:0,
   items: [
    
   ],
   option : 
  {
    title:{
    display:true,
    position:"Bottom",
    text: "Fruits"
       }
      }
    };
  },  
components:{
    "addCert":add
  },
 methods:{
      adddata(){
      },  
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
    getItems(){
      this.queryAll();
      console.log("response"+this.response);
      this.items= this.changeObj(this.response);
      return this.items;  
    },           
  },  
};
</script>

<style>
.vertical-nav{
    position: absolute;
    background-color:#343A40 ;
    width: 15%;
    height: 119vh;
}
.horizontol-line{
    height: .1em;
       position: absolute;

    background-color: white;
}

</style>
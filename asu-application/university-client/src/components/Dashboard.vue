<template>
<div>
  <div class=" vertical-nav" v-if="id !=''">
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item v-if="admin==true"><router-link to="/addcert"> Add Certificate </router-link></b-nav-item>
        <b-nav-item v-if="admin==true">Register Admin</b-nav-item>
        <b-nav-item v-if="admin==true"><router-link to="/clist"> View All Certificates </router-link></b-nav-item>
        <b-nav-item v-if="admin==true"><router-link to="/stats">Statistics </router-link></b-nav-item>
        <b-nav-item v-if="admin==false"><router-link to="/Request">Request Certificate </router-link></b-nav-item>
        <b-nav-item v-if="admin==false"><router-link to="/viewMyCert">View My Certificate </router-link></b-nav-item>
        <b-nav-item v-if="admin==true" v-on:click="notification"><router-link to="/Requestlist">View Requests <span v-if="count>0">{{count}}</span></router-link></b-nav-item> 
        <b-nav-item v-if="admin==true" v-on:click="notification">Refresh</b-nav-item> 

    </b-nav>
    <!-- <add-cert style=" margin-top:-150px"> </add-cert> -->

</div>

</div>
</template>

<script>
import APIService from "../services/APIService";
import add from "./AddCertificate.vue";
import {namesRef} from './firebase'
export default {
 data(){
  return {
  count:0,
   response:[],
   items: [],
  };
  },  
  firebase: {
    names: namesRef
  },
components:{
    "addCert":add
  },
 methods:{
      adddata(){},  
      notification: function(){
      this.count=0;
      var counter=0;
    namesRef.on('value',gotData,errData);
    
    function gotData(data) {
    var info=data.val();
    var keys=Object.keys(info);
    counter=keys.length;
    return keys.length;
    }
    function errData()
    {
      return "error";
    }
return this.count=counter;
  },

    
    fn(){
      return this.$store.state.firstName;
    },
    rows() 
    {
    return this.items.length
    },
  },
 
  computed:
  {  
    id(){
       return this.$store.state.identity;
    },
    admin(){
        return this.$store.state.isadmin;
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
    height: 200vh;
}
.horizontol-line{
    height: .1em;
       position: absolute;

    background-color: white;
}
a
{
  color: #919497;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
}
a:hover
{
  padding: 5px 5px;
  background-color: white;
  color:black;
  text-decoration: none;
  font-weight: bold;
}
</style>
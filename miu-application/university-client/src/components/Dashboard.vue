<template>
<div>
  <div v-if ="id !=''" class=" vertical-nav" >
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item v-if="id !=''"><router-link to="/clist"> View All Certificates </router-link></b-nav-item>
        <b-nav-item v-if="id !=''" ><router-link to="/stats">Statistics </router-link></b-nav-item>
        <b-nav-item v-if="id !=''" ><router-link to="/Request">Request Certificate </router-link></b-nav-item>

    </b-nav>
    <!-- <add-cert style=" margin-top:-150px"> </add-cert> -->

</div>

</div>
</template>

<script>
import APIService from "../services/APIService";
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
    background-color:#a11f1f;
    width: 15%;
    height: 140vh;
}
.horizontol-line{
    height: .1em;
       position: absolute;

    background-color: #a11f1f;
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
  background-color: rgb(0, 0, 0);
  color:rgb(255, 255, 255);
  text-decoration: none;
  font-weight: bold;
}
</style>
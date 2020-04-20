<template>
<div>
  <div class=" vertical-nav" >
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item  v-if="identity !=''"><router-link to="/addcert"> AddCertificate </router-link></b-nav-item>
        <b-nav-item>Register Admin</b-nav-item>
        <b-nav-item  v-if="identity !=''"><router-link to="/university"> All Certificates </router-link></b-nav-item>
        <b-nav-item >Statistics</b-nav-item>
    </b-nav>
    <!-- <add-cert style=" margin-top:-150px"> </add-cert> -->

</div>
      <chartjs-doughnut  
            v-bind="datasets"
            v-bind:option="option"
            v-bind:labels="labels">
             </chartjs-doughnut>
        <h1>{{getElectronics()}}</h1>
        <h1 hidden>{{getItems}}</h1>   
        <h1 style="margin-left:300px">Graduates from Faculty Of Electronics : {{getElectronicsC}}</h1>

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
   s:3,
   MassComm:[],
   items: [
    
   ],
   labels:["Electronics", "Mass Communication", "Business"],
   datasets:[
    {       
     data: [this.s,30,50],
     backgroundColor: ["Red","Yellow","Purple"]
    }
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
      getElectronics(){
      var items = this.getItems;
      for(var i =0; this.Electronics<items.length; i++){
        console.log("Value Of I :");
        console.log(i);
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Electronics")
        {
          this.Electronics++;
        }
      }
      this.Electronics -=1;
      return this.Electronics;  

      },
      async queryAll(){
        const response =  await APIService.queryAll('appadmin');
        console.log(response.data);
        this.waiting = false;
        this.response = response.data;       
    },
      changeObj(arrObj){
        var items=[];
        arrObj.forEach(obj=> {
          var item = {};
          item.ID = obj.Key;
          console.log(obj.Key + "item.ID: " + item.ID);
          item.Name = obj.Record.name;
          item.GPA = obj.Record.gpa;
          item.Faculty = obj.Record.faculty;
          item.University = obj.Record.university;
          console.log(obj.Record.university + "item.name: " + item.University);
          items.push(item);
          console.log("from changeobj: "+ item)
        });
        return items;
    },    
  },
  computed:
  {
    getElectronicsC(){
      return this.Electronics;  
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
   
    background-color: white;
}

</style>
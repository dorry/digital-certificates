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
    <pie-chart ></pie-chart> 
<pie-chart 
:data="[['Electronics',getElectronicsC ], ['Masscomm.', getMasscommsC]]">
</pie-chart>
        <h1 hidden>{{getElectronics()}}</h1>
        <h1 hidden>{{getMasscom()}}</h1>
        <h1>{{getElectronicsC}}</h1>
        <h1>{{getMasscommsC}}</h1>
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
      getElectronics(){
      var items = this.getItems;
      for(var i =0; this.Electronics<items.length; i++){
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Electronics")
        {
          this.Electronics++;
        }
      }
      return this.Electronics;  
      },
      getMasscom(){
      var items = this.getItems;
      for(var i =0; this.MassComm<items.length; i++){
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Mass Communication")
        {
          this.MassComm++;
        }
      }
      return this.MassComm;
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
      return this.Electronics-1;  
    },
    getMasscommsC(){
      return this.MassComm-1;  
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
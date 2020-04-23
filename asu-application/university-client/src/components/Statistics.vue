<template>
<div>

 <div style="top:35%;">
      <pie-chart 
      :data="[['Electronics',getElectronicsC ], 
      ['Masscomm.', getMasscommsC],
      ['Business', getBusinessC], 
      ['Pharmacy', getPharmacyC],
       ['Medical',getMedicalC]]">
      </pie-chart>
      </div>
      <h1>{{getElectronics()}}</h1>
      <h1>{{getBusiness()}}</h1>
      <h1>{{getMasscom()}}</h1>
      <h1>{{getPharmacy()}}</h1>
      <h1>{{getMedical()}}</h1>

    <h1 hidden>{{getItems}}</h1>   


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
   Business: 0,
   Pharmacy: 0,
   Medical:0,
   items: [
    
   ],
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
      getPharmacy(){
      var items = this.getItems;
      for(var i =0; this.Pharmacy<items.length; i++){
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Pharmacy")
        {
          this.Pharmacy++;
        }
      }
      return this.Pharmacy; 
      },
      getMedical(){
      var items = this.getItems;
      for(var i =0; this.Medical<items.length; i++){
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Medical")
        {
          this.Medical++;
        }
      }
      return this.Medical; 
      },
      getBusiness(){
      var items = this.getItems;
      for(var i =0; this.Business<items.length; i++){
        if(i >= items.length)
        return;
        if(items[i].Faculty == "Business")
        {
          this.Business++;
        }
      }
      return this.Business;  
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
    getPharmacyC(){
        return this.Pharmacy-1;
    },
    getBusinessC(){
      return this.Business-1;
    },
    getMasscommsC(){
      return this.MassComm-1;  
    },    
    getMedicalC()
    {
      return this.Medical-1;
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
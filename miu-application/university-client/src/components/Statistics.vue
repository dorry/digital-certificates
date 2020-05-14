<template>
<div>

 <div style="top:35%;">
    <div style=
    "
    top:45%;
    position: absolute;
    left: 50%; ">
    <b-spinner style="width: 8rem; height: 8rem;" v-if="waiting" label="Spinning"></b-spinner>
    </div>      
      <pie-chart 
      v-if="!waiting"
      :data="[
      ['Medical',getMedicalC],
      ['Electronics',getElectronicsC],
      ['Pharmacy', getPharmacyC],
      ['Masscomm', getMasscommsC],
      ['Business', getBusinessC]
      ]">
      </pie-chart>
      </div>
    <h1>{{getElectronics()}}</h1>
    <h1>{{getPharmacy()}}</h1>
    <h1>{{getMasscomm()}}</h1>
    <h1>{{getMedical()}}</h1>  
    <h1>{{getBusiness()}}</h1> 

    <h1 hidden>{{getItems}}</h1>   


</div>
    
</template>
<script>
import APIService from "../services/APIService";
export default {
 data(){
  return {
   waiting: true,
   response:[],
   i:0,
   Loopelec:0,
   Looppharm:0,
   Loopbusi:0,
   Loopmass:0,
   Electronics:0,
   MassComm:0,
   Business: 0,
   Pharmacy: 0,
   Medical:0,
   items: [],
    };
  },  
components:{
  },
 methods:{
      adddata(){
      },
      getElectronics(){
      var items = this.getItems;
      for(var x = 0; this.Electronics<this.rows;this.Loopelec++)
      {
        console.log(this.Electronics);
        if(this.Loopelec==this.rows)
        {
          console.log("STOPPED");
          return this.Electronics;
        }
        if(items[this.Loopelec].Faculty == "Electronics")
        {
          this.Electronics++;
        }

      }
      return this.Electronics; 
  },
      getBusiness(){
      var items = this.getItems;
      for(var x = 0; this.Business<this.rows;this.Loopbusi++)
      {
        console.log(this.Electronics);
        if(this.Loopbusi==this.rows)
        {
          console.log("STOPPED");
          return this.Business;
        }
        if(items[this.Loopbusi].Faculty == "Business")
        {
          this.Business++;
        }

      }
      return this.Business; 
  },
      getPharmacy(){
      var items = this.getItems;
      for(var x = 0; this.Pharmacy<this.rows;this.Looppharm++)
      {
        console.log(this.Pharmacy);
        if(this.Looppharm==this.rows)
        {
          console.log("STOPPED");
          return this.Pharmacy;
        }
        if(items[this.Looppharm].Faculty == "Pharmacy")
        {
          this.Pharmacy++;
        }

      }
      return this.Pharmacy; 
  },
      getMasscomm(){
      var items = this.getItems;
      for(var x = 0; this.MassComm<this.rows;this.Loopmass++)
      {
        console.log(this.MassComm);
        if(this.Loopmass==this.rows)
        {
          console.log("STOPPED");
          return this.MassComm;
        }
        if(items[this.Loopmass].Faculty == "Pharmacy")
        {
          this.MassComm++;
        }

      }
      return this.MassComm; 
  },
      getMedical(){
      var items = this.getItems;
      for(var x = 0; this.Medical<this.rows;this.i++)
      {
        console.log(this.Medical);
        if(this.i==this.rows)
        {
          console.log("STOPPED");
          return this.Medical;
        }
        if(items[this.i].Faculty == "Medical")
        {
          this.Medical++;
        }

      }
      return this.Medical; 
  },
      async queryAll(){
        if(!this.getwait)
        {
        console.log("Request loop prevenetedd");
        return; 
        }
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
    getwait()
    {
      return this.waiting;
    },
    getElectronicsC(){
      return this.Electronics;  
    },
    getPharmacyC(){
      return this.Pharmacy;  
    },
    getBusinessC(){
      return this.Business;  
    },
    getMasscommsC(){
      return this.MassComm;
    },    
    getMedicalC()
    {
      return this.Medical;
    },
    rows() 
    {
    return this.items.length;
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
/* .vertical-nav{
    position: absolute;
    background-color:#343A40 ;
    width: 15%;
    height: 119vh;
} */
.horizontol-line{
    height: .1em;
       position: absolute;

    background-color: white;
}

</style>
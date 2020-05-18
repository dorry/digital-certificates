<template>
<div>

 <div style="top:35%;">
    <!-- <div style=
    "
    top:45%;
    position: absolute;
    left: 50%; ">
    <b-spinner style="width: 8rem; height: 8rem;" v-if="waiting" label="Spinning"></b-spinner>
    </div>       -->
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
<h3>Average GPA in faculties</h3>
<bar-chart id="hh" 
  :data="[
         
         ['Electronics', getElectronicsgpa()],
         ['Business', getBusinessGPA()],
         ['Pharmacy', getPharmacyGPA()],
         ['Mass Communication', getMasscommGPA()],
         ['Medical', getMedicalGPA()],
         ]"></bar-chart>
    </div>
    </div>
    </div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
<h3>Graudated student from each faculty</h3>
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
    </div>
    </div>
</div>
     
      <br>


    <h1 hidden>{{getItems}}</h1>   

    <h1>{{getElectronics()}}</h1>
    <h1>{{getPharmacy()}}</h1>
    <h1>{{getMasscomm()}}</h1>
    <h1>{{getMedical()}}</h1>  
    <h1>{{getBusiness()}}</h1> 
    <h1>{{getElectronicsgpa()}}</h1> 
    <h1>{{getBusinessGPA()}}</h1>
    <h1>{{getPharmacyGPA()}}</h1>
    <h1>{{getMasscommGPA()}}</h1>
    <h1>{{getMasscommGPA()}}</h1>
          </div>

</template>
<script>
import APIService from "../services/APIService";
import add from "./AddCertificate.vue";
export default {
 data(){
  return {
   waiting: true,
   response:[],
   i:0,
   gpaelec:0,gpapharm:0,gpamedic:0, gpamass:0,gpabusi:0,
   counterelec:0, counterbusi:0, countermedic:0, countermass:0, counterpharm:0,
   Loopelec2:0, Looppharm2:0, Loopbusi2:0,Loopmass2:0, Loopmedic2:0,

   Loopelec:0, Looppharm:0, Loopbusi:0, Loopmass:0,
   Electronics:0, MassComm:0, Business: 0, Pharmacy: 0, Medical:0,
   items: [],
    };
  },  
 methods:{
      adddata(){
      },
    getBusinessGPA(){
      var items = this.getItems;
     for(var x = 0; this.countermedic<this.rows;this.Loopbusi2++)
      {
         if(this.Loopbusi2==this.rows)
        {        
          return this.gpamedic/(this.countermedic);
        } 
        if(items[this.Loopbusi2].Faculty == "Business")
        {
          this.countermedic++;
          console.log(this.countermedic +  " + " + parseFloat(items[this.Loopbusi2].GPA));
          this.gpamedic = parseFloat(this.gpamedic) + parseFloat(items[this.Loopbusi2].GPA);
          console.log("after"+this.gpamedic);

        }
      }
  },
  getMedicalGPA(){
      var items = this.getItems;
     for(var x = 0; this.counterbusi<this.rows;this.Loopmedic2++)
      {
         if(this.Loopmedic2==this.rows)
        {        
          return this.gpabusi/(this.counterbusi);
        } 
        if(items[this.Loopmedic2].Faculty == "Business")
        {
          this.counterbusi++;
          console.log(this.counterbusi +  " + " + parseFloat(items[this.Loopmedic2].GPA));
          this.gpabusi = parseFloat(this.gpabusi) + parseFloat(items[this.Loopmedic2].GPA);
          console.log("after"+this.gpabusi);

        }
      }
  },
  getMasscommGPA(){
      var items = this.getItems;
     for(var x = 0; this.countermass<this.rows;this.Loopmass2++)
      {
         if(this.Loopmass2==this.rows)
        {        
          return this.gpamass/(this.countermass);
        } 
        if(items[this.Loopmass2].Faculty == "Business")
        {
          this.countermass++;
          console.log(this.countermass +  " + " + parseFloat(items[this.Loopmass2].GPA));
          this.gpamass = parseFloat(this.gpamass) + parseFloat(items[this.Loopmass2].GPA);
          console.log("after"+this.gpamass);

        }
      }
  },
  getPharmacyGPA(){
      var items = this.getItems;
     for(var x = 0; this.counterpharm<this.rows;this.Looppharm2++)
      {
         if(this.Looppharm2==this.rows)
        {        
          return this.gpapharm/(this.counterpharm);
        } 
        if(items[this.Looppharm2].Faculty == "Business")
        {
          this.counterpharm++;
          console.log(this.counterpharm +  " + " + parseFloat(items[this.Looppharm2].GPA));
          this.gpapharm = parseFloat(this.gpapharm) + parseFloat(items[this.Looppharm2].GPA);
          console.log("after"+this.gpapharm);

        }
      }
  },
    getElectronicsgpa(){
      var items = this.getItems;
     for(var x = 0; this.counterelec<this.rows;this.Loopelec2++)
      {
         if(this.Loopelec2==this.rows)
        {        
          return this.gpaelec/(this.counterelec);
        } 
        if(items[this.Loopelec2].Faculty == "Electronics")
        {
          this.counterelec++;
          console.log(this.counterelec +  " + " + parseFloat(items[this.Loopelec2].GPA));
          this.gpaelec = parseFloat(this.gpaelec) + parseFloat(items[this.Loopelec2].GPA);
          console.log("after"+this.gpaelec);

        }
      }
  },
    getElectronics(){
      var items = this.getItems;
      for(var x = 0; this.Electronics<this.rows;this.Loopelec++)
      {
        if(this.Loopelec==this.rows)
        {
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
       if(this.Loopbusi==this.rows)
        {
          // console.log("STOPPED");
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
        if(this.Looppharm==this.rows)
        {
          // console.log("STOPPED");
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
       if(this.Loopmass==this.rows)
        {
          // console.log("STOPPED");
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
         if(this.i==this.rows)
        {
          // console.log("STOPPED");
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
#hh
{
  color:blanchedalmond;
}
#sm{

margin-left: 15%;
}
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
.login-container
{
  height: 45%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #343A40;
  border-radius: 2%;
  padding-top: 3%;
  padding-bottom: 1%;
  padding-left: 2%;
  padding-right: 2%;
}
.parent-container
{
  margin-top: 3%;
  margin-left: 5%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  color:white;
}

</style>
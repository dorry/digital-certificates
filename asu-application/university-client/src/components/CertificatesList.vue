<template>
  <div>      
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 style="margin-left:5%"> Certificates : </h2>
    </div>  
    <div style =
    " top:45%;
    position: absolute;
    left: 50%; ">
    <b-spinner style="width: 8rem; height: 8rem;"  v-if="waiting" label="Spinning"></b-spinner>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <div id="table">
    <br>
    <b-table 
      :bordered="bordered"
      @row-clicked="myRowClickHandler"
      id="my-table"
      :items="getItems" 
      :per-page="perPage"
      :current-page="currentPage">
    </b-table>
    <b-alert style="position:absolute; top:70%;right: 30%;" id = "certificate-info" v-model="rowClicked" variant="primary" dismissible>   
      <div>
      <div v-for="(data,key) in viewobj" :key="key" style="margin-top:20px">
        <div v-if="key!='screenshot'">
          {{key}} : {{data}}
        </div>
      <div v-else> 
      <img v-bind:src="data" />

      </div>
      </div>
  

      </div>
    </b-alert>

    </div>
    </div>
    </div>

  </div>
</template>
<script>

import APIService from "../services/APIService";

export default {

 data() {
    return {
      ID: 0,
      viewobj:{},
      rowClicked:false,
      waiting: true,
      bordered: true,
      perPage: 20,
      currentPage: 1,
      items: [],
      response:[]
      }
    },
    computed: {
      wait(){
        return this.wait
      },
      rows() {
        return this.items.length
      },
     
      getItems(){
         this.queryAll();
         this.$store.commit("setListResponse",this.response);
         this.items= this.changeObj(this.response);
         return this.items;
      },
     
    },
    methods:{

      async queryAll(){
        const response =  await APIService.queryAll('appadmin');
        this.waiting = false;
        this.response = response.data;       
    },
      changeObj(arrObj){
        var items=[];
        arrObj.forEach(obj=> {
          if(obj.Record.university == "Public University")
          {
          var item = {};
          item.ID = obj.Key;
          item.Name = obj.Record.name;
          item.GPA = obj.Record.gpa;
          item.Faculty = obj.Record.faculty;
          item.University = obj.Record.university;
          items.push(item);
          }
        });
        return items;
    },
      changeObjForView(arrObj){
        var items=[];
        arrObj.forEach(obj=> {
          if(obj.Record.university == "Public University")
          {
          var item = {};
          item.ID = obj.Key;
          item.Name = obj.Record.name;
          item.GPA = obj.Record.gpa;
          item.Faculty = obj.Record.faculty;
          item.University = obj.Record.university;
          item.Screenshot = obj.Record.screenshot;
          item.TransactionMonth = obj.Record.transaction_month;
          item.TransactionYear = obj.Record.transaction_year;
          items.push(item);
          }
        });
        return items;
    },
     findObj(){
      var arrObjView = this.$store.state.listResponse;
      arrObjView.forEach( obj=>{
        if(this.ID == obj.Key){
          console.log(obj.Record);
          this.viewobj=obj.Record;
          return obj.Record;
        }
      });
      },
    
        myRowClickHandler(record, index) {
          this.rowClicked = true;
          this.ID = record.ID;
          this.findObj();
          console.log(this.viewobj);

        }
},

    }
  
</script>

<style scoped>
#table
{
    justify-content: center;
    align-items: center;
}
.b-pagination{
    margin-left: 20%;
 }
.b-table{
  background-color: white;
  align-self: center;
    width: 100%;
  height: auto;
}
.btn-info
{
  background-color:#343A40;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
}
.btn-info:hover
{
  padding: 5px 5px;
  background-color: white;
  color:black;
  text-decoration: none;
  font-weight: bold;
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

.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    position:absolute;
     top:1100%;
     right: 30%;
}
</style>
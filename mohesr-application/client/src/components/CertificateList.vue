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
      :current-page="currentPage"
    >
    </b-table>
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
         console.log("response"+this.response);
         this.items= this.changeObj(this.response);
         return this.items;
      }
    },
    methods:{
      async queryAll(){

        const response =  await APIService.queryAll('appadmin');
        console.log(response.data);
        this.waiting = false;
        // this.changeObj(response.data);
        this.response = response.data;
        // console.log(this.items.length);
       
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
        myRowClickHandler(record, index) {
          alert("Viewed ");
          // 'record' will be the row data from items
          // `index` will be the visible row number (available in the v-model 'shownItems')
          log(record); // This will be the item data for the row
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
.b-table
{
  background-color: white;
  align-self: center;
  width: 100%;
  height: auto;
  
}
.login-container
{
  height: 45%;
  width: 60%;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(1,3,5,0.9);
  border-radius: 2%;
  padding-top: 3%;
  padding-bottom: 1%;
  margin-right: 15%;
  padding-left: 2%;
  padding-right: 2%;
}
.parent-container
{
  margin-top: 3%;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  align-items: center;
  justify-content: center;
  color:white;
}
</style>
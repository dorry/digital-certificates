<template>
  <div>  

    
    <div style=
    "
    top:45%;
    position: absolute;
    left: 50%; ">
    <b-spinner style="width: 8rem; height: 8rem;" v-if="waiting" label="Spinning"></b-spinner>
    </div>
       <b-pagination
      v-if="!waiting"
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
     items: [
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
        ],
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
  //     created: function (){
  //       this.queryAll();
  //        console.log("response"+this.response);
  //        this.items= this.changeObj(this.response);
  //        console.log(this.items);
        
  // },
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
#table{
    margin-left: 20%;
    justify-content: center;
    align-items: center;
}
.b-pagination{
    margin-left: 20%;
 }
.b-table{
  background-color: white;
  align-self: center;
  width: 1100px;
}
</style>
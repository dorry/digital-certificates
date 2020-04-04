<template>
  <div>  
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-table 
      @row-clicked="myRowClickHandler"
      id="my-table"
      :items="items" 
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
    </b-table>
  </div>
</template>
<script>

import APIService from "../services/APIService";

export default {

 data() {
    return {
     perPage: 20,
     currentPage: 1,
     items: [
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          // { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },

        ],
      response:[]
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      getItems(){
         this.queryAll();
         console.log(this.response);
         this.items= this.changeObj(this.response);
         return 0;
        
      }
    },
    methods:{
      async queryAll(){

        const response =  await APIService.queryAll('appadmin');
        console.log(response.data);
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
          console.log(obj.Record.name + "item.name: " + item.Name);
          item.GPA = obj.Record.gpa;
          item.Faculty = obj.Record.faculty;
          item.University = obj.Record.University;
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


<template>
  <div>  
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
        <div id="table">

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
  </div>
</template>
<script>
export default {
  methods: {
  myRowClickHandler(record, index) {
    alert("Viewed ");
    // 'record' will be the row data from items
    // `index` will be the visible row number (available in the v-model 'shownItems')
    log(record); // This will be the item data for the row
  }
},
 data() {
    return {
     perPage: 5,
     currentPage: 1,
     items: [
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
          { ID: 1, Name: 'Alley Mostafa El Dorry El Gamed', GPA: 4.0 , Faculty: "CS", University:"ASU" },
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>


<style>
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
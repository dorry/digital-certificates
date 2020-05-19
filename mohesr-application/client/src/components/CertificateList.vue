<template>
  <div>  

    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h2 >  :قائمة الطلاب </h2>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3" style = "color:white;">صفحة: {{ currentPage }}</p>
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
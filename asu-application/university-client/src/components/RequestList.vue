<template>
    <div>

      <h2 style="margin-left:15%;"> Requests Made :  </h2>
    <div style =
    " top:45%;
    position: absolute;
    left: 50%; ">
    <b-spinner style="width: 8rem; height: 8rem;" v-if="waiting" label="Spinning"></b-spinner>
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
      :items="items" 
      :per-page="perPage"
      :current-page="currentPage"
    >
    </b-table>
    </div>
    </div>

</template>

<script>
export default {
  methods:{
    myRowClickHandler() {
        alert("Viewed ");
   }    
 },
  data() {
    return {
    currentPage: 1,
    items: [
        { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
        ],
    }
 }

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
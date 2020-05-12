<template>
    <div>

    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
   <h2 class="h4">Requests Made: </h2>
    </div>  
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
         { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
          { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
           { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
            { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
             { Email: 'sherif@asu.com' , FirstName: "Sherif" , LastName: "El Nayad"},
        ],
    }
 }

}
</script>

<style scoped>
#table
{
  margin-left: 2%;
  justify-content: center;
  align-items: center;
}
.b-pagination
{
  margin-left: 2%;
}
.b-table
{
  background-color: white;
  align-self: center;
  width: 1100px;
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
}
.parent-container
{
  margin-top: 3%;
  margin-left: 5%;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  margin-left: 40%;
  color:white;
}
</style>
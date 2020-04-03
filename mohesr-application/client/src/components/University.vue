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
      id="my-table"
      :newitems="newitems" 
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
  methods: {
    async query(){
    const apiResponse = await APIService.queryAll("appadmin");
    console.log(apiResponse.data);
       console.log(apiResponse.data);
       this.items=apiResponse.data;
   },

},
  //created de bt5ly el function tfire lama el page tload
  created: function(){
        alert("triggered");
        this.query()
    },
 data() {
    return {
     perPage: 5,
     currentPage: 1,
     newitems:[
    
     ],
     items: []
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>


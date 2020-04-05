<template>
  <div>
    <h2>Welcome</h2>
  </div>
  
</template>

<script>
export default {
    data(){
        return{

             }
        
    },

    computed: {
        identity(){
            return this.$store.state.identity;
        },
        firstName(){
            return this.$store.state.firstName;
        }
    },
  

}
</script>

<style>

</style>
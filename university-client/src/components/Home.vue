<template>
  <div >
     identity: {{ identity + firstName + islogged }}
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
            return this.$store.state.islogged;
        },
        identity(){
            return this.$store.state.identity;
        },
        firstName(){
            return this.$store.state.firstName;
        }
    }

}
</script>

<style>

</style>
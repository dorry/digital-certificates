<template>
  <div >
      {{getIdentity}}
  </div>
</template>

<script>
export default {
    data(){
        identity = ""
    },



    computed: {
        getIdentity(){
            return this.$store.state.identity;
        }
    }

}
</script>

<style>

</style>
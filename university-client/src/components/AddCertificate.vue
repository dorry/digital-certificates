<template>


</template>


<script>
import VueBase64FileUpload from 'vue-base64-file-upload';
import APIService from "../services/APIService";

export default {
    data(){
        return{
            gpa:"",
            certificateId:"",
            name:"",
            grade:"",
            screenshot:"",
            customImageMaxSize: 3

        }
    },
    methods:{
    async addCertificate(){
       const response =  await APIService.addCertificate(this.certificateId,this.name,this.gpa,this.grade,this.screenshot)
       alert(response);
    },
     onFile(file) {
      console.log(file); // file object
    },

    onLoad(dataUri) {
      console.log(dataUri); // data-uri string
      this.screenshot = dataUri;
    },

    onSizeExceeded(size) {
      alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
    }


    },
     components: {
    VueBase64FileUpload,
  },

}
</script>

<style>

  
</style>

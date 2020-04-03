<template>
<div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <h2 class="h4 mb-4">Please fill the certificate information</h2>
    <b-form class="text-center border border-light p-5">
    <b-input class="form-control mb-4" v-model="name" id="inline-form-input-nid" placeholder="Name"></b-input>
    <b-input class="form-control mb-4" v-model="certificateId" id="inline-form-input-nid" placeholder="National ID"></b-input>
    <b-input class="form-control mb-4" v-model="gpa" id="inline-form-input-username" placeholder="GPA"></b-input>
    <b-input class="form-control mb-4" v-model="grade" id="inline-form-input-username" placeholder="Grade"></b-input>
    <b-form-select v-model="faculty" class="form-control mb-4"  id="inline-form-input-nid" :options="options"></b-form-select>
    <vue-base64-file-upload    
         accept="image/png,image/jpeg"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
        <br>
    <b-button @click="addCertificate()" id="submitbtn" class="btn btn-info btn-block" variant="primary">Save</b-button>
    </b-form>
    </div>
    </div>
</div>
</template>


<script>
import VueBase64FileUpload from 'vue-base64-file-upload';
import APIService from "../services/APIService";

export default {
    data(){
        return{
          options: 
          [
            { value: 'Faculty', text: 'Choose Faculty' },
            { value: 'Business', text: 'Business' },
            { value: 'Electronics', text: 'Electronics' },
            { value: 'Mass Communication', text: 'Mass Communication'},
            { value: 'Pharmacy', text: 'Pharmacy' },
            { value: 'Medical', text: 'Medical' },
            { value: 'Pharmacy', text: 'Pharmacy' },       
          ],
            gpa:"",
            certificateId:"",
            name:"",
            grade:"",
            screenshot:"",
            faculty :"",
            university : "Public University",
            customImageMaxSize: 3

        }
    },
    methods:{
    async addCertificate(){
      console.log(this.faculty);
      console.log(this.screenshot);
      console.log(this.university);
      const response =  await APIService.addCertificate
       (
       this.certificateId,
       this.name,
       this.gpa,
       this.grade,
       this.screenshot,
       this.faculty,
       this.university
       )
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

.login-container{
height: auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #343A40;
    border-radius: 5%;
}
.parent-container{
    margin-top: 50px;
    width: 100vw;
    height: auto;
     display: flex;
    justify-content: center;
    align-items: center;
}
.login-content{
    text-align: center;
    color:white;
}
</style>

<template>
<div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <b-form class="text-center border border-light p-5">
        <h2 class="h4 mb-4">Please fill the certificate information</h2>
    <label><h4> Name</h4></label>
    <b-input class="form-control mb-4" v-model="name" id="inline-form-input-nid" placeholder="Enter The Student's Name" required></b-input>
    <label><h4> National ID</h4></label>
    <b-input class="form-control mb-4" v-model="certificateId" id="inline-form-input-nid" placeholder="Enter the Student's National ID" required></b-input>
    <label><h4> GPA</h4></label>
    <b-input class="form-control mb-4" v-model="gpa" id="inline-form-input-username" placeholder="Enter the Student's Cumaltive GPA" required></b-input>
    <label><h4> Grade </h4></label>
    <b-form-select v-model="selected" class="form-control mb-4"  id="inline-form-input-nid"  :options="grades" required></b-form-select>
    <label><h4> Faculty </h4></label>
    <b-form-select v-model="selected" class="form-control mb-4"  id="inline-form-input-nid" :options="options" required></b-form-select>
    <label><h4> Please upload a snapshot of the certificate </h4></label>
    <vue-base64-file-upload    
         accept="image/png,image/jpeg"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
        <br>
    <b-button type="submit" @click="addCertificate()" id="submitbtn" class="btn btn-info btn-block" variant="primary">Save</b-button>
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
        selected : null,
         grades: 
          [
            { value: null , text: 'Enter the Final Grade'},
            { value: 'F', text: 'F' },
            { value: 'D-', text: 'D-' },
            { value: 'D', text: 'D'},
            { value: 'C-', text: 'C-' },
            { value: 'C', text: 'C' },
            { value: 'C+', text: 'C+' },
            { value: 'B-', text: 'B-' },
            { value: 'B', text: 'B' },
            { value: 'B+', text: 'B+' },
            { value: 'A-', text: 'A-' },
            { value: 'A', text: 'A' },
            { value: 'A+', text: 'A+' },
            
          ],
          faculty: null,
          options: 
          [
            { value: null, text: 'Choose Faculty' },
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
<style scoped>
.btn-info{
  background-color:#343A40;
}
.login-container{
    height: auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #343A40; */
    border-radius: 5%;
}
.parent-container{
  height: 230px;
    margin-top: 50px;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.login-content{
  background-color: rbga(215, 35, 24, 0.9);
    text-align: center;
    color:white;
}
</style>

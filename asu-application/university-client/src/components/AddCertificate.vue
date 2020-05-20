<template>
<div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <b-form class="text-center border border-light p-5">
        <h2 class="h4 mb-4">Please fill the certificate information</h2>
    <label><h4>Full Name</h4></label>
    <span class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <b-input class="form-control mb-4" v-model="name" id="inline-form-input-nid" placeholder="Enter The Student's Name" ></b-input>
    </span>
    <span class="error" v-if="!$v.name.required">Full Name field is required</span>
    <span class="error" v-if="!$v.name.minLength">You only typed {{$v.name.$params.minLength.min}} letters, please enter the full name.</span>
    <br>

   
    <span class="form-group" :class="{ 'form-group--error': $v.certificateId.$error }">
    <label><h4> National ID</h4></label>
      

        <b-input class="form-control mb-4" v-model="certificateId" id="inline-form-input-nid" placeholder="Enter the Student's National ID" ></b-input>
    </span>
    <span class="error" v-if="!$v.certificateId.required">National ID is required</span>
    <span class="error" v-if="!$v.certificateId.maxLength">National ID must have {{$v.certificateId.$params.maxLength.max}} numbers only </span>
    <span class="error" v-if="!$v.certificateId.minLength">National ID must have {{$v.certificateId.$params.minLength.min}} numbers only</span>
    <br>    
    
    <span class="form-group" :class="{ 'form-group--error': $v.gpa.$error }">
    <label><h4> GPA</h4></label>
    <b-input class="form-control mb-4" v-model="gpa" id="inline-form-input-username" placeholder="Enter the Student's Cumaltive GPA" ></b-input>
    </span>
    <span class="error" v-if="!$v.gpa.decimal">Field must be a decimal</span>
    <span class="error" v-if="!$v.gpa.required">GPA is required</span>
    <span class="error" v-if="!$v.gpa.maxValue">GPA can't exceed 4.00</span>
    <span class="error" v-if="!$v.gpa.minValue">GPA can't be below 0.00</span>
    <br>
    <span class="form-group" :class="{ 'form-group--error': $v.grade.$error }">
    <label><h4> Grade </h4></label>
        <b-form-select placeholder="Enter the Final Grade" v-model="grade" class="form-control mb-4"  id="inline-form-input-nid"  :options="grades" ></b-form-select>
      </span>
      <span class="error" v-if="!$v.grade.required">Grade is required</span>
      <br>
      <label><h4> Faculty </h4></label>
    <span class="form-group" :class="{ 'form-group--error': $v.faculty.$error }">
    <b-form-select v-model="faculty" class="form-control mb-4"  id="inline-form-input-nid" :options="options" ></b-form-select>
    </span>
    <span class="error" v-if="!$v.faculty.required">Faculty is required</span>
    <br>
    <label><h4> Please upload a snapshot of the certificate </h4></label>
    <vue-base64-file-upload    
         accept="image/png,image/jpeg"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
        <br>
    <b-button v-if="
     $v.name.required &&
     $v.grade.required &&
     $v.gpa.required &&
     $v.grade.required && 
     $v.certificateId.required &&
     $v.faculty.required  
     "
      @click="addCertificate()" id="submitbtn" class="btn btn-info btn-block" variant="primary">Save</b-button>    </b-form>
    </div>
    </div>
</div>
</template>


<script>
import VueBase64FileUpload from 'vue-base64-file-upload';
import APIService from "../services/APIService";
import {minValue, maxValue, alpha, decimal,required , minLength , maxLength , between} from 'vuelidate/lib/validators'

export default {
    data(){
        return{
          grades: 
          [
            { value: null , text: 'Enter the Final Grade'},
            { value: 'راسب', text: 'راسب' },
            { value: 'مقبول', text: 'مقبول' },
            { value: 'مقبول مرتفع', text: 'مقبول مرتفع'},
            { value: 'جيد', text: 'جيد' },
            { value: 'جيد مرتفع', text: 'جيد مرتفع' },
            { value: 'جيد جداً', text: 'جيد جداً' },
            { value: 'جيد جداً مرتفع', text: 'جيد جداً مرتفع' },
            { value: 'ممتاز', text: 'ممتاز' },
            { value: 'ممتاز مرتفع', text: 'ممتاز مرتفع' },
            
          ],
         options: 
          [
            { value: 'Faculty', text: 'Choose Faculty' },
            { value: 'Business', text: 'Business' },
            { value: 'Electronics', text: 'Electronics' },
            { value: 'Mass Communication', text: 'Mass Communication'},
            { value: 'Pharmacy', text: 'Pharmacy' },
            { value: 'Medical', text: 'Medical' },
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
      validations: {
    certificateId:{
      required,
      maxLength: maxLength(14),
      minLength: minLength(14)

    },
    gpa: {
      maxValue : maxValue(4.00),
      minValue: minValue(0.00),
      decimal,
      required,
      minLength: minLength(3)
    },
    name: {
      required,
      minLength: minLength(3)
    },
    grade : {
      required,
      maxLength: maxLength(2)

    },
    faculty: {
      required
    }
   },
    methods:{
    async addCertificate(){
      console.log(this.faculty);
      console.log(this.screenshot);
      console.log(this.university);
      const response =  await APIService.addCertificate
       (
       this.id,
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
  computed: {
        id(){
       return this.$store.state.identity;
    },
  }

}
</script>
<style scoped>
.error
{
  font-weight: bold;
  color:rgb(187, 21, 21);
  outline-color: black;
}
.btn-info
{
  background-color:#343A40;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
}
.btn-info:hover
{
  padding: 5px 5px;
  background-color: white;
  color:black;
  text-decoration: none;
  font-weight: bold;
}
.login-container
{
  height: auto;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #343A40; */
  border-radius: 5%;
  margin-top: 1%;
}
.parent-container
{
  height: 230px;
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

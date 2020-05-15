<template>
<div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <b-form class="text-center border border-light p-5">
        <h2 class="h4 mb-4">برجاء ملء معلومات الشهادة</h2>
    <label><h4> الأسم</h4></label>
    <b-input class="form-control mb-4" v-model="name" id="inline-form-input-nid" placeholder="أدخل اسم الطالب"></b-input>
    <label><h4> الرقم القومي</h4></label>
    <b-input class="form-control mb-4" v-model="certificateId" id="inline-form-input-nid" placeholder="أدخل الرقم القومي للطالب"></b-input>
    <label><h4> المعدل التراكمي</h4></label>
    <b-input class="form-control mb-4" v-model="gpa" id="inline-form-input-username" placeholder="أدخل المعدل التراكمي للطالب"></b-input>
    <label><h4> التقدير النهائي </h4></label>
    <b-input class="form-control mb-4" v-model="grade" id="inline-form-input-username" placeholder="أدخل تقدير الطالب"></b-input>
    <label><h4> الكلية </h4></label>
    <b-form-select v-model="faculty" class="form-control mb-4"  id="inline-form-input-nid" :options="options"></b-form-select>
    <label><h4> برجاء رفع صورة للشهادة </h4></label>
    <vue-base64-file-upload    
         accept="image/png,image/jpeg"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
        <br>
    <b-button @click="addCertificate()" id="submitbtn" class="btn btn-info btn-block" variant="primary">حفظ</b-button>
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
<style scoped>
.btn-info
{
  background-color:rgb(0, 0, 0);
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  border-color: white;
}
.btn-info:hover
{
  padding: 5px 5px;
  background-color: rgb(255, 255, 255);
  color:black;
  text-decoration: none;
  font-weight: bold;
}
.login-container{
    height: auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #343A40; */
      border-radius: 2%;

    margin-right: 15%;
}
.parent-container{
    height: 230px;
    margin-top: 50px;

    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.login-content{
  
  background-color: rgba(1,3,5,0.9);
    text-align: center;
    color:white;
}
</style>

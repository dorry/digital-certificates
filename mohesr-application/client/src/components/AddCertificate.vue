<template>
<div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <b-form class="text-center border border-light p-5">
        <h2 class="h4 mb-4">برجاء ملء معلومات الشهادة</h2>
    <label><h4> {{id}} الأسم</h4></label>
    <span class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <b-input class="form-control mb-4" v-model="name" id="inline-form-input-nid" placeholder="أدخل اسم الطالب"></b-input>
    </span>
    <span class="error" v-if="!$v.name.required">الاسم الكامل مطلوب</span>
    <span class="error" v-if="!$v.name.minLength">لقد قمت بكتابة {{$v.name.$params.minLength.min}} أحرف فقط, يرجى إدخال الاسم الكامل</span>
    <br>
    <span class="form-group" :class="{ 'form-group--error': $v.certificateId.$error }">
    <label><h4> الرقم القومي</h4></label>
    <b-input class="form-control mb-4" v-model="certificateId" id="inline-form-input-nid" placeholder="أدخل الرقم القومي للطالب"></b-input>
    </span>
    <span class="error" v-if="!$v.certificateId.required">الرقم القومي مطلوب</span>
    <span class="error" v-if="!$v.certificateId.maxLength">يجب أن يحتوي الرقم القومي على {{$v.certificateId.$params.maxLength.max}}  رقم فقط</span>
    <span class="error" v-if="!$v.certificateId.minLength">يجب أن يحتوي الرقم القومي على {{$v.certificateId.$params.minLength.min}}  رقم فقط</span>
    <br>
    <span class="form-group" :class="{ 'form-group--error': $v.gpa.$error }">
    <label><h4> المعدل التراكمي</h4></label>
    <b-input class="form-control mb-4" v-model="gpa" id="inline-form-input-username" placeholder="أدخل المعدل التراكمي للطالب"></b-input>
    </span>
    <span class="error" v-if="!$v.gpa.decimal">يجب أن يكون عشريًا</span>
    <span class="error" v-if="!$v.gpa.required">المعدل التراكمي مطلوب</span>
    <span class="error" v-if="!$v.gpa.maxValue">المعدل التراكمي لا يمكن أن يتجاوز 4.00</span>
    <span class="error" v-if="!$v.gpa.minValue">لا يمكن أن يكون المعدل التراكمي أقل من 0.00</span>
    <br>
    <span class="form-group" :class="{ 'form-group--error': $v.grade.$error }">
    <label><h4> التقدير النهائي </h4></label>
    <b-form-select class="form-control mb-4" v-model="grade" id="inline-form-input-username" :options="grades" placeholder="أدخل تقدير الطالب"></b-form-select>
    </span>
    <span class="error" v-if="!$v.grade.required"> الدرجة النهائية مطلوبة</span>
    <br>
    <label><h4> الكلية </h4></label>
    <span class="form-group" :class="{ 'form-group--error': $v.faculty.$error }">
    <b-form-select v-model="faculty" class="form-control mb-4"  id="inline-form-input-nid" :options="options"></b-form-select>
    </span>
    <span class="error" v-if="!$v.faculty.required">الكلية مطلوبة</span>
    <br>
    <label><h4> الجامعة </h4></label>
    <b-form-select v-model="faculty" class="form-control mb-4"  id="inline-form-input-nid" :options="unis"></b-form-select>
    <label><h4> برجاء رفع صورة للشهادة </h4></label>
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
     " @click="addCertificate()" id="submitbtn" class="btn btn-info btn-block" variant="primary">حفظ</b-button>
    </b-form>
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
            { value: null , text: 'أدخل تقدير الطالب'},
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
          unis:[
            "MIU",
          ],
          options: 
          [
            { value: 'الكلية', text: 'اختر الكلية' },
            { value: 'تجارة', text: 'تجارة' },
            { value: 'إلكترونيات', text: 'إلكترونيات' },
            { value: 'أعلام', text: 'أعلام'},
            { value: 'صيدلة', text: 'صيدلة' },
            { value: 'طب', text: 'طب' },     
          ],
            gpa:"",
            certificateId:"",
            name:"",
            grade:"",
            screenshot:"",
            faculty :"",
            university : "Private University",
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
      // console.log(this.screenshot);
      console.log(this.university);
      console.log(this.faculty);
      console.log(this.id);
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
  computed:
  {   
    id(){
       return this.$store.state.identity;
    },
    fn(){
      return this.$store.state.firstName;
    },
    rows() 
    {
    return this.items.length
    },
  },
     components: {
    VueBase64FileUpload,
  },

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

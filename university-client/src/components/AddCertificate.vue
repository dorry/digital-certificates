
<template>
  <div id="container">
<ul>
  <li><a href="#1">استراتيجية الوزارة</a></li>
  <li><a href="#2" >المركز الاعلامي</a></li>
  <li><a href="#3">مركز المعلومات</a></li>
  <li><a href="#4">الخدمات</a></li>
  <li><a href="#5">البحث العلمي</a></li>
  <li><a href="#6">مؤسسات التعليم العالي</a></li>
  <li><a href="#7"> التعليم العالي</a></li>
  <li><a href="#8">الوزارة</a></li>
  <li><a href="HomePage.html">الرئيسية</a></li>


  <li style="float:right"><img src="../assets/flagg.png" alt="Egypt" style="width:200px;height:200px;border:0;margin-left:-36px;"></li>
</ul>
<img src="../assets/grad.png" alt="grad" id="img1">
<div id="ContainerCheckCertificate">
<!-- <h1 style="text-align: right;">ادخال البيانات</h1> -->
</div>
    <div id="form-container">
    <h2>ادخل البيانات</h2>
  <input type="number" v-model="certificateId" id="fname"  placeholder="الرقم القومي" style="border-radius: 10px; width: 300px; text-align:center; "><br>
  <br>
  <input type="text" v-model="name" id="fname"  placeholder="الاسم" style="border-radius: 10px; width: 300px; text-align:center; "><br>
  <br>
  <input type="number" v-model="gpa" id="GPA"  placeholder="معدل التراكمي" style="border-radius: 10px; width: 300px; text-align:center;"><br>
  <br>
  <input type="text" v-model="grade" id="Grade"  placeholder="التقدير"  style="border-radius: 10px; width: 300px;text-align:center; "><br>
  <br>
  <!-- <input type="file"  name="fileToUpload" id="fileToUpload" value="ارفع الشهادة"> -->
        <vue-base64-file-upload    
         accept="image/png,image/jpeg"
        style="border-radius: 10px; width: 300px; text-align: center;"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
  <br>
  <br>

  <!-- <input type="number" id="DOB" name="DOB" placeholder="تاريخ الميلاد" id="textbox1" style="border-radius: 10px; width: 300px; text-align: center;"><br>
  <br>
  <input type="text" id="Specialize" name="Specialize" placeholder="تخصص البكالوريوس" id="textbox1" style="border-radius: 10px; width: 300px; text-align: center;"><br>
  <br>
  <input type="number" id="CertificateDate" name="CertificateDate" placeholder="اعتماد النتيجة" id="textbox1" style="border-radius: 10px; width: 300px; text-align: center;"><br> -->
  <br>
  <br>
  <input @click="addCertificate()" type="submit" value="ادخل" id="btn1" style="border-radius: 20px;">
    
    </div>
</div>
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
    VueBase64FileUpload
  },

}
</script>

<style>

    
ul {
list-style-type: none;
vertical-align: bottom;
margin: -8px;
margin-top: -8px;
padding: 0px;
width: 101%;
height: auto;
position: absolute;
overflow: hidden;
border: 1px solid #e7e7e7;
background-color: #ffffff;
border-bottom: 2px solid gold;
opacity: 0.5;
display: flex;
align-items: flex-end;
}

li {
float: left;

}

li a {
display: inline-block;
text-align: center;
color: rgb(0, 0, 0);
padding: 14px 16px;
text-decoration: none;
background-color: rgb(255, 255, 255);
bottom: 0px;
width: 115px;

}
a
{
border: 10px;
}

li a:hover:not(.active) {
background-color: rgb(255, 255, 255);
}
#container {
position: relative;

}
#img1
{
margin-left: -1%;
min-width: 100%;
height: 400px;
border: 0;
margin-top: -8px;
}
#btn1
{
color: white;
background-color: rgb(67, 6, 117);
border: none;
width: 100px;
}
#ContainerCheckCertificate
{
    
text-align: right;
margin-top: -215px;
margin-left: 1220px;
position: fixed;

}
#form-container{
display: flex;
flex-direction: column;
align-items: center;
    
}
form
{
text-align: center;
}
        </style>

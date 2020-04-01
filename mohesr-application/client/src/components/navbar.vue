<template>
<div>
<ul>
  <li><router-link to="/publicunis"> الجامعات </router-link></li>
  <li><a href="#2" >المركز الاعلامي</a></li>
  <li><a href="#3">مركز المعلومات</a></li>
  <li><a href="#4">الخدمات</a></li>
  <li><a href="#5">البحث العلمي</a></li>
  <li><a href="#6">مؤسسات التعليم العالي</a></li>
  <li><a href="#7"> التعليم العالي</a></li>
  <li><a href="#8">الوزارة</a></li>
  <li><a href="HomePage.html">الرئيسية</a></li>
  <li style="float:right"><img src="../assets/flagg.png" alt="Egypt" style="width:200px;height:200px;border:0;margin-left:250px;"></li>
</ul>
<img src="../assets/grad.png" alt="grad" id="img1">
</div>
</template>

<style scoped>
#img1
{
  min-width: 100%;
  height: 400px;
  border: 0;
  margin-top: -8px;
}
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
</style>
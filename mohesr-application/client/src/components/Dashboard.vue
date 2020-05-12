<template>
    <div>
  <div class=" vertical-nav" >
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <b-nav-item>تسجيل مشرف جديد</b-nav-item>
        <b-nav-item router-link to="/Statistics" >احصائيات</b-nav-item>
        <b-nav-item router-link to="/validation" >التحقق من شهادة</b-nav-item>
        <b-nav-item router-link to="/Request" ></b-nav-item>        
        <b-nav-item  v-if="identity !=''"><router-link to="/university">  قائمة الطلاب </router-link></b-nav-item>
        
    </b-nav>
    <add-cert style=" margin-top:-150px"> </add-cert>

</div>

</div>

</template>
<script>

export default {
    data(){
        return {
            labels:["Apples", "Bananas", "Grapes"],
            datasets:[
            {       
             data: [20,30,50],
             backgroundColor: ["Red","Yellow","Purple"]
            }
        ],
        option : {
            title:{
            display:true,
                position:"Bottom",
                text: "Fruits"
            }
        }
      };
    }
};
</script>
<style scoped>
.vertical-nav{
    top: 10%;
    position: absolute;
    background-color:rgba(1,3,5,0.9)!important;
    width: 15%;
    height: 119vh;
}
.horizontol-line{
    height: .1em; 
}

a{
  color:#919497;
}

</style>

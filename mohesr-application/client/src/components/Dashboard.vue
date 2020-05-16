<template>
    <div>
  <div class=" vertical-nav" v-if="identity !=''">
    <div class="horizontal-line">
         </div>
    <b-nav vertical >
        <!-- <b-nav-item>تسجيل مشرف جديد</b-nav-item> -->
        <!-- <b-nav-item router-link to="/Statistics" >احصائيات</b-nav-item> -->
        <b-nav-item router-link to="/validation" >التحقق من شهادة</b-nav-item>       
        <b-nav-item ><router-link to="/certlist">  قائمة الطلاب </router-link></b-nav-item>
        <b-nav-item ><router-link to="/addcert"> اضافة شهادة </router-link></b-nav-item>
        <b-nav-item v-on:click="notification"><router-link to="/requestlist"><span v-if="count>0">{{count}}</span> الرد علي الطلبات </router-link></b-nav-item>
        
        
    </b-nav>
    <add-cert style=" margin-top:-150px"> </add-cert>

</div>

</div>

</template>
<script>
import {namesRef} from './firebase'
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
            count:0,
        option : {
            title:
            {
            display:true,
            position:"Bottom",
            text: "Fruits"
            }
        },
        };} ,
         firebase: {
    names: namesRef
  },
  methods:{
      notification: function(){
      this.count=0;
      var counter=0;
    namesRef.on('value',gotData,errData);
    
     function gotData(data) {
    var info=data.val();
    var keys=Object.keys(info);
    counter=keys.length;
    return keys.length;
    }
    function errData()
    {
      return "error";
    }
return this.count=counter;
  },
  },
    computed:
    {
        identity()
        {
            return this.$store.state.identity;
        }
    }
};
</script>
<style scoped>
.vertical-nav
{
    position: absolute;
    background-color:rgba(1,3,5,0.9);
    width: 16%;
    height: 140vh;
    margin-left: 84%;
}
.horizontol-line
{
    height: .1em;
       position: absolute;

    background-color: #000000;
}
a
{
    margin-top: 5%;
    color: #ffffff;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
}
a:hover
{
  padding: 5px 5px;
  background-color: rgb(255, 255, 255);
  color:rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
}

</style>

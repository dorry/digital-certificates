<template>  
<div>
    <div id = "parent-container1"> 
    <div class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
      <div v-if="!paidFor">
    <span class="form-group" :class="{ 'form-group--error': $v.companyname.$error }">
    <label><h4> اسم الشركة</h4></label>
    <b-input class="form-control mb-4" v-model="companyname" id="inline-form-input-nid" placeholder="أدخل اسم الشركة"></b-input>
    <span class="error" v-if="!$v.companyname.required">اسم الشركة مطلوب</span>
    </span>
    <span class="form-group" :class="{ 'form-group--error': $v.price.$error }">
      <br>
    <label for=""><h4>اختار العروض المتاحة</h4></label>
    <b-form-select v-model="price" class="form-control mb-4"  id="inline-form-input-nid" :options="options" ></b-form-select>
    </span>
    <span class="error" v-if="!$v.price.required">الاختيار مطلوب</span>
    <br>
      <h2> اختار طريقة الدفع للاشتراك</h2>
    </div>
    <div v-else>  
     <h2>شكرا </h2>
    </div>
    <div id="form" ref="paypal"></div>
    
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import {companiesRef} from './firebase'
import {minValue, maxValue, alpha, decimal,required , minLength , maxLength , between} from 'vuelidate/lib/validators'

// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
  data: function() {
    return {
      options: 
      [
        { value: 350, text: '1 Year for 350 EGP' },
        { value: 175, text: '6 Months for 175 EGP' },
        { value: 50, text: '1 Month for 50 EGP' },

      ], 
      names: [],
      loaded: false,
      paidFor: false,
      companyname:'',
      price:'',
      product: {
        description: "الاشتراك في خدمة التحقق من الشهادات",
      }
    };
  },
  computed: {
        identity()
        {
            return this.$store.state.identity;
        },
        firstName()
        {
            return this.$store.state.firstName;
        },
    },
   firebase: 
   {
    names: companiesRef
   },
   
  mounted: function() {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AZMCUqOmyxPdzSX9Z76we2OLLlz3aLB1Sf7n9NhJPGS1HkL9X0G-GtsZNNPtPQ0KnYPqne1_rAiLftJr";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  validations: {
    price:{
      required
    },
    companyname:{
      required
    }, 
  }, 
  methods: 
  {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
           return actions.order.create({
            purchase_units: 
            [
                {
                  description: this.product.description,
                  amount: {
                  currency_code: "USD",
                  value: this.price,
                }
              }
             ]
          });
        },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            var d = new Date()
            if(this.price == 350){
            companiesRef.push(
                {
                 company:this.companyname,
                 paid :1,
                 mail: this.identity ,
                 payday: d.getDate(), 
                 paymonth: d.getMonth()+1,
                 payyear: d.getFullYear(),
                 expirationmonth : d.getMonth()+1,
                 expirationday : d.getDate(),
                 expirationdate:d.getFullYear()+1}
                 );     

            console.log("PAID");
          }
             else if(this.price == 175){
               companiesRef.push(
                {
                 company:this.companyname,
                 paid :1,
                 mail: this.identity ,
                 payday: d.getDate(), 
                 paymonth: d.getMonth()+1,
                 payyear: d.getFullYear(),
                 expirationmonth : d.getMonth()+7,
                 expirationday : d.getDate(),
                 expirationdate:d.getFullYear()}
                 );     

            console.log("PAID"); 

          }
          else if(this.price == 50){
               companiesRef.push(
                {
                 company:this.companyname,
                 paid :1,
                 mail: this.identity ,
                 payday: d.getDate(), 
                 paymonth: d.getMonth()+1,
                 payyear: d.getFullYear(),
                 expirationmonth : d.getMonth()+2,
                 expirationday : d.getDate(),
                 expirationdate:d.getFullYear()
                 }
                 );     

            console.log("PAID"); 

          }
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<style scoped>
.error
{
  font-weight: bold;
  color:rgb(187, 21, 21);
  outline-color: black;
}
#form
{

  justify-content: center;
  align-items: center;
}
.login-container
{
  height: 45%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color:rgba(1,3,5,0.9);
  border-radius: 5%;
  padding-top: 8%;
}
.parent-container
{
  margin-top: 4%;
  margin-left: 4%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content
{
  text-align: center;
  color:white;
  margin-bottom: 11%;
}

</style>
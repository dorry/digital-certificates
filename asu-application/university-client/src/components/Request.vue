<template>  
<div>
    <div id = "parent-container1"> 
    <div class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <div>
  <input type="text" v-model="name">
  <button @click="submitName()">add</button>
</div>
<ul>
  <li v-for="personName of names" 
  v-bind:key="personName['.key']">{{personName.mail}} {{personName.name}}  
  </li>
</ul>
      <div v-if="!paidFor">
      <h2> A fee is needed to do a request </h2>
    </div>
    <div v-else>
      <h4>Thanks! Your Request Has been made. </h4>
    </div>
        <div  id="form" ref="paypal"></div>
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import {namesRef} from './firebase'
// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
  data: function() {
    return {
      names: [],
      name: 'Paul',
      loaded: false,
      paidFor: false,
      product: {
        price: 30.0,
        description: "Request for a graduation certficicate",
      }
    };
  },
  computed: {
        identity(){
            return this.$store.state.identity;
        },
        firstName(){
            return this.$store.state.firstName;
        }
    },
        firebase: {
    names: namesRef
  },
  mounted: function() {
    const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AZMCUqOmyxPdzSX9Z76we2OLLlz3aLB1Sf7n9NhJPGS1HkL9X0G-GtsZNNPtPQ0KnYPqne1_rAiLftJr";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    submitName(){
      namesRef.push({name: this.name, edit : false})
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            namesRef.push({mail: this.identity + "@miuegypt.edu.eg", Request : 0 , name: this.firstName})      
            console.log("PAID");
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
  background-color: #343A40;
  border-radius: 5%;
  padding-top: 8%;
}
.parent-container
{
  margin-top: 4%;
  margin-left: 4%;
  width: 100vw;
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
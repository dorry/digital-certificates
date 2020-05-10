<template>  
<div>
    <div v-if="!paidFor">
      <h2 style="margin-left:35%;"> A fee is needed to do a request </h2>
    </div>
    <div v-else>
      Thanks!
    </div>
    <div  id="form" ref="paypal"></div>
  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 30.0,
        description: "Request for a graduation certficicate",
      }
    };
  },
  mounted: function() {
    const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AZMCUqOmyxPdzSX9Z76we2OLLlz3aLB1Sf7n9NhJPGS1HkL9X0G-GtsZNNPtPQ0KnYPqne1_rAiLftJr";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
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
            console.log(order);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form{
    
    margin-left: 30%;
    justify-content: center;
    align-items: center;
}

</style>
<template>
<div>
    
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h4 >Welcome!</h4>
    <p>Please Use the University's email to login.</p>
    </div>
    <GoogleLogin v-if="id==''"  class="google-login" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    <GoogleLogin v-if="id!=''" :params="params" :logoutButton=true :onSuccess="logout" :onFailure="faillogout" id="signout">Logout </GoogleLogin>
    
    </div>
    </div>

</div>
</template>

<script>
 import GoogleLogin from 'vue-google-login';
 import APIService from "../services/APIService";
export default {
   data() {
            return {
                islogged: true,
                identity: '',
                firstName: '',
                fullname: '',
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "719716676155-faqenfgvlhduu9e0ktuov5c3f2q9cqll.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
            }
        },
 computed: {
        id(){
            return this.$store.state.identity;
        },
        fn(){
            return this.$store.state.firstName;
        }
    },

    components: {
        GoogleLogin
        },

    methods: {
        logout(){
            console.log("Signed Out");
            this.$store.dispatch('saveUserLogged', "");
            this.$store.commit("setislogged", false);
            this.$store.dispatch('saveUsername', "");
            this.$router.push("/home");
        },
          async onSuccess(googleUser) {
            this.identity = googleUser.getBasicProfile().getEmail();
            this.firstName = googleUser.getBasicProfile().getName();
            console.log(this.identity);
            const response =  await APIService.validateWallet(this.identity)    
            if(response.data == 'wallet exist'){
                this.$store.commit("setadmin",true);
                
            }
            else   { this.$store.commit("setadmin",false);}            
            this.$store.dispatch('saveUserLogged', this.identity);
            this.$store.commit("setislogged", true);
            this.$store.dispatch('saveUsername', this.firstName);
            this.$router.push("/dashboard");
        },
        onFailure(error){
            console.log(error);
        },
        
        getUsername(email){
            var username=email.split("@");
            return username[0];
        }
    }

}
</script>

<style scoped>
.login-container{
height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* align-content: center; */
    background-color: #343A40;
    border-radius: 5%;
    margin-bottom: 15%;
}
.parent-container
{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-content{
    text-align: center;
    color:white;
}
#signout
{
    color: white;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background: none;
    font-size: 135%;
    font-weight: bold;
    border-color:white;
    border-width: 1px;

}
#signout:hover
{
    padding: 5px 5px;
    background-color: white;
    color:black;
    text-decoration: none;
    font-weight: bold;
}

</style>
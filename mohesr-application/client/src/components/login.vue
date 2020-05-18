<template>
<div>
    <div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <h1> !مرحبا</h1>
    <p>من فضلك استخدام بريدك الالكتروني لستجيل الدخول</p>
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
                    client_id: "719716676155-s5a2f1m0eu1c2k4bca2bc7h7qci4d2s5.apps.googleusercontent.com"
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
        logout()
        {
            console.log("Signed Out");
            this.$store.dispatch('saveUserLogged', "");
            this.$store.commit("setislogged", false);
            this.$store.dispatch('saveUsername', "");
            this.$router.push("/home");
        },
        async onSuccess(googleUser)
        {
            console.log(googleUser.getBasicProfile().yu)
            const response =  await APIService.validateWallet
            (
             googleUser.getBasicProfile().yu,
            )
            alert(response);
            this.$store.commit('setadmin',true);
            //console.log(googleUser);
            // This only gets the user information: id, name, imageUrl and email
            //console.log(googleUser.getBasicProfile());
            this.identity = googleUser.getBasicProfile().yu;
            this.firstName = googleUser.getBasicProfile().pW;
           //sconsole.log(this.firstName);
           //console.log(this.$store.state.islogged);
           //this.$store.state.identity = this.identity;
            this.$store.dispatch('saveUserLogged', this.identity);
            this.$store.commit("setislogged", true);
            this.$store.dispatch('saveUsername', googleUser.getBasicProfile().pW);
            this.$router.push("/dashboard");

        },
        onFailure(error)
        {
            console.log(error);
        },
        
        getUsername(email)
        {
            console.log(email);
            var username=email.split("@");
            return username[0];
        }
    }
}
</script>

<style scoped>
.login-container
{
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* align-content: center; */
    background-color: rgba(1,3,5,0.9);
    border-radius: 5%;
    margin-bottom: 15%;
    margin-right: 5%;
}
.parent-container
{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-content
{
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
    border-color:#ffffff;
    border-width: 2px 2px 2px 2px;

}
#signout:hover
{
    padding: 5px 5px;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    text-decoration: none;
    font-weight: bold;
}
</style>
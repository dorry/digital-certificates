<template>
    <div  class = "parent-container">
    <div class = "login-container">
    <div class="login-content">
    <p>من فضلك استخدام بريدك الالكتروني لستجيل الدخول</p>
    </div>
    <GoogleLogin class="google-login" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
        <GoogleLogin v-if="id!=''" :params="params" :logoutButton=true :onSuccess="logout" :onFailure="faillogout">Sign Out </GoogleLogin>

    </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
   data() {
            return {
                islogged: true,
                identity: '',
                firstName: '',
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


    components: {
        GoogleLogin
        },

    methods: {
        logout(){
            console.log("Signed Out");

            this.$store.dispatch('saveUserLogged', "");
            this.$store.commit("setislogged", false);
//  this.$store.state.firstName =  googleUser.getBasicProfile().vW;
            this.$store.dispatch('saveUsername', "");
            this.$router.push("/home");
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
            this.identity = this.getUsername(googleUser.getBasicProfile().yu);
            this.firstName = googleUser.getBasicProfile().pW;
            console.log(this.firstName);
            console.log(this.$store.state.islogged);
//            this.$store.state.identity = this.identity;
            this.$store.dispatch('saveUserLogged', this.identity);
            this.$store.commit("setislogged", true);
//  this.$store.state.firstName =  googleUser.getBasicProfile().vW;
            this.$store.dispatch('saveUsername', googleUser.getBasicProfile().pW);
            this.$router.push("/home");
        },
        onFailure(error){
            console.log(error);
        },
        
        getUsername(email){
            console.log(email);
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
    background-color: #4c5664;
    border-radius: 5%;
}
.parent-container{
    width: 100vw;
    height: 50vh;
     display: flex;
    justify-content: center;
    align-items: center;
}
.login-content{
    text-align: center;
    color:white;
}
</style>
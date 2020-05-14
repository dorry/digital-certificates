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
        onSuccess(googleUser) {
            console.log(googleUser);
            console.log(googleUser.getBasicProfile());
            this.identity = this.getUsername(googleUser.getBasicProfile().yu);
            this.firstName = googleUser.getBasicProfile().pW;
            console.log(this.firstName);
            console.log(this.$store.state.islogged);
            this.$store.dispatch('saveUserLogged', this.identity);
            this.$store.commit("setislogged", true);
            this.$store.dispatch('saveUsername', googleUser.getBasicProfile().pW);
            this.$router.push("/dashboard");
            console.log("USERRR: ")
                        console.log(googleUser.getBasicProfile.pw);

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
.login-container
{
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* align-content: center; */
    background-color: #a11f1f;
    border-radius: 5%;
    margin-bottom: 15%;
    margin-right: 5%;
}
.parent-container
{
    width: 100vw;
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
    background-color: rgb(0, 0, 0);
    color:rgb(255, 255, 255);
    text-decoration: none;
    font-weight: bold;
}

</style>
<template>
<div>
    <div  class = "parent-container">     
    <div class = "login-container">
    <div class="login-content">
    <h4 >Welcome!</h4>
    <p>Please Use the University's email to login.</p>
    </div>
    <GoogleLogin  class="google-login" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    <GoogleLogin v-if="id!=''" :params="params" :logoutButton=true :onSuccess="logout" :onFailure="faillogout">Sign Out </GoogleLogin>
    
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
//  this.$store.state.firstName =  googleUser.getBasicProfile().vW;
            this.$store.dispatch('saveUsername', "");
            this.$router.push("/home");
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
            this.identity = this.getUsername(googleUser.getBasicProfile().zu);
            this.firstName = googleUser.getBasicProfile().vW;
            console.log(this.firstName);
            console.log(this.$store.state.islogged);
//            this.$store.state.identity = this.identity;
            this.$store.dispatch('saveUserLogged', this.identity);
            this.$store.commit("setislogged", true);
//  this.$store.state.firstName =  googleUser.getBasicProfile().vW;
            this.$store.dispatch('saveUsername', googleUser.getBasicProfile().vW);
            this.$router.push("/home");
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
}
.parent-container{
    width: 100vw;
    height: 100vh;
     display: flex;
    justify-content: center;
    align-items: center;
}
.login-content{
    text-align: center;
    color:white;
}

</style>
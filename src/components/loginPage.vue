<template>
    <div class="container mt-5">
        <div class="login">
            <h4>SIGN IN</h4>
            <input type="email" placeholder="Enter an email" v-model="email">
            <input type="password" placeholder="Enter your password" v-model="password">
            <button>Connection</button>
            <p>Your don't have an account ? You can 
                <router-link 
                    to="/register"
                    tag = "a"
                    class="">
                    create
                </router-link> one.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name : "loginPage",
    data(){
        return {
            email : "",
            password : ""
        }
    },
    methods : {
    }
}
</script>

<style scoped>
    .login{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        margin: 10px 0;
        width: 25%;
        padding: 10px;
    }
    button{
        margin-top: 20px;
        width: 15%;
        cursor: pointer;
        padding: 10px;
    }
    p{
        margin-top: 40px;
        font-size: 14px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
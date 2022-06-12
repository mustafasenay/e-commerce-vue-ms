<template>
    <div class="container mt-5">
        <div class="register">
            <h4>REGISTER</h4>
            <input type="email" placeholder="Enter an email" v-model="email">
            <input type="password" placeholder="Enter your password" v-model="password">
            <button>Sign up</button>
            <p>Back to
                <router-link 
                    to="/loginpage"
                    tag = "a"
                    class="">
                    login
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name : "registerPage",
    data(){
        return {
            email : "",
            password : ""
        }
    },
}   
</script>

<style scoped>
    .register{
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
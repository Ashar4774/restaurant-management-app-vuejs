<template>
    <h1>
       Sign Up 
    </h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data(){
        return {
            name: '',
            email: '',
            password: '',
            count: 0
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/users', {
                id          :   this.count++,
                email       :   this.email,
                name        :   this.name,
                password    :   this.password
            });
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: "Home"})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: "Home"})
        } else {
            this.$router.push({name: "SignUp"})
        }
    }
}
</script>

<style>
.register input{
    height: 40px;
    width: 300px;
    display: block;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 1px solid skyblue;
}

.register button {
    border-radius: 5px;
    background-color: skyblue;
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
}
</style>
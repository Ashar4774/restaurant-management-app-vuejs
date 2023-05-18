<template>
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login()">Login</button>
        <router-link to="/sign-up" class="link">Create Account</router-link>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email : '',
            password: ''
        }
    },
    methods: {
        async login(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.log(result);
            if( result.status == 200 && result.data.length > 0){
                alert("login successfully");
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name: 'Home'})
            } else {
                this.$router.push({name: 'Login'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'Home'});
        } else {
            this.$router.push({name: 'Login'});
        }
    }
}
</script>
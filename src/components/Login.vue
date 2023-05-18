<template>
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login()">Login</button>
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
            let result = await axios.get('http://localhost:3000/users')
        }
    },
}
</script>
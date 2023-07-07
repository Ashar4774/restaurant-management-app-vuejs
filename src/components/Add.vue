<template>
    <HeaderComponent />
    <h1>Hello {{userName}}, welcome to Add Restaurant</h1>
    <div class="restaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter name">
        <input type="text" v-model="restaurant.address" placeholder="Enter address">
        <input type="number" v-model="restaurant.contact" placeholder="Enter contact number">
        <button type="button" v-on:click="addRestaurant()">Add</button>
        <router-link to="/" class="link">View List</router-link>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import axios from 'axios';
export default {
    name: 'AddRestaurant',
    data(){
        return {
            userName: '',
            restaurant:{
                name: '',
                address: '',
                contact:''
            }
        }
    },
    components:{
        HeaderComponent
    },
    methods: {
        async addRestaurant(){
            let result = await axios.post('http://localhost:3000/restaurants',{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            if(result.status == 201){
                this.$router.push({name: "Home"});
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.userName = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>
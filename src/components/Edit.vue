<template>
    <HeaderComponent />
    <h1>Hello {{userName}}, welcome to Edit Restaurant</h1>
    <div class="restaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter name">
        <input type="text" v-model="restaurant.address" placeholder="Enter address">
        <input type="number" v-model="restaurant.contact" placeholder="Enter contact number">
        <button type="button" v-on:click="updateRestaurant()">Update</button>
        <router-link to="/" class="link">View List</router-link>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import axios from 'axios';
export default {
    name: 'EditRestaurant',
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
        async updateRestaurant(){
            const update = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            if(update.status == 200){
                this.$router.push({name: "Home"});
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.userName = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }

        

        let edit = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        if(edit.status == 200){
            this.restaurant.name = edit.data.name,
            this.restaurant.address = edit.data.address,
            this.restaurant.contact = edit.data.contact
        }
    }
}
</script>
<template>
    <HeaderComponent />
    <h1>Hello {{name}}, welcome to Home component</h1>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Action</td>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.address }}</td>
        <td><router-link :to="'/edit-restaurant/'+restaurant.id">Edit</router-link> | <button type="button" v-on:click="dltRestaurant(restaurant.id)">Delete</button></td>
        <!-- <td><button type="button" v-on:click="editRestaurant()">Edit</button> | <button type="button" v-on:click="dltRestaurant()">Delete</button></td> -->
        </tr>
    </table>
</template>

<script>
import HeaderComponent from './Header.vue';
import axios from 'axios';
export default {
    name: 'HomeComponent',
    data(){
        return {
            name: '',
            restaurants:[]
        }
    },
    components:{
        HeaderComponent
    },
    methods:{
        async dltRestaurant(id){
            console.warn(id);
            let dlt = await axios.delete('http://localhost:3000/restaurants/'+id);
            if(dlt.status == 200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: "SignUp" })
            }

            let result = await axios.get(`http://localhost:3000/restaurants`);
            this.restaurants = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>
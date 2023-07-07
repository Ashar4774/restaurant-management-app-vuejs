<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    methods: {
        logout(){
            console.log("logout");
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    },
}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #f2f2f2;
    padding: 16px;
    text-decoration: none;
    text-align: center;
    margin-right: 5px;
}

.nav a:hover{
    color: #333;
    background: #ddd;
}
</style>
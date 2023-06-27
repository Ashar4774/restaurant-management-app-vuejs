<template>
    <HeaderComponent />
    <h1>Hello user, welcome to Add Restaurant</h1>
</template>

<script>
import HeaderComponent from './Header.vue';
export default {
    name: 'AddRestaurant',
    components:{
        HeaderComponent
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>
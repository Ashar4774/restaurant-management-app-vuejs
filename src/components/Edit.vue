<template>
    <HeaderComponent />
    <h1>Hello user, welcome to Edit Restaurant</h1>
</template>

<script>
import HeaderComponent from './Header.vue';
export default {
    name: 'EditRestaurant',
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
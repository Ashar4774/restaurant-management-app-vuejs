<template>
    <h1>Home component</h1>
</template>

<script>
export default {
    name:'HomeComponent',
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: "SignUp"})
        } else {
            this.$router.push({name: "Home"})
        }
    }
}
</script>
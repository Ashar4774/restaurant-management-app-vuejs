<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  padding: 0;
  margin: 0;
}

.register input, .login input, .restaurant input{
    height: 40px;
    width: 300px;
    display: block;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 1px solid skyblue;
}

.register button, .login button, .restaurant button {
    border-radius: 5px;
    background-color: skyblue;
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
}

.link{
    display: block;
    padding-top: 10px;
}
</style>

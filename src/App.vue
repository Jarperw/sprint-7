<template>
  <div id="app" class="container-fluid mt-5">
    <nav class="text-center my-3">
      <router-link to="/">Bienvenida</router-link> |
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav a{
  color: #555;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #000;
  font-weight: bolder;
  text-decoration: none;
}
</style>
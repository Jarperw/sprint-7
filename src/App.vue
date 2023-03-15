<template>
  <div id="app" class="container-fluid">
    <Home-view></Home-view>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
export default {
  name: 'App',
  components:{HomeView}
}
</script>

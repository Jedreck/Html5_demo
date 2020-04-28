<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">home</router-link>
      </li>
      <li>
        <router-link to="/home/message">message</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        name: "Home"
      }
    }
  }
</script>

<style scoped>

</style>
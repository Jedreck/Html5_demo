<template>
  <div>
    <ul>
      <li v-for="(news,index) in newsArray" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsArray: [
          "news 01",
          "news 02",
          "news 02"
        ]
      }
    }
  }
</script>

<style>

</style>
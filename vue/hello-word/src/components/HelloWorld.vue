<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: "Hello You"
            }
        }
    }
</script>

<style scoped>
  .msg {
    text-align: center;
    color: aqua;
    font-size: 30px;
  }
</style>

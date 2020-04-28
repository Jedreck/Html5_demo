<template>
  <dev>
    <img class="logo" src="../assets/logo.png" alt="logo">
    <div>
      {{msg}}
    </div>
    <br>
    <br>
    <br>
    <label>
      <input type="text" v-model="msg2" @keypress.enter="handleClick">
    </label>
    <mt-button @click="handleClick" size="small" type="danger">
      Submit
    </mt-button>
  </dev>
</template>

<script>
  import {Button, Toast} from 'mint-ui'

  export default {
    data() {
      return {
        msg: "Hello You ~",
        msg2: ""
      }
    },
    methods: {
      handleClick() {
        Toast('点击--' + this.msg2);
        this.msg = this.msg2;
      }
    },
    components: {
      'mt-button': Button
    }
  }
</script>

<style scoped>

</style>
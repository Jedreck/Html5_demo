<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <HelloWorld/>
    <mt-button @click="handleClick" size="small" type="danger" style="position: absolute;
     left: 50%;
     transform: translate(-50%, -50%);">
      Test
    </mt-button>
  </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import HelloWorld from "./components/HelloWorld";

    export default {
        components: {HelloWorld},
        methods: {
            handleClick() {
                Toast(' 点击了测试');
            }
        }
    }
</script>


<style scoped>
  .logo {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    width: 200px;
    height: 200px;
  }
</style>

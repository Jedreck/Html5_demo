<template>
  <div>
    <ul>
      <li v-for="msg in messageArray" :key="msg.id">
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <mt-button @click="pushShow(msg.id)">push</mt-button>
        <mt-button @click="replaceShow(msg.id)">replace</mt-button>
      </li>
    </ul>
    <mt-button @click="$router.back()">back</mt-button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'

  export default {
    name: "Message",
    data() {
      return {
        messageArray: []
      }
    },
    mounted() {
      setTimeout(() => {
        const message = [
          {
            id: 1,
            title: 'message 01'
          }, {
            id: 2,
            title: 'message 02'
          }, {
            id: 3,
            title: 'message 03'
          },
        ]
        this.messageArray = message
      }, 1000)
    },
    methods: {
      pushShow(id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    },
    components: {
      'mt-button': Button
    }
  }
</script>

<style scoped>

</style>
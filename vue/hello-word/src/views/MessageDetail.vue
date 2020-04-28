<template>
  <div>
    <loading type="fading-circle" v-show="loading">Loading...</loading>
    <ul v-show="!loading">
      <li>id : {{msg.id}}</li>
      <li>title : {{msg.title}}</li>
      <li>content : {{msg.content}}</li>
    </ul>
  </div>
</template>

<script>
  import {Spinner} from 'mint-ui';

  export default {
    name: "MessageDetail",
    data() {
      return {
        loading: false,
        msg: {
          id: '11',
          title: '',
          content: ''
        },
        allMsg: []
      }
    },
    mounted() {
      this.loading = true
      setTimeout(() => {
        this.allMsg = [
          {
            id: 1,
            title: 'title 01',
            content: 'content 01...........'
          }, {
            id: 2,
            title: 'title 02',
            content: 'content 02...........'
          }, {
            id: 3,
            title: 'title 03',
            content: 'content 03...........'
          }
        ];
        console.log(this.allMsg.length)
      }, 1000)
    },
    watch: {
      allMsg: function (value) {
        console.log('watch allMsg:' + this.allMsg.length)
        console.log('watch id:' + this.$route.params.id)
        this.msg = value.find(detail => detail.id === (this.$route.params.id * 1))
        this.loading = false
      },
      $route: function (value) {
        this.loading = true;
        this.msg = this.allMsg.find(detail => detail.id === (value.params.id * 1))
        this.loading = false
      }
    },
    components: {
      "loading": Spinner
    }
  }
</script>

<style scoped>

</style>
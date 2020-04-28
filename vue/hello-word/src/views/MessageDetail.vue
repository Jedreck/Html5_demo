<template>
  <ul>
    <li>id : {{msg.id}}</li>
    <li>title : {{msg.title}}</li>
    <li>content : {{msg.content}}</li>
  </ul>
</template>

<script>
  export default {
    name: "MessageDetail",
    data() {
      return {
        msg: {
          id: '',
          title: '',
          content: ''
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.allmsg = [
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
        console.log(this.allmsg.length)
      }, 1000)
    },
    watch: {
      $route: function (value) {
        this.msg = this.allmsg.find(detail => detail.id === (value.params.id * 1))
      }
    }
  }
</script>

<style scoped>

</style>
<template id="">
  <div class="p-5 h-screen text-center">
  <p>Enter a github username(handle) you'd like to explore.</p>
  <input class="my-5 p-1 border border-blue-400 bg-gray-200" type="text" v-model="username">
  <button class="mx-2 p-3 bg-blue-800 text-white rounded" v-on:click="setUsername">explore</button>
</div>
</template>

<script type="text/javascript">
  export default{
    methods:{
      setUsername: function(){
        if(this.username != ''){
          return this.$emit('set-username', this.username)
        }
      }
    },
    data() {
      return {
        username: ''
      }
    }
  }
</script>
